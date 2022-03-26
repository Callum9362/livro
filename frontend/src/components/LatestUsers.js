
const LatestUsers = ({ users }) => {
    return (
        <>
        <p className="text-lg text-center pt-2">Latest Users</p>
            { users && users.map((user, i) => 
                <a 
                href={"/profile/"+ user.user.username }
                className="block flex mt-2 bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    <img 
                    src={ user.picture } 
                    alt="User Picture" 
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    />
                   <span className="grow pl-2 pt-1">
                       { user.first_name + " " + user.last_name.substring(0, 1) }
                    </span> 
                </a>
            )}
        </>
    )
}
    

export default LatestUsers
