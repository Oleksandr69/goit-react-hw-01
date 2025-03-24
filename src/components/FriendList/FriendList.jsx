import FriendListItem from "./FriendListItem";
import './FriendList.css'

const FriendList = ({ friends }) => {
    return <ul className="friendList">
        {friends.map((friend) => {
            return (<li key={friend.id} className="friendCard">
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>);
        })}
    </ul>;
};




export default FriendList;