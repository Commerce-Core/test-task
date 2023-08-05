import React, { useState } from 'react';

export default function Search(search) {

    const [query, setQuery] = useState(search.search);

    return (
        <form className="flex w-full gap-2 my-5">
            <input type="text" name="search" className="flex-1 border my-5 rounded px-4 py-3 text-sm leading-4 text-gray-600 font-semibold" placeholder="Search by domain" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" className="border my-5 rounded px-4 py-3 text-sm leading-4 text-gray-600 font-semibold">Search</button>
        </form>
    );
}