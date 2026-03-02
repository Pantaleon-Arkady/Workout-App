<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function createPost(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string'
        ]);

        $title = strip_tags($validated['title']);
        $content = strip_tags($validated['content']);
        $userId = Auth::id();

        Post::create([
            'title' => $title,
            'content' => $content,
            'user_id' => $userId
        ]);

        return redirect('/post');
    }
}
