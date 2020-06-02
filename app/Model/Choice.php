<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Choice extends Model
{
    //
    protected $fillable = [
        'text',
    ];

    public function poll()
    {
        return $this->belongsTo(Poll::class, 'poll_id');
    }
}
