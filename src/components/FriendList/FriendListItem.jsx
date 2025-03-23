


const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p className="friendName">{name}</p>
            <p>{isOnline}</p>
        </div>
    );
};

export default FriendListItem;