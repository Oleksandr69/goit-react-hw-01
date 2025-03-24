const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p className="friendName">{name}</p>
            <p className={isOnline ? "online" : "offline"}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

export default FriendListItem;