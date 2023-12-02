<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller{
    //
    public function getAll(){
        $books = Book::all();
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

        // Salvar o livro no banco de dados
        //$book->save();

        // Retornar uma resposta JSON indicando sucesso e o livro criado
        return response()->json(['message' => 'Livro criado com sucesso', 'book' => $book]);
    }
}
