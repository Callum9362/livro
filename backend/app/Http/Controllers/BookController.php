<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $limit = $request->get('limit');
        return Book::latest()->limit($limit)->get();
    }
}
