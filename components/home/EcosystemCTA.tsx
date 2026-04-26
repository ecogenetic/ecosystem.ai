import styles from './ecosystem-cta.module.css'

export function EcosystemCTA() {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <a
          className={styles.cta}
          href="https://github.com/ecogenetic/ecosystem.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          ecosystem.Ai Git Repo <span>↗</span>
        </a>
      </div>
    </section>
  )
}

export default EcosystemCTA
