<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    //
    public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function poll()
    {
        return $this->belongsTo(Poll::class, "poll_id");
    }

    public function choice()
    {
        return $this->belongsTo(Choice::class, 'poll_id');
    }
}
