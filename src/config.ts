const DEFAULT_DB_URL = 'mysql://api:secretpassword@localhost:3306/umbragado';
const DEFAULT_PORT = '4001';
const DEFAULT_SECRET_KEY = 'secret';
const DEFAULT_SECRET_JWT = 'secret';

export default {
  db: {
    url: process.env.DB_URL || DEFAULT_DB_URL,
  },
  server: {
    port: process.env.PORT || DEFAULT_PORT,
    secret: process.env.SECRET_KEY || DEFAULT_SECRET_KEY,
    bucket: process.env.BUCKET,
  },
  auth: {
    secret: process.env.SECRET_JWT || DEFAULT_SECRET_JWT,
  },
};
