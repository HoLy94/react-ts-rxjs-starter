export default process.env.NODE_ENV === 'production'
  ? '/prod/api'
  : '/stage/api';

export const authApi =
  process.env.NODE_ENV === 'production' ? '/prod/api/auth' : '/stage/api/auth';
