import css from './Profile.module.css'
const Profile = ({ image, name, tag, location, stats}) => {
  return (
    <div className={css.userCard}>
  <div>
    <img
          src={image}
          alt="User avatar"
          className={css.userAvatar}
    />
        <p className={css.userName}>{ name }</p>
        <p className={css.userInfo}>@{ tag }</p>
        <p className={css.userInfo}>{ location }</p>
  </div>

      <ul className={css.userList}>
        <li className={css.userListItem}>
      <span>Followers</span>
          <span className={css.userStats}>{ stats.followers }</span>
    </li>
        <li className={css.userListItem}>
      <span>Views</span>
          <span className={css.userStats}>{ stats.views }</span>
    </li>
        <li className={css.userListItem}>
      <span>Likes</span>
          <span className={css.userStats}>{ stats.likes }</span>
    </li>
  </ul>
</div>
  );
};

export default Profile;
