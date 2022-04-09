<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'original_title' => $this->faker->sentence(),
            'blurb' => $this->faker->paragraph(),
            'release_date' => $this->faker->date()
        ];
    }
}
