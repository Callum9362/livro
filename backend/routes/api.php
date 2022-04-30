<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\BookGenreController;
use App\Http\Controllers\BookController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('profile')->name('profile.')->group(function () {

    // Get all the profiles
    Route::get('', [UserProfileController::class, 'index'])->name('index');

    // Get profile for user
    Route::get('{username:username}', [UserProfileController::class, 'show'])->name('show');

    // Edit a given profile
    Route::post('edit/{profile}', [UserProfileController::class, 'update'])->name('update');
});

Route::prefix('books')->name('books.')->group(function () {
    Route::get('', [BookController::class, 'index'])->name('index');
    Route::get('/{id}', [BookController::class, 'show'])->name('show');
});

Route::prefix('genres')->name('genres.')->group(function () {
    Route::get('', [BookGenreController::class, 'index'])->name('index');
    Route::get('{slug:slug}', [BookGenreController::class, 'show'])->name('show');
});