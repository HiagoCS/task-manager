<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/user', "App\Http\Controllers\UserController@index");

Route::post('user/new', "App\Http\Controllers\UserController@insert");

Route::delete('user/delete', "App\Http\Controllers\UserController@delete");

Route::get('/task', "App\Http\Controllers\TaskController@index");

Route::post('/task/new', "App\Http\Controllers\TaskController@insert");

Route::delete('/task/delete', "App\Http\Controllers\TaskController@delete");
