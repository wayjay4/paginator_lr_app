<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserVideoController;
use App\Http\Controllers\VideoController;
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

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', [VideoController::class, 'indexPageLinks'])->name('videos.page_links');
Route::get('/videos_page_links', [VideoController::class, 'indexPageLinks'])->name('videos.page_links');
Route::get('/videos_load_button', [VideoController::class, 'indexLoadButton'])->name('videos.load_button');
Route::get('/videos_infinite_scroll', [VideoController::class, 'indexInfiniteScroll'])->name('videos.infinite_scroll');

Route::get('/users/{user}/videos_page_links/', [UserVideoController::class, 'indexPageLinks'])->name('users.videos.page_links');
Route::get('/users/{user}/videos_load_button/', [UserVideoController::class, 'indexLoadButton'])->name('users.videos.load_button');
Route::get('/users/{user}/videos_infinite_scroll/', [UserVideoController::class, 'indexInfiniteScroll'])->name('users.videos.infinite_scroll');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
