import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {

    return (friends.map((friend) => {
        return (
            <ul className="friendList">
                <li>
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                     />
                </li>
            </ul>)
    }))
} 


export default FriendList;