import React, { useState } from 'react';
import { type Movie } from '../types/movie';

const MOCK_MOVIES: Movie[] = [
    { id: 1, title: 'Дюна: Частина друга', genre: 'Фантастика', rating: 8.6, budget: '$190 млн', status: 'У прокаті' },
    { id: 2, title: 'Оппенгеймер', genre: 'Біографія', rating: 8.9, budget: '$100 млн', status: 'Топ-рейтинг' },
    { id: 3, title: 'Аватар: Шлях води', genre: 'Фантастика', rating: 7.6, budget: '$350 млн', status: 'У прокаті' },
    { id: 4, title: 'Втеча з Шоушенка', genre: 'Драма', rating: 9.3, budget: '$25 млн', status: 'Топ-рейтинг' },
    { id: 5, title: 'Темний лицар', genre: 'Бойовик', rating: 9.0, budget: '$185 млн', status: 'Топ-рейтинг' },
];

export const FilteredMovieList: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<string>('Всі');
    const genres = ['Всі', 'Фантастика', 'Біографія', 'Драма', 'Бойовик'];

    const filteredMovies = selectedGenre === 'Всі'
        ? MOCK_MOVIES
        : MOCK_MOVIES.filter((movie) => movie.genre === selectedGenre);

    return (
        <div style={containerStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                <h4 style={{ margin: 0, color: '#f3e8ff', fontSize: '16px' }}>Фільмотека (Каталог)</h4>
                <div>
                    <label style={{ fontSize: '13px', marginRight: '8px', color: '#a78bfa' }}>Жанр:</label>
                    <select
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            border: '1px solid rgba(147, 51, 234, 0.4)',
                            background: '#150f24',
                            color: '#f3e8ff',
                            outline: 'none'
                        }}
                    >
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {filteredMovies.map((movie) => (
                    <li key={movie.id} style={itemStyle}>
                        <div>
                            <strong style={{ color: '#f3e8ff', fontSize: '15px' }}>{movie.title}</strong>
                            <span style={{ color: '#a78bfa', fontSize: '13px', marginLeft: '6px' }}>({movie.genre})</span>
                            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>Статус: {movie.status} • Бюджет: {movie.budget}</div>
                        </div>
                        <div style={{ background: 'rgba(236, 72, 153, 0.15)', padding: '6px 10px', borderRadius: '8px', color: '#f472b6', fontWeight: 'bold', fontSize: '13px', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                            ★ {movie.rating}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    background: 'rgba(30, 20, 56, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(147, 51, 234, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    marginTop: '20px',
    boxShadow: '0 8px 32px rgba(15, 10, 26, 0.3)'
};

const itemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '1px solid rgba(147, 51, 234, 0.1)'
};