<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    public function show(Post $post)
    {
        return response()->json($post);
    }

    public function deletePost(Request $request)
    {
        $request->validate([
            'postId' => 'required|exists:posts,id'
        ]);

        $post = Post::find($request->postId);

        if (Auth::id() !== $post->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $post->delete();

        return response()->json([
            'message' => 'Deleted'
        ]);
    }

    public function retrievePost(Request $request)
    {
        $query = Post::with('user');

        if ($request->user_id) {
            $query->where('user_id', $request->user_id);
        }

        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('content', 'like', '%' . $request->search . '%')
                    ->orWhere('title', 'like', '%' . $request->search . '%');
            });
        }

        if ($request->sort === 'oldest') {
            $query->oldest();
        } else {
            $query->latest();
        }

        $posts = $query->paginate(10);

        return response()->json($posts);
    }

    public function createPost(Request $request)
    {
        Log::info('Auth user', ['user' => Auth::user(), 'id' => Auth::id()]);
        Log::info('Cookies', ['cookies' => $request->cookies->all()]);

        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
        ]);

        $title = strip_tags($validated['title']);
        $content = strip_tags($validated['content']);
        $userId = Auth::id();

        if (!$userId) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        Post::create([
            'title' => $title,
            'content' => $content,
            'user_id' => $userId
        ]);

        return response()->json([
            'message' => 'Post created successfully'
        ], 201);
    }
}
