<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\PersonalController;
use App\Http\Controllers\Api\GroupController;
use App\Http\Controllers\Api\UserInGroupController;
use App\Http\Controllers\Api\UserParametersController;
use App\Http\Controllers\Api\TrainingController;

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

Route::apiResource('users', UserController::class);
Route::apiResource('dashboard', GroupController::class);
Route::apiResource('groups_user', UserInGroupController::class);
Route::apiResource('personals', PersonalController::class);
Route::apiResource('trainings', TrainingController::class);

