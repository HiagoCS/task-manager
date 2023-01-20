<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class UserController extends Controller
{
	//return all users
    public function index(){
        return response()->json(Users::all());
    }

	//Insert one user
    public function insert(Request $request){
		$json = $request->json()->all();
		$resp = Users::create((array) $json);
		if($resp){
			return response()->json(["status" => "sucesso", "msg" => "Usuário cadastrado com sucesso!"]);
		}
		else{
			return response()->json(["status" => "error", "msg" => "Erro no cadastro!"]);
		}
    }

	//delete specific user
	public function delete(Request $request){
		$json = $request->json()->all();
		$resp = Users::destroy($json['id']);
		if($resp){
			return response()->json(["status" => "sucesso", "msg" => "Usuário Deletado com sucesso!"]);
		}
		else{
			return response()->json(["status" => "error", "msg" => "Erro na exclusão!"]);
		}
	}
}