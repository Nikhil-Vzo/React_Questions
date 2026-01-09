import Profile from './Profile';
import './Profile.css';

function UserData()
{
    return(
        <div className="baap">
            <Profile name="Kartik" age={18} isOnline={true} />
            <Profile name="Anjali" age={17} isOnline={false} />
            <Profile name="Rohan" age={19} isOnline={true} />
        </div>
    )
}

export default UserData