<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\VideoTrait;
use Illuminate\Http\Request;

class UserVideoController extends Controller
{
    use VideoTrait;

    /**
     * Display a listing of the resource.
     */
    public function index(User $user)
    {
        $request = new Request([
            'user_id' => $user->id
        ]);

        return $this->getVideos($request);
    }
}
