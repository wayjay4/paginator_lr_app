<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\VideoTrait;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    use VideoTrait;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return $this->getVideos($request);
    }
}
