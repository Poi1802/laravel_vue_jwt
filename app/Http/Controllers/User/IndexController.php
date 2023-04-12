<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Routing\Controller;

class IndexController extends Controller
{
  public function __invoke()
  {
    return User::all();
  }
}