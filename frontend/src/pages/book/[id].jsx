import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '@/styles/BookPage.module.css';

const Book = ({ book }) => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Book
                </h2>
            }>

            <Head>
                <title>Livro - Book Information - {book.title}</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <h1 className="text-3xl">{book.title}</h1>

                            <p>{book.blurb}</p>

                            <div>
                                {book.genres && book.genres.map((genre, i) =>
                                    <div className={Styles.genreBtn} key={i}>
                                        <Link href={`/genre/${genre.slug}`}>
                                            <a>{genre.name}</a>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="my-2 flex justify-between">
                                <div className="ml-2">
                                    {book.authors && book.authors.map((author, i) =>
                                        <div key={i}>
                                            <p>{author.name}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mx-2">
                                    {book.publishers && book.publishers.map((publisher, i) =>
                                        <div key={i}>
                                            <p>{publisher.name}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mr-2">
                                    {book.editions && book.editions.map((edition, i) =>
                                        <div key={i}>
                                            <p>{edition.isbn10}</p>
                                        </div>
                                    )}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </AppLayout>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const result = await fetch(`http://localhost:8000/api/books/${id}`);
    const jsonResult = await result.json();

    return {
        props: {
            book: jsonResult
        }
    };
};

export default Book
