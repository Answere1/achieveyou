import Link from 'next/link';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.page} lang="en">
      <header className={styles.header}>
        <Link className={styles.logo} href="/">AchieveYou</Link>
        <Link className={styles.about} href="/about">о нас</Link>
      </header>

      <main className={styles.hero} aria-labelledby="home-title">
        <p className={styles.eyebrow}>достижения длинной в целую жизнь</p>
        <h1 id="home-title" className={styles.title}>
          <span>Things worth</span>{' '}
          <span>doing in one life.</span>
        </h1>
        <p className={styles.description}>
          Выполняйте невероятные вещи в жизни. От самых простых до невыполнимых.
        </p>
        <Link className={styles.start} href="/achievements">
          Начать
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 18 18 6M8 6h10v10" stroke="currentColor" strokeWidth="1.7"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </main>

      <footer className={styles.footer}>
        <span>194 дел</span>
        <span>17 легендарных достижений</span>
      </footer>
    </div>
  );
}
