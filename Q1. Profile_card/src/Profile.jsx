import './Profile.css'
function Profile({ name, age, isOnline })
{
    return(
        <>
        <div className="baap">
        <div className="card">
            <div className="pic"></div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Status: {isOnline ? "💚Online" : "❤️Offline"}</h1>
        </div>
        </div>
        </>
    )  
}

export default Profile