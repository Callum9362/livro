import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'

const EditProfile = ({ $profileInfo }) => {
    
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()
    const { username } = router.query

    const editProfile = event => {
        event.preventDefault()

        const res = await fetch(`http://localhost:8000/api/profile/edit/${username}`, {
            
            body: JSON.stringify({
              first_name: event.target.first_name.value,
              last_name: event.target.last_name.value,
              bio: event.target.bio.value,
              location: event.target.location.value,
              interests: event.target.interests.value,
              pronoun: event.target.pronoun.value,
              dob: event.target.dob.value,
              website: event.target.website.value,
              twitter: event.target.twitter.value,
            }),

            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
      
          const result = await res.json()
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit My Profile - { profileInfo?.username }
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
                            <label for="first_name" className="font-semibold text-gray-700 block pb-1">First Name</label>
                        </div>
                        <div className="flex">
                            <input id="first_name" name="first_name" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="Callum" />
                        </div>
                        {/* Last Name */}
                        <div className="pb-6">
                            <label for="last_name" className="font-semibold text-gray-700 block pb-1">Last Name</label>
                        </div>
                        <div className="flex">
                            <input id="last_name" name="last_name" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="Gill" />
                        </div>
                        {/* Bio */}
                        <div className="pb-6">
                            <label for="bio" className="font-semibold text-gray-700 block pb-1">Bio</label>
                        </div>
                        <div className="flex">
                            <textarea id="bio" name="bio" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="Some shit here" />
                        </div>
                        {/* Location */}
                        <div className="pb-6">
                            <label for="location" className="font-semibold text-gray-700 block pb-1">Location</label>
                        </div>
                        <div className="flex">
                            <input id="location" name="location" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="England" />
                        </div>
                        {/* Interests */}
                        <div className="pb-6">
                            <label for="interests" className="font-semibold text-gray-700 block pb-1">Interests</label>
                        </div>
                        <div className="flex">
                            <input id="interests" name="interests" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="Football, Programmign" />
                        </div>
                        {/* Pronoun */}
                        <div className="pb-6">
                            <label for="pronoun" className="font-semibold text-gray-700 block pb-1">Pronoun</label>
                        </div>
                        <div className="flex">
                            <input id="pronoun" name="pronoun" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="He" />
                        </div>
                        {/* DOB */}
                        <div className="pb-6">
                            <label for="dob" className="font-semibold text-gray-700 block pb-1">DOB</label>
                        </div>
                        <div className="flex">
                            <input id="dob" name="dob" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="02/02/22" />
                        </div>
                        {/* Website */}
                        <div className="pb-6">
                            <label for="website" className="font-semibold text-gray-700 block pb-1">Website</label>
                        </div>
                        <div className="flex">
                            <input id="website" name="website" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="www.legend.com" />
                        </div>
                        {/* Twitter */}
                        <div className="pb-6">
                            <label for="twitter" className="font-semibold text-gray-700 block pb-1">Twitter</label>
                        </div>
                        <div className="flex">
                            <input id="twitter" name="twitter" className="border-1 rounded-r px-4 py-2 w-full" type="text" value="@twitterHandle" />
                        </div>
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>


        </AppLayout>
    )
}