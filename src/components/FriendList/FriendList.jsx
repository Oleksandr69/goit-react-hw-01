import './FriendListItem'

import './Profile.css'
import './reset.css'
const FriendList = ({ friends }) => {
  return (
<ul>
	{/* Кількість li залежить від кількості об'єктів в масиві */}
	<li>
		<FriendListItem />
	</li>
</ul>
  );
};

export default FriendList;