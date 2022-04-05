<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserProfileController;

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
