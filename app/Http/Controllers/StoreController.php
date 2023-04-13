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

    $user = User::where('email', $data['email'])->first();
    if ($user)
      return response(['error' => 'User with this email already exists'], 403);

    $user = User::create($data);
    $access_token = auth()->tokenById($user->id);
    return response(['access_token' => $access_token]);
  }
}