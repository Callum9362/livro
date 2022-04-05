
const LatestUsers = ({ users }) => {
    return (
        <>
        <p className="text-lg pt-2">Latest Users</p>
            { users && users.map((user, i) => 
               <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-2">
                   <div class="flex justify-end px-4 pt-4">
                    </div>
                    <div class="flex flex-col items-center pb-10">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={ user.picture } alt="User Profile"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{ user.first_name + " " + user.last_name.substring(0, 1) }</h5>
                    
                        <div class="flex mt-4 space-x-3 lg:mt-6">
                            <a href={"/profile/"+ user.user.username } class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
    

export default LatestUsers
