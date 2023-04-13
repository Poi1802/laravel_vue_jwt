<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

/**
 * JWT Auth control
 */
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
  Route::post('login', [AuthController::class, 'login']);
  Route::post('logout', [AuthController::class, 'logout']);
  Route::post('refresh', [AuthController::class, 'refresh']);
  Route::post('me', [AuthController::class, 'me']);
});

Route::middleware('jwt.auth')->namespace('App\\Http\\Controllers\\User')->prefix('users')->group(function () {
  Route::get('/', 'IndexController');
});

Route::group(['namespace' => 'App\\Http\\Controllers', 'prefix' => 'users'], function () {
  Route::post('/', 'StoreController');
  Route::get('/{user}', 'ShowController');
});