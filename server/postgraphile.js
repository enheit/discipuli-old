import postgraphile from 'postgraphile';

import { DB_CONNECTION_STRING, IS_PRODUCTION } from './config';

// Connection path
const connectionString = DB_CONNECTION_STRING;

let options = {
  classicIds: true,
  graphqlRoute: '/graphql',
};

// Add /graphiql end-point only to DEV build
if (!IS_PRODUCTION) {
  options = {
    ...options,
    graphiql: true,
    graphiqlRoute: '/graphiql',
  };
}

const postGqlMiddleware = postgraphile(connectionString, 'discipuli', options);

export default postGqlMiddleware;
