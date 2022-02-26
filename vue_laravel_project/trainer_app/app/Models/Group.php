<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'group',
        'user_level',
        'accompanied',
        'invalid',
        'user_photo',
        'missing'
    ];

    public function usr_param() {

        return $this->belongsTo(User::class, 'user_id');
    }
}