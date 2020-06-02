<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Poll extends Model
{
    //
    protected $fillable = [
        'question', 
        'expiration_date_time',
        'created_by',
        'updated_by',
    ];

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    public function choices()
    {
        return $this->hasMany(Choice::class, 'poll_id');
    }
}
