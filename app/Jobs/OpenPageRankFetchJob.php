<?php

namespace App\Jobs;

use App\Services\PageRankService;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class OpenPageRankFetchJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            $client = new Client();
            $response = $client->request('GET', config('page-rank.page_rank_json_url'));
            $domains = json_decode($response->getBody()->getContents(), true);
            collect($domains)->pluck('rootDomain')->chunk(100)->each(function (Collection $domains) {
                $this->getNewPageRankByDomain($domains);
            });
        } catch (ClientException $e) {
            Log::error($e->getMessage());
        }
    }

    /**
     * Get new page rank by domain
     */
    private function getNewPageRankByDomain(Collection $domains): void
    {
        try {
            $client = new Client();
            $response = $client->request('GET', config('page-rank.url'), [
                'query' => [
                    'domains' => $domains->map(fn ($value) => trim($value))->toArray(),
                ],
                'headers' => [
                    'Accept' => 'application/json',
                    'API-OPR' => config('page-rank.api_key'),
                ],
            ]);
            $pageRanks = json_decode($response->getBody()->getContents(), true);
            collect($pageRanks['response'])->each(function (array $pageRank) {
                app(PageRankService::class)->savePageRank($pageRank);
            });

        } catch (ClientException $e) {
            Log::error($e->getMessage());
        }
    }
}
