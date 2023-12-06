<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\Client;
use Laravel\Passport\ClientRepository;

class AuthController extends Controller
{
    public function getAll(){
        $users = User::all();

        $usersData = $users->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ];
        });

        return response()->json(['users' => $usersData]);
    }

    public function loginWithEmail(Request $request){
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $userData = [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ];

            return response()->json(['user' => $userData]);
        }

        return response()->json(['error' => 'Credenciais inválidas'], 401);
    }

    public function createWithEmail(Request $request){
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6'],
        ]);

        User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);
        
        return response(['user' => $request->name], 201);
    }
}
