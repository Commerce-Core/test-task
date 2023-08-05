<?php

return [
    'url' => env('PAGE_RANK_API_URL', 'https://openpagerank.com/api/v1.0/getPageRank'),
    'page_rank_json_url' => env('PAGE_RANK_JSON_URL', 'https://raw.githubusercontent.com/Kikobeats/top-sites/master/top-sites.json'),
    'api_key' => env('PAGE_RANK_API_KEY'),
];
