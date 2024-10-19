import { createPool, Pool } from 'mysql2';
let pool: Pool | null = null;

const initializeMySqlConnector = () => {
  try {
    pool = createPool({
      connectionLimit: parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT || "") || 10,
      port: parseInt(process.env.MY_SQL_DB_PORT || "") || 3306,
      host: process.env.MY_SQL_DB_HOST,
      user: process.env.MY_SQL_DB_USER,
      password: process.env.MY_SQL_DB_PASSWORD,
      database: process.env.MY_SQL_DB_DATABASE,
      authPlugins: { mysql_native_password: () => () => Buffer.from('') }
    });

    console.debug('MySql Adapter Pool generated successfully');
    console.log('process.env.DB_DATABASE', process.env.MY_SQL_DB_DATABASE);

    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error: MySQL failed to connect');
        throw new Error('Not able to connect to database');
      } else {
        console.log('Connection made');
        connection.release();
      }
    });

  } catch (error) {
    console.error('[mysql.connector][initializeMySqlConnector][Error]:', error);
    throw new Error('Failed to initialize pool');
  }
};

export const execute = <T>(query: string, params: any[]): Promise<T> => {
  try {
    if (!pool) {
      initializeMySqlConnector();
    }

    return new Promise<T>((resolve, reject) => {
      pool!.execute(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results as T);
      });
    });

  } catch (error) {
    console.error('[mysql.connector][execute][Error]:', error);
    throw new Error('Failed to execute MySQL query');
  }
};
