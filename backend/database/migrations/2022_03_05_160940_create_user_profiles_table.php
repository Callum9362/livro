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
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->text('bio')->nullable();
            $table->string('location')->nullable();
            $table->string('picture')->nullable();
            $table->string('pronoun')->nullable();
            $table->date('dob')->nullable();
            $table->string('website')->nullable();
            $table->string('twitter')->nullable();
            $table->text('interests')->nullable();
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
