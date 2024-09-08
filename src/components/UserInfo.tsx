// UserInfo.tsx
import React from 'react';
import { useUser } from '../context/UserContext';

const UserInfo: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="user-info">
      {user ? <p>Вітаємо, {user}!</p> : <p>Будь ласка, увійдіть, щоб продовжити.</p>}
    </div>
  );
};

export default UserInfo;
