<?php

use Illuminate\Support\Facades\Route;

// Catch-all for SPA
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*$');