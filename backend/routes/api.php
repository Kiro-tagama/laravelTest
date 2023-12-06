<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\DB;

use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReserveController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// - get - lista de livros
// - post - book

// - get - livro por status
// - get - livro por nome

Route::any('/',function () {
    echo "Server ON - ";
    try {
        DB::connection()->getPdo();
        echo "Conexão com o banco de dados estabelecida com sucesso!";
    } catch (\Exception $e) {
        die("Erro de conexão com o banco de dados: " . $e->getMessage());
    }
    return response("",200);
});

Route::get('/books', [BookController::class, 'getAll']);                //ok
Route::get('/books/{name}', [BookController::class, 'searchBooks']);    //ok
Route::post('/books', [BookController::class, 'store']);                //ok
Route::put('/books/{id}', [BookController::class, 'update']);           //ok    
Route::delete('/books/{id}', [BookController::class, 'remove']);        //ok

//Route::get('/books/{reserved}', [BookController::class, 'showReserved']);

// - get - login - OAuth2
Route::get('/alluser', [AuthController::class, 'getAll']);              //ok
Route::get('/user', [AuthController::class, 'loginWithEmail']);         //ok
Route::post('/user', [AuthController::class, 'createWithEmail']);       //ok
Route::get('/user/OA2', [AuthController::class, 'loginWithAuth2']);
Route::post('/user/OA2', [AuthController::class, 'createWithAuth2']);

// - post - reserva - notification to admin
// - put - reserva
// - del - reserva
Route::get('/reserve', [ReserveController::class, 'getAll']);           //ok
Route::post('/reserve', [ReserveController::class, 'store']);
Route::delete('/reserve/{id}', [ReserveController::class, 'remove']);