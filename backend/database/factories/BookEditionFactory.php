<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookEditionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'book_id' => \App\Models\Book::first()->id,
            'num_pages' => rand(100, 2000),
            'isbn10' => $this->faker->isbn10(),
            'isbn13' => $this->faker->isbn13(),
            'published_date' => $this->faker->date(),
            'language' => 'English',
        ];
    }
}
