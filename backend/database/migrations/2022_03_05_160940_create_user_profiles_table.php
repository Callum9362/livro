<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// Reference documentation https://laravel.com/docs/9.x/migrations#creating-tables

class CreateUserProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->text('bio');
            $table->string('location');
            $table->string('picture');
            $table->string('pronoun');
            $table->date('dob');
            $table->string('website');
            $table->string('twitter');
            $table->text('interests');
            $table->timestamps();
            
            // Reference a foreign key
            // https://laravel.com/docs/9.x/migrations#foreign-key-constraints
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_profiles');
    }
}
