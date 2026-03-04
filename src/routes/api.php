<?php
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

// Protected routes
Route::middleware('web')->post('/create-post', [PostController::class, 'createPost']);

