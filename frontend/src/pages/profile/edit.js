import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import { useAuth } from '@/hooks/auth';
import axios from '@/lib/axios';

import AppLayout from '@/components/Layouts/AppLayout';

const EditProfile = () =>
{
    const { user } = useAuth({ middleware: 'auth' });

    const [profileId, setProfileId] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [interests, setInterests] = useState('');
    const [pronoun, setPronoun] = useState('');
    const [website, setWebsite] = useState('');
    const [twitter, setTwitter] = useState('');

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const editProfile = async event =>
    {
        event.preventDefault();

        await csrf();

        axios
            .post(`/api/profile/edit/${profileId}`, {
                'first_name': firstName,
                'last_name': lastName,
                'bio': bio,
                'location': location,
                'interests': interests,
                'pronoun': pronoun,
                'website': website,
                'twitter': twitter,
            })
            .then(({ data }) =>
            {
                if (data.status === 'success')
                {
                    window.location = window.location;
                    return;
                }
            })
            .catch(error => console.error(error));
    };

    useEffect(async () =>
    {
        const username = user?.username;
        if (typeof username === 'undefined')
        {
            return;
        }
        const result = await fetch(`http://localhost:8000/api/profile/${username}`);
        const profile = await result.json();

        setProfileId(profile.id);
        setFirstName(profile.first_name);
        setLastName(profile.last_name);
        setBio(profile.bio);
        setLocation(profile.location);
        setInterests(profile.interests);
        setPronoun(profile.pronoun);
        setWebsite(profile.website);
        setTwitter(profile.twitter);
    }, [user])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit My Profile
                </h2>
            }>

            <Head>
                <title>Edit My Profile</title>
            </Head>

            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                <form onSubmit={editProfile}>
                    <div className="rounded  shadow p-6">

                        {/* First Name */}
                        <div className="pb-6 flex">
                            <label htmlFor="first-name" className="font-semibold text-gray-700 w-1/5">First Name</label>
                            <input id="first-name"
                                className="border-1 rounded-r px-4 py-2 w-4/5"
                                type="text"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)} />
                        </div>

                        {/* Last Name */}
                        <div className="pb-6 flex">
                            <label htmlFor="last-name" className="font-semibold text-gray-700 w-1/5">Last Name</label>
                            <input id="last-name"
                                className="border-1 rounded-r px-4 py-2 w-4/5"
                                type="text"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)} />
                        </div>

                        {/* Bio */}
                        <div className="pb-6 flex">
                            <label htmlFor="bio" className="font-semibold text-gray-700 w-1/5">Bio</label>
                            <textarea id="bio"
                                rows={4}
                                className="border-1 rounded-r px-4 py-2 w-4/5"
                                value={bio}
                                onChange={e => setBio(e.target.value)} />
                        </div>

                        {/* Location */}
                        <div className="pb-6 flex">
                            <label htmlFor="location" className="font-semibold text-gray-700 w-1/5">Location</label>
                            <input id="location"
                                className="border-1 rounded-r px-4 py-2 w-4/5"
                                type="text"
                                value={location}
                                onChange={e => setLocation(e.target.value)} />
                        </div>

                        {/* Interests */}
                        <div className="pb-6 flex">
                            <label htmlFor="interests" className="font-semibold text-gray-700 w-1/5">Interests</label>
                            <input id="interests"
                                className="border-1 rounded-r px-4 py-2 w-4/5"
                                type="text"
                                value={interests}
                                onChange={e => setInterests(e.target.value)} />
                        </div>

                        {/* Pronoun */}
                        <div className="pb-6 flex">
                            <label htmlFor="pronoun" className="font-semibold text-gray-700 w-1/5">Pronoun</label>
                            <input id="pronoun"
                                className="border-1 rounded-r px-4 py-2 w-4/5"
                                type="text"
                                value={pronoun}
                                onChange={e => setPronoun(e.target.value)} />
                        </div>

                        {/* Website */}
                        <div className="pb-6 flex">
                            <label htmlFor="website" className="font-semibold text-gray-700 w-1/5">Website</label>
                            <input id="website"
                                className="border-1 rounded-r px-4 py-2 w-4/5"
                                type="text"
                                value={website}
                                onChange={e => setWebsite(e.target.value)} />
                        </div>

                        {/* Twitter */}
                        <div className="pb-6 flex">
                            <label htmlFor="twitter" className="font-semibold text-gray-700 w-1/5">Twitter</label>
                            <input id="twitter"
                                className="border-1 rounded-r px-4 py-2 w-4/5"
                                type="text" value={twitter}
                                onChange={e => setTwitter(e.target.value)} />
                        </div>

                    </div>
                    <button type="submit"
                        className="bg-green-500 border-2 border-solid rounded-lg border-green-900 ml-auto block mt-2 p-4">Save Changes</button>
                </form>
            </div>
        </AppLayout>
    )
}

export default EditProfile;