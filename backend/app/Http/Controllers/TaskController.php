<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function index(){
        return response()->json(Task::all());
    }

    public function status($id){
        $pendente = Task::where(['user_id' => $id, 'estado' => 'Pendente'])->get('estado');
        $emAndamento = Task::where(['user_id' => $id, 'estado' => 'Em Andamento'])->get('estado');
        $finalizado = Task::where(['user_id' => $id, 'estado' => 'Finalizado'])->get('estado');
            
            $return = [
                'Pendente' => count($pendente),
                'Em Andamento' => count($emAndamento),
                'Finalizado' => count($finalizado)
            ];
            return response()->json($return);
    }

    public function insert(Request $request){
        $json = $request->json()->all();
		if(Task::create((array) $json)){
			return response()->json(["status" => "success", "msg" => "Tarefa cadastrada com sucesso!"]);
		}
    }

    public function delete(Request $request){
		$json = $request->json()->all();
		$resp = Task::destroy($json['id']);
		if($resp){
			return response()->json(["status" => "sucesso", "msg" => "Tarefa Deletada com sucesso!"]);
		}
		else{
			return response()->json(["status" => "error", "msg" => "Erro na exclusão!"]);
		}
	}

    public function update(Request $request){
        $json = $request->json()->all();
        $resp = Task::find($json['id'])->update(["estado" => $json['update']]);
        if($resp){
			return response()->json(["status" => "sucesso", "msg" => "Estado da tarefa alterado com sucesso!"]);
		}
		else{
			return response()->json(["status" => "error", "msg" => "Erro na alteração!"]);
		}
    }
}
