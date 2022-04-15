<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $limit = $request->get('limit');
        if(empty($limit))
        {
            $limit = 250;
        }
        return Book::latest()->limit($limit)->get();
    }
}
