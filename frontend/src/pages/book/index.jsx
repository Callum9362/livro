import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import _ from 'lodash'

const BooksIndex = ({ books }) => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Books
                </h2>
            }>

            <Head>
                <title>Livro - Books</title>
            </Head>

            <div className="columns-4 mt-3">
                { books && books.map((book, i) => 
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-2">
                        <p>
                            <Link href={`/book/${book.id}`}>
                                <a>
                                { _.truncate(book.title, { length: 24} ) }
                                </a>
                            </Link>
                        </p>
                    </div>
                )}
            </div>
        </AppLayout>
    )
}

export async function getServerSideProps()
{
    const booksResult = await fetch('http://localhost:8000/api/books?limit=100');
    const books = await booksResult.json();

    return {
        props: {
            books
        }
    }
}

export default BooksIndex
