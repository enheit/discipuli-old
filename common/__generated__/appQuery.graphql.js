/**
 * @flow
 * @relayHash 011895c05c123383c10ed4441f144684
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type appQueryResponse = {|
  +user: ?{|
    +login: string;
    +password: string;
  |};
|};
*/


/*
query appQuery {
  user: userByRowId(rowId: 1) {
    login
    password
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "user",
        "args": [
          {
            "kind": "Literal",
            "name": "rowId",
            "value": 1,
            "type": "Int!"
          }
        ],
        "concreteType": "User",
        "name": "userByRowId",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "login",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "password",
            "storageKey": null
          }
        ],
        "storageKey": "userByRowId{\"rowId\":1}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "appQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "appQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "user",
        "args": [
          {
            "kind": "Literal",
            "name": "rowId",
            "value": 1,
            "type": "Int!"
          }
        ],
        "concreteType": "User",
        "name": "userByRowId",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "login",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "password",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "userByRowId{\"rowId\":1}"
      }
    ]
  },
  "text": "query appQuery {\n  user: userByRowId(rowId: 1) {\n    login\n    password\n    id\n  }\n}\n"
};

module.exports = batch;
