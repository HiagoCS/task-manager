<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Users extends Model
{
    use HasFactory;

    protected $table = 'usuario';
    protected  $primaryKey = 'id';
    protected $fillable = ['nome', 'senha'];
}
