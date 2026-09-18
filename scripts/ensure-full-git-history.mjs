#!/usr/bin/env node
/**
 * Nextra stamps "Last updated on" from git (production builds only).
 * Vercel clones are shallow, so that date stays stuck on an old commit.
 * Unshallow before `next build`. Prefer also setting VERCEL_DEEP_CLONE=true
 * in the Vercel project so the clone itself is complete.
 */
import { execSync } from 'node:child_process'

function run(cmd, opts = {}) {
  return execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts }).trim()
}

try {
  run('git rev-parse --is-inside-work-tree')
} catch {
  process.exit(0)
}

let shallow = 'false'
try {
  shallow = run('git rev-parse --is-shallow-repository')
} catch {
  process.exit(0)
}

if (shallow !== 'true') {
  process.exit(0)
}

console.log(
  'Shallow git clone detected; fetching full history so Nextra last-updated dates match git.',
)
try {
  execSync('git fetch --unshallow', { stdio: 'inherit' })
} catch {
  console.warn(
    'Could not unshallow the repository. Set VERCEL_DEEP_CLONE=true in the Vercel project environment.',
  )
}
