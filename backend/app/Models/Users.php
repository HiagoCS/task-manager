<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Users extends Model
{
    use HasFactory;

    protected $table = 'usuario';
    protected $fillable = ['nome', 'senha'];

    function insert(Request $reqs){
    	Users::create([
        	'nome' => 'Hiago',
        	'senha' => '@senhaForte'
    	]);
    	echo "Sucesso!!";
	}
}
