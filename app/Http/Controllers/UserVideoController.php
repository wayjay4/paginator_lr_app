<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Video;
use App\Traits\VideoTrait;
use Illuminate\Http\Request;

class UserVideoController extends Controller
{
    use VideoTrait;

    /**
     * Display a listing of the resource.
     */
    public function indexPageLinks(User $user)
    {
        $request = new Request([
            'user_id' => $user->id,
        ]);

        return $this->getVideos($request, 'Videos/PageLinks');
    }

    /**
     * Display a listing of the resource.
     */
    public function indexLoadButton(User $user)
    {
        $request = new Request([
            'user_id' => $user->id,
        ]);

        return $this->getVideos($request, 'Videos/LoadMoreButton');
    }

    /**
     * Display a listing of the resource.
     */
    public function indexInfiniteScroll(User $user)
    {
        $request = new Request([
            'user_id' => $user->id,
        ]);

        return $this->getVideos($request, 'Videos/InfiniteScroll');
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
    public function store(Request $request)
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
    public function update(Request $request, Video $video)
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
