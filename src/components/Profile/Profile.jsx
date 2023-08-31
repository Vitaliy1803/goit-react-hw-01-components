import PropTypes, { shape } from 'prop-types';
import { UserProfile } from './Profile.styled';
import { ProfileContainer } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <UserProfile>
            <ProfileContainer>
            <img className="avatar" src={avatar} alt="User avatar" />
            <p className="username">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </ProfileContainer>

        <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
        </UserProfile>

    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
  };

  