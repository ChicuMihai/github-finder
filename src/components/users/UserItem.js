import React from 'react';
import { Link } from 'react-router-dom';
const UserItem = props => {
  const { avatar_url, login } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        style={{ width: '60px' }}
        alt=''
      ></img>
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};
export default UserItem;
