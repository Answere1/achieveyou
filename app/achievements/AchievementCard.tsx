import {
  difficulties,
  type Achievement,
} from '../../data/achievements';
import styles from './achievements.module.css';

type Props = {
  achievement: Achievement;
  done: boolean;
  disabled: boolean;
  onToggle: (id: string) => void;
};

export default function AchievementCard({ achievement, done, disabled, onToggle }: Props) {
  const legendary = achievement.difficulty === 'Легендарный';
  const level = difficulties.indexOf(achievement.difficulty) + 1;

  return (
    <li className={legendary ? `${styles.card} ${styles.legendary}` : styles.card}>
      <div className={styles['card-top']}>
        <span className={styles.emblem} aria-hidden="true">{done ? '✓' : ''}</span>
        <span className={styles.dots} role="img" aria-label={`Сложность: ${achievement.difficulty}`}>
          {Array.from({ length: 4 }, (_, index) => (
            <i key={index} className={index < level ? styles.filled : undefined} />
          ))}
        </span>
      </div>

      <h2>{achievement.title}</h2>
      <p>{achievement.description}</p>

      <div className={styles['card-footer']}>
        <span>
          {achievement.category} · <span className={styles.rate}>{achievement.completionRate}%</span>
        </span>
        <button
          type="button"
          aria-pressed={done}
          disabled={disabled}
          aria-label={`${done ? 'Снять отметку' : 'Отметить выполнение'}: ${achievement.title}`}
          onClick={() => onToggle(achievement.id)}
        >
          {done ? 'Выполнено' : 'Отметить'}
        </button>
      </div>
    </li>
  );
}
