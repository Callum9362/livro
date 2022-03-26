import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import LatestUsers from '@/components/LatestUsers'

const Home = ({ users }) => {
    return (
        <AppLayout>

            <Head>
                <title>Livro - Home</title>
            </Head>
            <div className="flex flex-row pt-3 pl-2">
                <div id="left-column" className="basis-1/4">
                    <div id="currently-reading">
                        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <span className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Currently Reading</span>
                            
                        </div>
                    </div>
                    <div id="reading-challenge" className="pt-2">
                        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <span className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"> {new Date().getFullYear() } Reading Challenge</span>
                        </div>
                    </div>
                    <div id="want-to-read" className="pt-2">
                        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <span className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Want to Read</span>
                    
                        </div>
                    </div>
                    <div id="recommendations" className="pt-2">
                        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <span className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Recommendations</span>
                        </div>
                    </div>
                    <div>
                        <LatestUsers users={users}/>
                    </div>
                </div>
                <div id="right-column" class="basis-3/4">
                    <h6 className="text-center">Your Feed</h6>
                    <div id="feed" className="pt-3 text-center">
                        <span>The feed will go here. It will contain updates from authors, book release dates, changes to lists you follow</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export async function getServerSideProps()
{
    const result = await fetch('http://localhost:8000/api/profile');
    const userProfiles = await result.json();
    return {
        props: {
            users: userProfiles
        }
    }
}

export default Home
