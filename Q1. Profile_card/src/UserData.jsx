import Profile from './Profile'

function UserData()
{
    return(
        <>
        <Profile name="Kartik" age={18} isOnline={true} />
        <Profile name="Anjali" age={17} isOnline={false} />
        <Profile name="Rohan" age={19} isOnline={true} />
        </>
    )
}

export default UserData