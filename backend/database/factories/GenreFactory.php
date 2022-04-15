<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class GenreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->word();
        $slug = Str::of($name)->slug();

        return [
            'name' => $name,
            'description' => $this->faker->paragraph(),
            'slug' => $slug,
            'parent_id' => null
        ];
    }
}
