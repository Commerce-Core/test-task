import React from 'react';

export default function Row({ item, header }) {
    return (
        <div className="flex flex-col border rounded lg:border-none lg:rounded-none lg:flex-row">
            <div className="px-2 pt-2 text-xs font-semibold flex-1 leading-4 text-gray-600 lg:hidden">
                {header.rank}
            </div>
            <div className="px-2 lg:px-4 lg:py-3 text-xs flex-1 leading-4 text-gray-400 lg:border lg:rounded">
                {item.rank}
            </div>
            <div className="px-2 pt-2 text-xs font-semibold flex-1 leading-4 text-gray-600 lg:hidden">
                {header.domain}
            </div>
            <div className="px-2 lg:px-4 lg:py-3 text-xs flex-1 leading-4 text-gray-400 lg:border lg:rounded">
                {item.domain}
            </div>
            <div className="px-2 pt-2 text-xs flex-1 font-semibold leading-4 text-gray-600 lg:hidden">
                {header.updated_at}
            </div>
            <div className="px-2 pb-2 lg:px-4 lg:py-3 text-xs flex-1 leading-4 text-gray-400 lg:border lg:rounded">
                {new Date(item.updated_at).toLocaleString()}
            </div>
        </div>
    );
}
