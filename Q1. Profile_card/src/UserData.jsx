import Profile from './Profile';
import './Profile.css';

const users = [
    {id: 1, name: "Kartik", age: 18, isOnline: true},
    {id: 2, name: "Anjali", age: 17, isOnline: false},
    {id: 3, name: "Rohan", age: 19, isOnline: true}
]

function UserData()
{
    return(
        <div className="baap">
          {users.map((user)=> (
              <Profile 
              key={user.id}
              name={user.name}
              age={user.age}
              isOnline={user.isOnline}
              />
          ))}
        </div>
    )
}

export default UserData