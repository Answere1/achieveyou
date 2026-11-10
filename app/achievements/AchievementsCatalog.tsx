'use client';

import { useEffect, useState } from 'react';
import AchievementCard from './AchievementCard';
import AchievementFilters from './AchievementFilters';
import {
  achievements,
  difficulties,
  type Achievement,
  type SortOrder,
} from '../../data/achievements';
import styles from './achievements.module.css';

// Не меняем ключ: старые отметки выполнения продолжат работать.
const storageKey = 'achieveyou:completed';
const normalize = (value: string) => value.toLocaleLowerCase('ru').replace(/ё/g, 'е');

export default function AchievementsCatalog() {
  const [category, setCategory] = useState<Achievement['category'] | 'Все'>('Все');
  const [difficulty, setDifficulty] = useState<Achievement['difficulty'] | 'Все'>('Все');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOrder>('default');
  const [completed, setCompleted] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
      if (Array.isArray(saved)) {
        setCompleted([...new Set(saved.filter((id): id is string => typeof id === 'string'))]);
      }
    } catch {
      // Каталог остаётся доступен, даже если браузерное хранилище недоступно.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(completed));
    } catch {
      // В этом случае отметки сохраняются только до обновления страницы.
    }
  }, [completed, ready]);

  const completedSet = new Set(completed);
  const search = normalize(query.trim());

  const visible = achievements.filter((item) =>
    (category === 'Все' || item.category === category) &&
    (difficulty === 'Все' || item.difficulty === difficulty) &&
    normalize(`${item.title} ${item.description} ${item.category}`).includes(search)
  );

  if (sort === 'name') {
    visible.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
  }
  if (sort === 'difficulty') {
    visible.sort((a, b) => difficulties.indexOf(a.difficulty) - difficulties.indexOf(b.difficulty));
  }

  const completedCount = achievements.filter(({ id }) => completedSet.has(id)).length;

  function toggleCompleted(id: string) {
    setCompleted((previous) =>
      previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]
    );
  }

  return (
    <>
      <AchievementFilters
        category={category}
        onCategoryChange={setCategory}
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
        query={query}
        onQueryChange={setQuery}
        sort={sort}
        onSortChange={setSort}
      />

      <div className={styles.stats} aria-live="polite">
        <span>Показано {visible.length} из {achievements.length}</span>
        <strong>{completedCount}/{achievements.length} выполнено</strong>
      </div>

      {visible.length === 0 ? (
        <p className={styles.empty}>По этим условиям ничего не найдено.</p>
      ) : (
        <ul className={styles.cards} aria-label="Достижения">
          {visible.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              done={completedSet.has(item.id)}
              disabled={!ready}
              onToggle={toggleCompleted}
            />
          ))}
        </ul>
      )}
    </>
  );
}
