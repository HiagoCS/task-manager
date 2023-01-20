<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function index(){
        return response()->json(Task::all());
    }

    public function insert(Request $request){
        $json = $request->json()->all();
        $resp = Task::create((array) $json);
        if($resp){
			return response()->json(["status" => "sucesso", "msg" => "Tarefa cadastrada com sucesso!"]);
		}
		else{
			return response()->json(["status" => "error", "msg" => "Erro no cadastro!"]);
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
