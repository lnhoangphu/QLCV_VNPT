<?php

use App\Http\Controllers\TaiKhoanController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

