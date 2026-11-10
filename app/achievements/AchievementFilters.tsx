import {
  categories,
  difficulties,
  type Category,
  type Difficulty,
  type SortOrder,
} from '../../data/achievements';
import styles from './achievements.module.css';

type Props = {
  category: Category | 'Все';
  onCategoryChange: (value: Category | 'Все') => void;
  difficulty: Difficulty | 'Все';
  onDifficultyChange: (value: Difficulty | 'Все') => void;
  query: string;
  onQueryChange: (value: string) => void;
  sort: SortOrder;
  onSortChange: (value: SortOrder) => void;
};

export default function AchievementFilters({
  category, onCategoryChange, difficulty, onDifficultyChange,
  query, onQueryChange, sort, onSortChange,
}: Props) {
  return (
    <section className={styles.filters} aria-label="Фильтры достижений">
      <div className={styles['filter-row']}>
        <div className={styles.chips} role="group" aria-label="Категория">
          {(['Все', ...categories] as const).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={category === value}
              onClick={() => onCategoryChange(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={query}
          placeholder="Поиск"
          aria-label="Поиск достижений"
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>

      <div className={styles['filter-row']}>
        <div className={styles.chips} role="group" aria-label="Сложность">
          {(['Все', ...difficulties] as const).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={difficulty === value}
              className={value === 'Легендарный' ? styles.legendary : undefined}
              onClick={() => onDifficultyChange(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortOrder)}
          aria-label="Сортировка достижений"
        >
          <option value="default">По умолчанию</option>
          <option value="name">По названию</option>
          <option value="difficulty">По сложности</option>
        </select>
      </div>
    </section>
  );
}
