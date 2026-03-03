<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

// Catch-all for SPA
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*$');