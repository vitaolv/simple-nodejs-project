// SearchComponent.tsx
import { useState } from 'react';

import './styles/search.sass'
interface SearchComponentProps {
    onSearch: (searchValue: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <input
            className='search'
            type="text"
            placeholder="Buscar por nome ou código..."
            value={search}
            onChange={handleSearchChange}
        />
    );
}