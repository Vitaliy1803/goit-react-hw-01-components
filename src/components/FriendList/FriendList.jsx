import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className='friendsList'>
            {friends.map(friend => {
                return (
                    <li className='friendsListItem' key={friend.id}>
                    <span className="status">{friend.isOnline}</span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
                </li>
                );
                
            })}
        </ul>
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