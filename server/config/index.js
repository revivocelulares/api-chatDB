import dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const configuration = {
  db: {
    url: `${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  }
}

export default configuration;
