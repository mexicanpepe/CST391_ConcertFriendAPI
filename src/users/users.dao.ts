import { execute } from '../services/mysql.connector';
import { OkPacket } from 'mysql2';
import { userQueries } from './users.queries';
import { User } from './users.model';

// add new user
export const addUser = async (user: User): Promise<OkPacket> => {
  return execute<OkPacket>(userQueries.addUser, [user.username, user.email, user.password]);
};

// validate user
export const validateUser = async (username: string, password: string): Promise<User | null> => {
  const users = await execute<User[]>(userQueries.validateUser, [username, password]);
  return users.length > 0 ? users[0] : null;
};
