<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create([
            'username' => 'Callum',
            'email' => 'callum.gill.1993.cg@gmail.com',
        ])->each(function ($user) { 
            \App\Models\UserProfile::factory(1)->create(['user_id' => $user->id]);
        });

        \App\Models\User::factory(10)->create()->each(function ($user) { 
            \App\Models\UserProfile::factory(1)->create(['user_id' => $user->id]);
        });

        $this->call([
            GenreSeeder::class,
            BooksSeeder::class  
        ]);
    }
}
