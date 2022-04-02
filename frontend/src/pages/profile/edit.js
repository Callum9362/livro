import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import React, { useState, useEffect } from 'react'

const EditProfile = ({ $profileInfo }) => {
    
    const { user } = useAuth({ middleware: 'auth' })
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [bio , setBio] = useState('')
    const [location , setLocation] = useState('')
    const [interests , setInterests] = useState('')
    const [pronoun , setPronoun] = useState('')
    const [website , setWebsite] = useState('')
    const [twitter , setTwitter] = useState('')

    const csrf = () => axios.get('/sanctum/csrf-cookie')
    
    const editProfile = async event => {

        event.preventDefault()
        
        await csrf()

        const res = await axios.post(`/api/profile/edit/${user.username}`, {
        }).then(res =>
              console.log(res)
          ).catch(error => console.error(error))
    }

    useEffect(async () => {
        
        const username = user?.username;
        if(typeof username === 'undefined')
        {
            return;
        }
        const result = await fetch(`http://localhost:8000/api/profile/${username}`);
        const profile = await result.json();
        
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
                <title>Livro - Edit Profile</title>
            </Head>

            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                <form onSubmit={editProfile}>
                    <div className="rounded  shadow p-6">
                        {/* First Name */}
                        <div className="pb-6">
                            <label for="first-name" className="font-semibold text-gray-700 block pb-1">First Name</label>
                        </div>
                        <div className="flex">
                            <input 
                                id="first-name" 
                                name="first-name" 
                                className="border-1 rounded-r px-4 py-2 w-full" 
                                type="text" 
                                value={ firstName } 
                                onChange={event => setFirstName(event.target.value)} 
                            />
                        </div>
                        {/* Last Name */}
                        <div className="pb-6">
                            <label for="last-name" className="font-semibold text-gray-700 block pb-1">Last Name</label>
                        </div>
                        <div className="flex">
                            <input 
                                id="last-name" 
                                name="last-name" 
                                className="border-1 rounded-r px-4 py-2 w-full" 
                                type="text" 
                                value={ lastName }
                                onChange={event => setLastName(event.target.value)}  
                            />
                        </div>
                        {/* Bio */}
                        <div className="pb-6">
                            <label for="bio" className="font-semibold text-gray-700 block pb-1">Bio</label>
                        </div>
                        <div className="flex">
                            <textarea 
                                id="bio" 
                                name="bio" 
                                className="border-1 rounded-r px-4 py-2 w-full" 
                                type="text" 
                                value={ bio } 
                                onChange={event => setBio(event.target.value)} 
                            />
                        </div>
                        {/* Location */}
                        <div className="pb-6">
                            <label for="location" className="font-semibold text-gray-700 block pb-1">Location</label>
                        </div>
                        <div className="flex">
                            <input 
                                id="location" 
                                name="location" 
                                className="border-1 rounded-r px-4 py-2 w-full" 
                                type="text" 
                                value={ location } 
                                onChange={event => setLocation(event.target.value)} 
                            />
                        </div>
                        {/* Interests */}
                        <div className="pb-6">
                            <label for="interests" className="font-semibold text-gray-700 block pb-1">Interests</label>
                        </div>
                        <div className="flex">
                            <input 
                                id="interests" 
                                name="interests" 
                                className="border-1 rounded-r px-4 py-2 w-full" 
                                type="text" 
                                value={ interests } 
                                onChange={event => setInterests(event.target.value)} 
                            />
                        </div>
                        {/* Pronoun */}
                        <div className="pb-6">
                            <label for="pronoun" className="font-semibold text-gray-700 block pb-1">Pronoun</label>
                        </div>
                        <div className="flex">
                            <input 
                                id="pronoun" 
                                name="pronoun" 
                                className="border-1 rounded-r px-4 py-2 w-full" 
                                type="text" 
                                value={ pronoun } 
                                onChange={event => setPronoun(event.target.value)}
                            />
                        </div>
                        {/* Website */}
                        <div className="pb-6">
                            <label for="website" className="font-semibold text-gray-700 block pb-1">Website</label>
                        </div>
                        <div className="flex">
                            <input 
                                id="website" 
                                name="website" 
                                className="border-1 rounded-r px-4 py-2 w-full"
                                type="text" 
                                value={ website } 
                                onChange={event => setWebsite(event.target.value)}
                            />
                        </div>
                        {/* Twitter */}
                        <div className="pb-6">
                            <label for="twitter" className="font-semibold text-gray-700 block pb-1">Twitter</label>
                        </div>
                        <div className="flex">
                            <input 
                                id="twitter" 
                                name="twitter" 
                                className="border-1 rounded-r px-4 py-2 w-full" 
                                type="text" value={ twitter } 
                                onChange={event => setTwitter(event.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>


        </AppLayout>
    )
}

export default EditProfile