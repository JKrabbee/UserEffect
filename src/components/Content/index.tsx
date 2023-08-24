

function Content () {
    return (
        <main> 
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>Name: {userData.name}</p>
                        <p>Location: {userData.location}</p>
                        <p>Followers: {userData.followers}</p>
                        <p>Following: {userData.following}</p>
                        <p>Public Repos: {userData.public_repos}</p>
                    </div>
                </div>
                <div>
                    <p>{userData.bio}</p>
                </div>
            </div>
        </main>
    )
}

export default Content;