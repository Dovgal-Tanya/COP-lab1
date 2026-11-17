import React from 'react';
import { KpiCard } from './components/KpiCard';
import { MovieStepper } from './components/MovieStepper';
import { ViewToggle } from './components/ViewToggle';
import { FilteredMovieList } from './components/FilteredMovieList';

export const App: React.FC = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
            <header style={{ marginBottom: '30px', borderBottom: '1px solid rgba(147, 51, 234, 0.2)', paddingBottom: '20px' }}>
                <h1 style={{ margin: '0 0 6px 0', color: '#f3e8ff', fontSize: '24px', fontWeight: '700' }}>
                    Кіно-Аналітика <span style={{ color: '#db2777' }}>Dashboard</span>
                </h1>

            </header>

            <section style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <KpiCard title="Фільмів у прокаті" value="42" trend="+12.5%" isPositive={true} />
                <KpiCard title="Середній рейтинг" value="8.4" trend="+3.2%" isPositive={true} />
                <KpiCard title="Касові збори" value="$2.4B" trend="+8.7%" isPositive={true} />
                <MovieStepper />
                <ViewToggle />
            </section>

            {}
            <section>
                <FilteredMovieList />
            </section>
        </div>
    );
};

export default App;