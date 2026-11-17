export interface Movie {
    id: number;
    title: string;
    genre: string;
    rating: number;
    budget: string;
    status: 'У прокаті' | 'Топ-рейтинг';
}