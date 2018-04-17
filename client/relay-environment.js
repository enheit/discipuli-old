import { Environment, Network, RecordSource, Store } from 'relay-runtime';
// TODO: Replace fetch with axios. Or figure out how to use native fetch
import fetch from 'isomorphic-fetch';

// Admin
// eslint-disable-next-line
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJwZXJzb25faWQiOjcsImlhdCI6MTUyMzk5NzAxMiwiZXhwIjoxNTI0MDgzNDEyLCJhdWQiOiJwb3N0Z3JhcGhxbCIsImlzcyI6InBvc3RncmFwaHFsIn0.GnwPQ-DYlcH2IKffUbWVs8KA5K5l3shNrCl5JKd9yx0';

function fetchQuery(operation, variables) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${JWT}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
