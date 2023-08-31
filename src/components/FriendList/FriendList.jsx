import PropTypes from 'prop-types';
import { List,
        Item,
        Status,
        Avatar,
        Name,
} from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend => {
                return (
                    <Item key={friend.id}>
                    <Status>{friend.isOnline}</Status>
                    <Avatar src={friend.avatar} alt="User avatar" width="48" />
                    <Name>{friend.name}</Name>
                </Item>
                );
                
            })}
        </List>
    );
        
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape ({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })  
    ).isRequired,
};