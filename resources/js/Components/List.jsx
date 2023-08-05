import React from 'react';
import Row from './Row';
import Search from './Search';

export default function List({ items, search }) {

    return (
        <div className="bg-white p-4 rounded border">
            <Search search={search} />
            <div className="flex w-full flex-col gap-2">
                <div className="flex">
                    <div className="mr-1 mb-1 px-4 py-3 text-sm flex-1 leading-4 text-gray-600 font-semibold border rounded">
                        Rank
                    </div>
                    <div className="mr-1 mb-1 px-4 py-3 text-sm flex-1 leading-4 text-gray-600 font-semibold border rounded">
                        Domain
                    </div>
                    <div className="mr-1 mb-1 px-4 py-3 text-sm flex-1 leading-4 text-gray-600 font-semibold border rounded">
                        Updated
                    </div>
                </div>
                {items.map((item, key) => (
                    <Row item={item} key={key} />
                ))}
            </div>
        </div>
    );
}