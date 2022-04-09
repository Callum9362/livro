
const LatestBooks = ({ books }) => {
    return (
        <>
        <p className="text-lg pt-2">Latest Books</p>
            { books && books.map((book, i) => 
               <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-2">
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{ book.title }</h5>
                </div>
            )}
        </>
    )
}
    

export default LatestBooks