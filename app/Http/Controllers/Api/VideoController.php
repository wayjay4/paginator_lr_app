<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\VideoTrait;
use Illuminate\Contracts\Foundation\Application as ContractsApplication;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VideoController extends Controller
{
    use VideoTrait;

    /**
     * Get a listing of the resource.
     */
    public function index(Request $request): Application|Response|ContractsApplication|ResponseFactory
    {
        return $this->getVideos($request);
    }
}
