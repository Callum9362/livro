<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class UserProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'bio' => $this->faker->paragraph(3),
            'location' => $this->faker->city(),
            'picture' => $this->faker->imageURL(),
            'pronoun' => 'They',
            'dob' => $this->faker->date(),
            'website' => $this->faker->url(),
            'twitter' => '',
            'interests' => $this->faker->paragraph(1),
            'user_id' => User::all()->random()->id,
        ];
    }
}
