<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Video;
use Illuminate\Contracts\Foundation\Application as ContractsApplication;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

trait VideoTrait {
    public function getVideos(Request $request=null, string $component=null): Application|Response|InertiaResponse|ContractsApplication|ResponseFactory
    {
        $user = User::select(['id', 'name'])->get();

        $paginate_count = 8;

        if($request !== null and $request->filled('user_id') and $request->query('user_id') > 0) {
            $request->validate([
                'user_id' => ['nullable', 'exists:users,id'],
            ]);

            $videos = Video::with('user')
                ->where('user_id', $request->query('user_id'))
                ->paginate($paginate_count);

            $user_id = $request->query('user_id');
        }
        else {
            $videos = Video::with('user')->paginate($paginate_count);
            $user_id = 0;
        }

        if($component !== null) {
            return Inertia::render($component, [
                'users' => $user,
                'videos' => $videos,
                'selected_user' => $user_id,
            ]);
        }
        else {
            return response([
                'users' => $user,
                'videos' => $videos,
                'selected_user' => $user_id,
            ], 200);
        }
    }
}
