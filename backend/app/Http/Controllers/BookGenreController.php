<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;

class BookGenreController extends Controller
{
    public function index()
    {
        return Genre::all();
    }

    public function show(Request $request, $slug)
    {
        $genre = Genre::where(['slug' => $slug])->first();
        return [
            'genre' => $genre,
            'books' => $genre->books()->limit(10)->get()
        ];
    }
}
