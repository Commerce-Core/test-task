<?php

namespace App\Console\Commands;

use App\Jobs\OpenPageRankFetchJob;
use Illuminate\Console\Command;

class OpenPageRankFetchCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'page-rank:fetch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch page rank from Open Page Rank API and save to database';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        OpenPageRankFetchJob::dispatch();
    }
}
