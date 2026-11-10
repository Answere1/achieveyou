import Link from 'next/link';
import type { Metadata } from 'next';
import AchievementsCatalog from './AchievementsCatalog';
import styles from './achievements.module.css';

export const metadata: Metadata = {
  title: 'Достижения | AchieveU',
  description: 'Каталог достижений в спорте, путешествиях, культуре и других категориях.',
};

export default function AchievementsPage() {
  return (
    <div className={styles.catalog}>
      <header className={styles.header}>
        <nav className={`${styles.wrap} ${styles.navigation}`} aria-label="Основная навигация">
          <Link className={styles.logo} href="/">AchieveYou</Link>
          <Link className={styles.about} href="/about">о нас</Link>
        </nav>
      </header>

      <main className={styles.wrap}>
        <section className={styles.hero} aria-labelledby="catalog-title">
          <h1 id="catalog-title">Есть вещи, которые стоит сделать за одну жизнь.</h1>
          <p>
            Каталог достижений в спорте, путешествиях, культуре и других категориях.{' '}
            <span>Среди них есть 16 легендарных.</span>
          </p>
        </section>

        <AchievementsCatalog />
      </main>
    </div>
  );
}
