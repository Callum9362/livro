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
        'user_id',
        'first_name',
        'last_name',
        'bio',
        'location',
        'interests',
        'pronoun',
        'website',
        'twitter',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'dob',
        'updated_at'
    ];

    /**
     * Create the connection from User profile to User
     * It is a one to one relationship see https://laravel.com/docs/9.x/eloquent-relationships#one-to-one
     */
    public function user()
    {
        return $this->belongsTo(User::class)->select(['id', 'username']);
    }
}
