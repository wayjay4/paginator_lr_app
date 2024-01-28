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

        if($component !== null) {
            return Inertia::render($component, [
                'users' => fn() => User::select(['id', 'name'])->get(),
                'videos' => $videos,
            ]);
        }
        else {
            return response([
                'users' => fn()=>User::select(['id', 'name'])->get(),
                'videos' => $videos,
            ], 200);
        }
    }

}
