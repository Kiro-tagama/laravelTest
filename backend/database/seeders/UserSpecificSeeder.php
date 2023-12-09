<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSpecificSeeder extends Seeder
{
    public function run()
    {
        // Criar o usuário específico
        
        $user = new User();
        $user->name = 'admin1234';
        $user->email = 'admin1234@email.com';
        $user->password = Hash::make('admin1234');
        $user->save();

        // The "creating" event in the User model should automatically set the UUID for the user

        // Adicionar o usuário à tabela permissions
        DB::table('permissions')->insert([
            'id' => $user->id,
            'name' => 'admin1234',
        ]);
    }
}
