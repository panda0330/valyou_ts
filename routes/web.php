<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/bank', function () {
  return Inertia::render('Bank');
});

Route::get('/market', function () {
  return Inertia::render('Market');
});

Route::get('/socialmedia', function () {
  return Inertia::render('SocialMedia');
});

Route::get('/watch_earn', function () {
  return Inertia::render('WatchEarn');
});

Route::get('/listen_earn', function () {
  return Inertia::render('ListenEarn');
});

Route::get('/store', function () {
  return Inertia::render('Store');
});

Route::get('/video_detail', function () {
  return Inertia::render('VideoDetail');
});

Route::get('/audio_detail', function () {
  return Inertia::render('AudioDetail');
});

Route::get('/pricing', function () {
  return Inertia::render('Pricing');
});

Route::get('/signin', function () {
  return Inertia::render('Signin');
});

Route::get('/signup', function () {
  return Inertia::render('Signup');
});

Route::get('/wallet', function () {
  return Inertia::render('Wallet');
});

Route::get('/message', function () {
  return Inertia::render('Message');
});

Route::get('/context', function () {
  return Inertia::render('ContextSample');
});

Route::get('/investor', function () {
  return Inertia::render('Investor');
});

require __DIR__.'/auth.php';
