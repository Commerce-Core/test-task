import React from 'react';

export default function Row({ item, key }) {

    return (
        <div key={key} className="flex">
            <div className="mr-1 mb-1 px-4 py-3 text-sm flex-1 leading-4 bg-white text-gray-400 border rounded">
                {item.rank}
            </div>
            <div className="mr-1 mb-1 px-4 py-3 text-sm flex-1 leading-4 bg-white text-gray-400 border rounded">
                {item.domain}
            </div>
        </div>
    );
}
