<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageRank extends Model
{
    use HasFactory;

    protected $fillable = [
        'rank',
        'domain',
    ];
}
