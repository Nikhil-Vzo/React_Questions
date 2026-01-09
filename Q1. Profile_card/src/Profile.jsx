import './Profile.css'
function Profile({ name, age, isOnline })
{
    return(
        <>
        <div className="card">
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Status: {isOnline ? "💚Online" : "❤️Offline"}</h1>
        </div>
        </>
    )  
}

export default Profile