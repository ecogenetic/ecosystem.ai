#!/usr/bin/env python3.14
"""Generate DEVELOPER_CONTENT.md from ecosystem.ai MDX docs for RAG / search indexing.

Strips MDX frontmatter, imports/exports, and presentation components while preserving
technical prose, code, tables, mermaid diagrams, and document structure.

Usage:
    python3.14 scripts/generate_developer_content.py
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
CHANGELOG_CONTENT = ROOT / "components" / "changelog" / "content"
OUT = ROOT / "DEVELOPER_CONTENT.md"

# Non-developer / legal / marketing-only / docs-site chrome
EXCLUDE_EXACT = {
    "index.mdx",
    "tos.mdx",
    "privacy.mdx",
    "cookie.mdx",
    "subscribe.mdx",
    "unsubscribe.mdx",
    "about.mdx",
    "pricing.mdx",
    "404.mdx",
    "README.mdx",
    # Nextra/docs-site component demos (lorem ipsum, not product docs)
    "docs/documentation/examples.mdx",
    "docs/documentation/syntax_highlighting.mdx",
}
EXCLUDE_PREFIXES = ("authors/",)

SECTION_ORDER = ("docs", "changelog", "blog")


def should_include(rel: str) -> bool:
    if not rel.endswith(".mdx"):
        return False
    if rel in EXCLUDE_EXACT:
        return False
    for p in EXCLUDE_PREFIXES:
        if rel == p or rel.startswith(p):
            return False
    return (
        rel.startswith("docs/")
        or rel.startswith("blog/")
        or rel.startswith("changelog/")
        or rel == "changelog.mdx"
    )


def strip_frontmatter(text: str) -> tuple[dict[str, str], str]:
    meta: dict[str, str] = {}
    if not text.startswith("---"):
        return meta, text
    end = text.find("\n---", 3)
    if end == -1:
        return meta, text
    fm = text[3:end].strip()
    body = text[end + 4 :].lstrip("\n")
    for line in fm.splitlines():
        if ":" not in line or line.lstrip().startswith("-"):
            continue
        key, val = line.split(":", 1)
        key = key.strip()
        val = val.strip().strip("\"'")
        if key and key != "tags":
            meta[key] = val
    tags = re.search(r"^tags:\s*\n((?:\s*-\s*.+\n?)*)", fm, re.M)
    if tags:
        tag_vals = re.findall(r"-\s*(.+)", tags.group(1))
        if tag_vals:
            meta["tags"] = ", ".join(t.strip() for t in tag_vals)
    return meta, body


def remove_imports_exports(text: str) -> str:
    lines: list[str] = []
    for line in text.splitlines():
        s = line.strip()
        if s.startswith("import ") or s.startswith("export "):
            continue
        lines.append(line)
    return "\n".join(lines)


def extract_jsx_inner(tag: str, text: str) -> str:
    text = re.sub(rf"<{re.escape(tag)}(\s[^>]*)?\s*/>", "", text, flags=re.I)
    pattern = re.compile(
        rf"<{re.escape(tag)}(\s[^>]*)?>(.*?)</{re.escape(tag)}>",
        re.DOTALL | re.IGNORECASE,
    )

    def repl(m: re.Match[str]) -> str:
        attrs = m.group(1) or ""
        inner = m.group(2).strip()
        title = None
        tm = re.search(r'title=["\']([^"\']+)["\']', attrs)
        if tm:
            title = tm.group(1)
        typ = None
        ty = re.search(r'type=["\']([^"\']+)["\']', attrs)
        if ty:
            typ = ty.group(1)
        href = None
        hm = re.search(r'href=["\']([^"\']+)["\']', attrs)
        if hm:
            href = hm.group(1)
        parts: list[str] = []
        lower = tag.lower()
        if lower == "callout":
            label = (title or typ or "Note").strip()
            parts.append(f"**{label}:** {inner}" if inner else f"**{label}**")
        elif lower in ("cards.card", "card"):
            label = (title or "").strip()
            if not label:
                cleaned = re.sub(r"!\[.*?\]\(.*?\)", "", inner).strip()
                label = cleaned.split("\n", 1)[0].strip() if cleaned else (href or "")
            if href and label:
                parts.append(f"- [{label}]({href})")
            elif href:
                parts.append(f"- {href}")
            elif label:
                parts.append(f"- {label}")
        elif lower == "tabs.tab":
            label = title or "Section"
            parts.append(f"### {label}\n\n{inner}")
        elif lower == "filetree.file":
            name = title or ""
            nm = re.search(r'name=["\']([^"\']+)["\']', attrs)
            if nm:
                name = nm.group(1)
            parts.append(f"- {name}")
        elif lower == "filetree.folder":
            name = title or ""
            nm = re.search(r'name=["\']([^"\']+)["\']', attrs)
            if nm:
                name = nm.group(1)
            parts.append(f"**{name}/**\n{inner}")
        else:
            if title:
                parts.append(f"**{title}**")
            if inner:
                parts.append(inner)
        return "\n".join(parts)

    prev = None
    while prev != text:
        prev = text
        text = pattern.sub(repl, text)
    return text


def strip_jsx(text: str) -> str:
    fences: list[str] = []

    def save_fence(m: re.Match[str]) -> str:
        fences.append(m.group(0))
        return f"@@FENCE{len(fences) - 1}@@"

    text = re.sub(r"```[\s\S]*?```", save_fence, text)

    for tag in (
        "BlogHeader",
        "ChangelogHeader",
        "AuthorProfile",
        "Image",
        "QuickStartLocal",
        "CustomEndpoints",
        "Logo",
        "ToolKit",
        "Changelog",
        "Roadmap",
        "Blog",
        "OurAuthors",
        "Content",
        "Button",
        "LinkButton",
        "AlertButton",
        "Carousel",
    ):
        text = re.sub(rf"<{tag}(\s[^>]*)?\s*/>", "", text)
        text = re.sub(rf"<{tag}(\s[^>]*)?>[\s\S]*?</{tag}>", "", text)

    for tag in (
        "Callout",
        "Cards.Card",
        "Tabs.Tab",
        "FileTree.File",
        "FileTree.Folder",
        "FileTree",
        "Tabs",
        "Cards",
        "Steps",
        "Features",
        "Feature",
        "OptionTable",
    ):
        text = extract_jsx_inner(tag, text)

    text = re.sub(
        r"</?(?:div|span|section|main|aside|header|footer|p|img)(\s[^>]*)?/?>",
        "",
        text,
        flags=re.I,
    )
    text = re.sub(r"<[A-Z][A-Za-z0-9.]*(\s[^>]*)?\s*/>", "", text)
    text = re.sub(
        r"<([A-Z][A-Za-z0-9.]*)(\s[^>]*)?>(.*?)</\1>",
        lambda m: m.group(3),
        text,
        flags=re.DOTALL,
    )
    text = re.sub(r"<[A-Z][A-Za-z0-9.]*(\s[^>]*)?>", "", text)
    text = re.sub(r"</[A-Z][A-Za-z0-9.]*>", "", text)
    text = re.sub(r"\{\/\*[\s\S]*?\*\/\}", "", text)
    text = re.sub(r"\{\s*['\"]\s*['\"]\s*\}", "", text)
    text = re.sub(r"\{\s*\}", "", text)

    for i, fence in enumerate(fences):
        text = text.replace(f"@@FENCE{i}@@", fence)

    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def resolve_changelog_content(body: str) -> str:
    m = re.search(
        r"import\s+Content\s+from\s+['\"]@/components/changelog/content/([^'\"]+)['\"]",
        body,
    )
    if not m:
        return body
    name = m.group(1)
    if not name.endswith(".mdx"):
        name += ".mdx"
    path = CHANGELOG_CONTENT / name
    if not path.exists():
        return body
    extra = path.read_text(encoding="utf-8")
    _, ebody = strip_frontmatter(extra)
    ebody = remove_imports_exports(ebody)
    ebody = strip_jsx(ebody)
    body = re.sub(r"<Content\s*/>", "\n\n" + ebody + "\n\n", body)
    body = re.sub(r"<Content\s*>\s*</Content>", "\n\n" + ebody + "\n\n", body)
    return body


def clean_mdx(raw: str) -> tuple[dict[str, str], str]:
    meta, body = strip_frontmatter(raw)
    body = resolve_changelog_content(body)
    body = remove_imports_exports(body)
    body = strip_jsx(body)
    return meta, body


def path_to_url(rel: str) -> str:
    p = rel[:-4] if rel.endswith(".mdx") else rel
    if p.endswith("/index"):
        p = p[: -len("/index")]
    return f"https://ecosystem.ai/{p}"


def section_key(rel: str) -> str:
    if rel.startswith("docs/"):
        return "docs"
    if rel.startswith("changelog") or rel == "changelog.mdx":
        return "changelog"
    if rel.startswith("blog/"):
        return "blog"
    return "other"


def slug_anchor(rel: str) -> str:
    s = rel[:-4] if rel.endswith(".mdx") else rel
    s = s.lower().replace("/", "-").replace("_", "-").replace(".", "-")
    return re.sub(r"[^a-z0-9-]+", "-", s)


def main() -> None:
    selected = [
        f
        for f in sorted(CONTENT.rglob("*.mdx"))
        if should_include(str(f.relative_to(CONTENT)).replace("\\", "/"))
    ]

    def sort_key(p: Path) -> tuple[int, str]:
        rel = str(p.relative_to(CONTENT)).replace("\\", "/")
        sk = section_key(rel)
        order = SECTION_ORDER.index(sk) if sk in SECTION_ORDER else 99
        return (order, rel)

    selected.sort(key=sort_key)

    articles: list[tuple[str, dict[str, str], str]] = []
    for f in selected:
        rel = str(f.relative_to(CONTENT)).replace("\\", "/")
        meta, body = clean_mdx(f.read_text(encoding="utf-8"))
        if not body or len(body.strip()) < 20:
            if meta.get("description") and len(meta["description"]) > 20:
                body = meta["description"]
            else:
                continue
        articles.append((rel, meta, body))

    parts: list[str] = [
        "# ecosystem.Ai Developer Documentation",
        "",
        "This file consolidates the ecosystem.Ai developer documentation for search indexing, "
        "LLM RAG, and offline reference. Content is derived from the published docs at "
        "https://ecosystem.ai. MDX frontmatter, imports, and presentation components have been "
        "removed; technical prose, code, tables, and structure are preserved.",
        "",
        f"Corpus: {len(articles)} documents. Regenerate with "
        "`python3.14 scripts/generate_developer_content.py`.",
        "",
        "## Document index",
        "",
    ]

    for rel, meta, _ in articles:
        title = meta.get("title") or Path(rel).stem.replace("_", " ").title()
        parts.append(f"- [{title}](#{slug_anchor(rel)}) — `{rel}` — {path_to_url(rel)}")

    parts.extend(["", "---", ""])

    current_section: str | None = None
    for rel, meta, body in articles:
        sk = section_key(rel)
        if sk != current_section:
            current_section = sk
            parts.extend([f"# Section: {sk.replace('_', ' ').title()}", ""])

        title = meta.get("title") or Path(rel).stem.replace("_", " ").title()
        parts.append(f"## {title}")
        parts.append("")
        parts.append(f"Source: `{rel}`")
        parts.append(f"URL: {path_to_url(rel)}")
        if meta.get("description"):
            parts.append(f"Summary: {meta['description']}")
        if meta.get("date"):
            parts.append(f"Date: {meta['date']}")
        if meta.get("tags"):
            parts.append(f"Tags: {meta['tags']}")
        parts.append("")
        parts.append(body)
        parts.append("")
        parts.append("---")
        parts.append("")

    text = re.sub(r"\n{3,}", "\n\n", "\n".join(parts))
    OUT.write_text(text, encoding="utf-8")
    print(f"Wrote {OUT}")
    print(f"Articles: {len(articles)}")
    print(f"Bytes: {OUT.stat().st_size}")
    print(f"Lines: {text.count(chr(10)) + 1}")


if __name__ == "__main__":
    main()
