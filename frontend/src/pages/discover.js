import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Discover = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Discover
                </h2>
            }>

            <Head>
                <title>Livro - Discover Books</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Fiction Books
                        </div>
                        <div>
                            <Link href="/genre">
                                <a className="p-6 underline">
                                Fantasy  
                                </a>
                            </Link>
                            <Link href="/genre">
                                <a className="p-6 underline">
                                Science Fiction  
                                </a>
                            </Link>
                            <Link href="/genre">
                                <a className="p-6 underline">
                                Horror  
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Non-Fiction Books
                        </div>
                        <Link href="/genre">
                                <a className="p-6 underline">
                                History  
                                </a>
                            </Link>
                            <Link href="/genre">
                                <a className="p-6 underline">
                                Medical 
                                </a>
                            </Link>
                            <Link href="/genre">
                                <a className="p-6 underline">
                                Information Technology  
                                </a>
                            </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Discover
