<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReserveController extends Controller
{
    public function getAll(){
        $reserve = DB::table('reservations')->get();
        return response()->json(['reserve'=>$reserve]);
    }

    public function myReserve($id){
        // Obtenha todas as reservas para o usuário específico
        $reserve = DB::table('reservations')->where('user_id', $id)->get();

        return response()->json(['reserve' => $reserve]);
    }

    public function store(Request $request){
        $request->validate([
            'user_id' => 'required|uuid',
            'book_id' => 'required|uuid',
            'book_name' => 'required|string', // Certifique-se de ajustar conforme necessário
        ]);
    
        // Inclua 'book_name' ao criar a reserva
        $reservation = Reservation::create($request->all());
        
        return response()->json(['message' => 'Reserva salvo com sucesso'], 201);
    }

    public function remove($id){
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['error' => 'Reservation not found'], 404);
        }

        $reservation->delete();

        return response()->json(['message' => 'Reservation deleted successfully'], 200);
    }
}
