<?php

use App\Models\User;
use App\Models\Video;
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

Route::get('/videos_pscroll', function (Request $request) {
    $request->validate([
        'user_id' => ['nullable', 'exists:users,id'],
    ]);

    $paginate_count = 50;

    $videos = Video::with('user')->paginate($paginate_count);

    return response([
        'users' => fn()=>User::select(['id', 'name'])->get(),
        'videos' => $videos,
        'message' => 'from api route',
    ], 200);
});
