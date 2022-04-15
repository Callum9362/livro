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
        \App\Models\Author::factory(200)->create();
        \App\Models\Publisher::factory(20)->create();

        \App\Models\Book::factory(1000)->create()->each(function ($book) 
        { 
            $book->authors()->attach(\App\Models\Author::inRandomOrder()->take(rand(1, 5))->get());
            $book->publishers()->attach(\App\Models\Publisher::inRandomOrder()->take(rand(1, 2))->get());
            \App\Models\BookEdition::factory(rand(1, 5))->create(['book_id' => $book->id]);
        });

        


    }
}
