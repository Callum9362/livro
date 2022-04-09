<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BooksSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Author::factory(25)->create();

        \App\Models\Book::factory(25)->create()->each(function ($book) { 
            $book->authors()->attach(\App\Models\Author::inRandomOrder()->take(rand(1, 3))->get());
        });
    }
}
