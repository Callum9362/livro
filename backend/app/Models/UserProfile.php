<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id'
    ];

    /**
     * Create the connection from User profile to User 
     * It is a one to one relationship see https://laravel.com/docs/9.x/eloquent-relationships#one-to-one
     */
    public function user()
    {
        return $this->hasOne(User::class);
    }
}
