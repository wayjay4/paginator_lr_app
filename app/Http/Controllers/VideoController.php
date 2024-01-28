<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Models\Video;
use App\Traits\VideoTrait;
use Illuminate\Http\Request;
use Inertia\Response;

class VideoController extends Controller
{
    use VideoTrait;

    /**
     * Display a listing of the resource.
     */
    public function indexPageLinks(Request $request):Response
    {
        return $this->getVideosData($request, 'Videos/PageLinks');
    }

    /**
     * Display a listing of the resource.
     */
    public function indexLoadButton(Request $request):Response
    {
        return $this->getVideosData($request, 'Videos/LoadMoreButton');
    }

    /**
     * Display a listing of the resource.
     */
    public function indexInfiniteScroll(Request $request):Response
    {
        return $this->getVideosData($request, 'Videos/InfiniteScroll');
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
