import React from 'react';
import Pagination from '../Components/Pagination';
import List from '../Components/List';

export default function PageRankList({ pageRanks, search }) {

    return (
        <div className="container my-2 lg:my-10 mx-auto px-4 sm:px-8 border rounded py-10 bg-slate-100">
            <h1 className="text-center text-xl pb-10 lg:text-2xl font-semibold text-gray-800">PageRank List with search by domain</h1>
            <List items={pageRanks.data} search={search} />
            <Pagination links={pageRanks.links} />
        </div>
    )
}