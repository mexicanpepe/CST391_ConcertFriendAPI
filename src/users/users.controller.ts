import { Request, Response, RequestHandler } from 'express';
import * as UserDao from './users.dao';
import { User } from './users.model';

// add new user
export const addUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {

  try {
    const newUser: User = req.body;
    const result = await UserDao.addUser(newUser);
    res.status(201).json({
      message: 'User added successfully',
      userId: result.insertId
    });
  } catch (error) {

    console.error('[users.controller][addUser][Error]:', error);

    res.status(500).json({ message: 'Error while adding user' });
  }
};



// user login
export const validateUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required' });

      return;
    }

    const user = await UserDao.validateUser(username, password);

    if (user) {
      res.status(200).json({
        message: 'Login successful',
        user: {
          userId: user.userId,
          username: user.username,
          email: user.email
        }
      });

    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }

  } catch (error) {

    console.error('[users.controller][validateUser][Error]:', error);

    res.status(500).json({ message: 'Error during user validation' });
  }
};

