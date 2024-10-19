export const userQueries = {
  // add new user
  addUser: `
    INSERT INTO users (username, email, password)
    VALUES (?, ?, ?);
  `,

  // check if user exists for logging in
  validateUser: `
    SELECT user_id, username, email
    FROM users
    WHERE username = ? AND password = ?;
  `,
};
