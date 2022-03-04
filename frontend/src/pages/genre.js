import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Genre = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    [GENRE_NAME]
                </h2>
            }>

            <Head>
                <title>Livro - Discover [GENRE_NAME] </title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b">
                        <div className="min-h-screen flex items-center justify-center">
                            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                                <div className="relative">
                                    <img className="w-80" src="https://images-na.ssl-images-amazon.com/images/I/51GP-Z-9YyL._SX335_BO1,204,203,200_.jpg" />
                                </div>
                                <div className="p-4">
                                    <h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer">The Shining</h1>
                                    <p className="mt-2 font-sans text-gray-700">Stephen King</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer pl-3">
                                <div className="relative">
                                    <img className="w-80" src="https://images-na.ssl-images-amazon.com/images/I/51GP-Z-9YyL._SX335_BO1,204,203,200_.jpg" />
                                </div>
                                <div className="p-4">
                                    <h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer">Harry Potter 1</h1>
                                    <p className="mt-2 font-sans text-gray-700">Stephen King</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer pl-3">
                                <div className="relative">
                                    <img className="w-80" src="https://images-na.ssl-images-amazon.com/images/I/51GP-Z-9YyL._SX335_BO1,204,203,200_.jpg" />
                                </div>
                                <div className="p-4">
                                    <h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer">Lord of the Rings</h1>
                                    <p className="mt-2 font-sans text-gray-700">Stephen King</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Genre
