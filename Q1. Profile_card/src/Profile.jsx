function Profile({ name, age, isOnline })
{
    return(
        <>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Status: {isOnline ? "💚Online" : "❤️Offline"}</h1>
        </>
    )  
}

export default Profile