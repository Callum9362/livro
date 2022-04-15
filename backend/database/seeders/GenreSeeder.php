<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class GenreSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $genres = [
            ['name' => 'Classics'],
            ['name' => 'Fantasy'],
            ['name' => 'Horror'],
            ['name' => 'Romance'],
            ['name' => 'Historical Fiction'],

        ];
        foreach($genres as $genre)
        {
            \App\Models\Genre::factory(1)->create([
                'name' => $genre['name'],
                'slug' => Str::of($genre['name'])->slug()
            ]);
        }
    }
}
