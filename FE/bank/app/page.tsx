import styles from './Home.module.css'

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>BANK</h1>
      <p className={styles.subtitle}>
        Cadastre, consulte e gerencie candidatos
      </p>
    </main>
  )
}
