<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PermissionController extends Controller
{
    public function getAll(){
        $permissions = DB::table('permissions')->get();
        return response()->json(['permissions' => $permissions]);
    }
    
    public function register(Request $request){
        // Validar os dados recebidos no corpo da solicitação
        $request->validate([
            'id' => 'required|uuid',
            'name' => 'required|string|max:255',
        ]);

        // Criar um novo livro usando os dados do corpo
        $permissions = new Permission([
            'id' => $request->input('id'),
            'name' => $request->input('name'),
        ]);
        
        
        try {
            DB::beginTransaction();
        
            Permission::create([
                'id' => $permissions->id,
                'name' => $permissions->name,
            ]);
        
            DB::commit();
        
            return response()->json(['message' => 'Permissão salvo com sucesso'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Erro ao salvar permissão', 'error' => $e->getMessage()], 500);
        }
    }

    
}
