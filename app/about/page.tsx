import Link from 'next/link';
import styles from './about.module.css';

const principles = [
  {
    title: 'Вдохновение и мотивация',
    description: 'Мы надеемся, что AchieveYou придаст вам вдохновение и мотивацию на свершение невероятных вещей в жизни.',
  },
  { 
    title: 'Жизнь многообразна',
    description: 'Список достижений в жизни бесконечен. AchieveYou - это лишь небольшой список вдохновляющих вещей, способных посмотреть на жизнь с новой стороны',
  },
  {
    title: 'Ответственность за себя',
    description: 'Некоторые достижения могут быть безумными или опасными для вас. Поэтому не рискуйте и не делайте то, что считаете для вас неподходящим.',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page} lang="en">
      <header className={styles.header}>
        <a className={styles.brand} href="/">AchieveYou</a>
        <a className={styles.about} href="/about">о нас</a>
      </header>

      <main>
        <section className={styles.intro} aria-labelledby="about-title">
          <p className={styles.label}>Наша Миссия</p>
          <h1 id="about-title" className={styles.title}>
            A quiet reminder to do more of what matters.
          </h1>
          <p className={styles.lead}>
            Этот проект создан, чтобы напоминать вам о том, насколько жизнь бывает разнообразной штукой.
          </p>
        </section>

        <ol className={styles.principles} role="list" aria-label="Our principles">
          {principles.map(({ title, description }, index) => (
            <li key={title}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2>{title}</h2>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </main>

      <footer className={styles.footer}>
        <span>194 дел</span>
        <span>17 легендарных достижений</span>
      </footer>
    </div>
  );
}
