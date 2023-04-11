<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;

class ShowController extends Controller
{
  public function __invoke(StoreRequest $request)
  {
    return 1111;
  }
}