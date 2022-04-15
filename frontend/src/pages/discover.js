import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Discover = ({ genres }) => {
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
                        <div>
                        { genres && genres.map((genre, i) => 
                            <Link href={`/genre/${genre.slug}`}>
                                <a className="p-6 underline">
                                   { genre.name  }
                                </a>
                            </Link>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export async function getServerSideProps()
{
    const genresResult = await fetch('http://localhost:8000/api/genres');
    const genres = await genresResult.json();

    return {
        props: {
            genres
        }
    }
}

export default Discover
