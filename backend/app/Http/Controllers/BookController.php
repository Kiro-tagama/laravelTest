<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class BookController extends Controller{
    //
    public function getAll(){
        $books = DB::table('books')->get();
        return response()->json(['books' => $books]);
    }
    
    public function store(Request $request){
        // Validar os dados recebidos no corpo da solicitação
        $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        // Criar um novo livro usando os dados do corpo
        $book = new Book([
            'title' => $request->input('title'),
            'author' => $request->input('author'),
            'description' => $request->input('description'),
        ]);
        
        
        try {
            DB::beginTransaction();
        
            Book::create([
                'title' => $book->title,
                'author' => $book->author,
                'description' => $book->description,
            ]);
        
            DB::commit();
        
            return response()->json(['message' => 'Livro salvo com sucesso'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Erro ao salvar o livro', 'error' => $e->getMessage()], 500);
        }
    }

    public function searchBooks(Request $request, $query)
    {
        $books = Book::where('title', 'like', '%' . $query . '%')->get();

        return response()->json(['books' => $books]);
    }
}
