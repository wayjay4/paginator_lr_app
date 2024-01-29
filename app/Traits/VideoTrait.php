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
    public function getVideos(Request $request, string $component=null): Application|Response|InertiaResponse|ContractsApplication|ResponseFactory
    {
        $request->validate([
            'user_id' => ['nullable', 'exists:users,id'],
        ]);

        $paginate_count = 8;

        $videos = Video::with('user')
            ->when($request->filled('user_id'), fn ($query) => $query->where('user_id', $request->query('user_id')))
            ->paginate($paginate_count);

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
