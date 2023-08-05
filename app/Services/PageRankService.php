<?php

namespace App\Services;

use App\Models\PageRank;

class PageRankService
{
    public function savePageRank(array $pageRank): void
    {
        if (empty($pageRank['rank'])) {
            return;
        }
        PageRank::query()->updateOrCreate([
            'domain' => $pageRank['domain'],
        ],
            [
                'rank' => $pageRank['rank'],
                'updated_at' => now(),
            ]);
    }
}
