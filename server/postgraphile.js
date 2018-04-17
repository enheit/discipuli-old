import postgraphile from 'postgraphile';

import { DB_CONNECTION_STRING, IS_PRODUCTION } from './config';

const options = {
  classicIds: true,
  graphqlRoute: '/graphql',
  graphiqlRoute: '/graphiql',
  graphiql: !IS_PRODUCTION,
  jwtSecret: '123',
  jwtPgTypeIdentifier: 'discipuli.jwt_token',
  pgDefaultRole: 'anonymous',
};

// eslint-disable-next-line
const postGqlMiddleware = postgraphile(DB_CONNECTION_STRING, 'discipuli', options);

export default postGqlMiddleware;
