<?php

namespace App\Http\Controllers;

abstract class Controller
{
    protected function unauthenticated($request, array $guards)
    {
        return $request->expectsJson()
            ? response()->json(['message' => 'Unauthenticated.'], 401)
            : redirect()->guest(route('login'));
    }
}
