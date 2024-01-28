<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

trait VideoTrait {
    public function getVideos(Request $request, string $component=null)
    {
        $request->validate([
            'user_id' => ['nullable', 'exists:users,id'],
        ]);

        $paginate_count = 8;

        $videos = Video::with('user')->paginate($paginate_count);

        $user = User::select(['id', 'name'])->get();

        if($component !== null) {
            return Inertia::render($component, [
                'users' => $user,
                'videos' => $videos,
            ]);
        }
        else {
            return response([
                'users' => $user,
                'videos' => $videos,
            ], 200);
        }
    }

}
