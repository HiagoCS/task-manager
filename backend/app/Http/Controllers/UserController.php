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
		if(Users::create((array) $json)){
			return response()->json(["status" => "success", "msg" => "Usuário '".$json['nome']."' cadastrado com sucesso!"]);
		}
    }

	//delete specific user
	public function delete($id){
		$resp = Users::destroy($id);
		if($resp){
			return response()->json(["status" => "success", "msg" => "Usuário Deletado com sucesso!"]);
		}
		else{
			return response()->json(["status" => "error", "msg" => "Erro na exclusão!"]);
		}
	}
}