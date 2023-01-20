<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $table = 'tarefa';
    protected $fillable = ['titulo', 'descricao', 'estado', 'user_id'];
}
