<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageRank extends Model
{
    protected $fillable = [
        'rank',
        'domain',
    ];
}
