<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserProfileRequest;
use App\Http\Requests\UpdateUserProfileRequest;
use App\Models\UserProfile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Facade\Auth;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return UserProfile::with('user')->latest()->limit($request->get('limit'))->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserProfileRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserProfileRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $username)
    {
        $user = User::where('username', $username)->first();
        return $user->profile;
    }

    public function update(UpdateUserProfileRequest $request, UserProfile $profile)
    {
        $profile->update($request->all());

        if ($profile->save())
        {
            return [
                'status' => 'success',
                'result' => [
                    'profileId' => $profile->id,
                ]
            ];
        }

        return [
            'status' => 'error'
        ];
    }
}
