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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(UserProfile $userProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserProfileRequest  $request
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserProfileRequest $request, UserProfile $userProfile)
    {
        //TODO: Add in some validation ? Or is this done frontend??
        dd($request->all());
        $userProfile->first_name = $request->get('first_name');
        $userProfile->last_name = $request->get('last_name');
        $userProfile->bio = $request->get('bio');
        $userProfile->location = $request->get('location');
        $userProfile->interests = $request->get('interests');
        $userProfile->pronoun = $request->get('pronoun');
        $userProfile->dob = $request->get('dob');
        $userProfile->website = $request->get('website');
        $userProfile->twitter = $request->get('twitter');
        
        return $userProfile->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserProfile $userProfile)
    {
        //
    }
}
