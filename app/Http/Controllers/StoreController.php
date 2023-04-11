<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;

class StoreController extends Controller
{
  public function __invoke(StoreRequest $request)
  {
    $data = $request->validated();
    $data['password'] = Hash::make($data['password']);
    return User::firstOrCreate(['email' => $data['email']], $data);
  }
}