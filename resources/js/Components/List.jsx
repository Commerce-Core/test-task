import React from 'react';
import Row from './Row';
import Search from './Search';

export default function List({ items, search, header }) {

    return (
        <div className="bg-white p-4 rounded border">
            <Search search={search} />
            <div className="flex w-full flex-col gap-4 lg:gap-0">
                <div className="hidden lg:flex">
                    {Object.keys(header).map((key) => (
                        <div className="px-4 py-3 text-xs flex-1 leading-4 font-semibold text-gray-600 border rounded">
                            {header[key]}
                        </div>
                    ))}
                </div>
                {items.map((item) => (
                    <Row item={item} header={header} />
                ))}
            </div>
        </div>
    );
}