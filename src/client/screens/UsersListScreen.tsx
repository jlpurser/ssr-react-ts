import React, { useEffect } from 'react';
import { UsersListProps } from '../containers/UsersListContainer';

export default function UsersListScreen({ users, fetchUsers }: UsersListProps) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
