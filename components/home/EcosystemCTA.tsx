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
          Source on GitHub <span>↗</span>
        </a>
      </div>
    </section>
  )
}

export default EcosystemCTA
