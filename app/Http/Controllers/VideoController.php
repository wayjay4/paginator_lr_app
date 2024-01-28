<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function indexPageLinks(Request $request):Response
    {
        $request->validate([
            'user_id' => ['nullable', 'exists:users,id'],
        ]);

        $videos = Video::with('user')->paginate(8);

        return Inertia::render('VideosPageLinks', [
            'users' => fn()=>User::select(['id', 'name'])->get(),
            'videos' => $videos,
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function indexLoadButton(Request $request):Response
    {
        $request->validate([
            'user_id' => ['nullable', 'exists:users,id'],
        ]);

        $paginate_count = 12;

        $videos = Video::with('user')->paginate($paginate_count);

        return Inertia::render('VideosLoadMoreButton', [
            'users' => fn()=>User::select(['id', 'name'])->get(),
            'videos' => $videos,
            'message' => 'from web route',
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function indexInfiniteScroll(Request $request):Response
    {
        $request->validate([
            'user_id' => ['nullable', 'exists:users,id'],
        ]);

        $paginate_count = 12;

        $videos = Video::with('user')->paginate($paginate_count);

        return Inertia::render('VideosInfiniteScroll', [
            'users' => fn()=>User::select(['id', 'name'])->get(),
            'videos' => $videos,
            'message' => 'from web route',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVideoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVideoRequest $request, Video $video)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        //
    }
}
