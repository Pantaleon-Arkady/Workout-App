<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

// Catch-all for SPA
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*$');


Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout']);


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/create-post', [PostController::class, 'createPost']);
    Route::get('/users', [UserController::class, 'index']);
});