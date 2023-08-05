<?php

namespace App\Http\Controllers;

use App\Models\PageRank;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageRankListController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->query('search');

        return Inertia::render('PageRankList', [
            'pageRanks' => PageRank::query()->when(
                $search,
                fn ($query) => $query->where('domain', 'like', "%{$search}%")
            )->orderBy('rank')->paginate(100)->withQueryString(),
            'search' => $search ?? '',
        ]);
    }
}
