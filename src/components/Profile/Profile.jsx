import './Profile.module.css'
// import './Profile.css'
const Profile = ({ image, name, tag, location, stats}) => {
  return (
<div className="userCard">
  <div>
    <img
      src={ image }
      alt="User avatar"
      className="userAvatar"
    />
    <p className='userName'>{ name }</p>
    <p className='userInfo'>@{ tag }</p>
    <p className='userInfo'>{ location }</p>
  </div>

  <ul className='userList'>
    <li className='userListItem'>
      <span>Followers</span>
      <span className='userStats'>{ stats.followers }</span>
    </li>
    <li className='userListItem'>
      <span>Views</span>
      <span className='userStats'>{ stats.views }</span>
    </li>
    <li className='userListItem'>
      <span>Likes</span>
      <span className='userStats'>{ stats.likes }</span>
    </li>
  </ul>
</div>
  );
};

export default Profile;
