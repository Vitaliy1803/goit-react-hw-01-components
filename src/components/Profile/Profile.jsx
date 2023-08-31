import PropTypes, { shape } from 'prop-types';
import {
  UserProfile,
  ProfileContainer,
  ProfileAvatar,
  Username,
  Tag,
  Location,
  Stats,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <ProfileContainer>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileContainer>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
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
