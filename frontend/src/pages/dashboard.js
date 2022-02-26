import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Livro - Profile</title>
            </Head>

            <div className="flex flex-row content-center pt-3 pl-2">
                <div id="about">
                    <div className="flex flex-row"> 
                        <img class="inline object-cover w-75 h-75 mr-2 rounded-full" src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/e/ef/Garruk%2C_Unleashed_2.jpg/revision/latest?cb=20200828180739" alt="Profile image"/>
                    </div>
                    <div className="flex flex-row">
                        <span>Callum Gill</span> <a href="#" className="text-sm underline ml-3">(Edit Profile)</a>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
