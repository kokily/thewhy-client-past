import { gql } from '@apollo/client';

/**
 * Add Reply
 * @param {
 *  body: String!
 *  questionId: ID!
 * }
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const ADD_REPLY = gql`
  mutation AddReply($body: String!, $questionId: ID!) {
    AddReply(body: $body, questionId: $questionId) {
      ok
      error
    }
  }
`;

/**
 * Remove Reply
 * @param {id: ID!}
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const REMOVE_REPLY = gql`
  mutation RemoveReply($id: ID!) {
    RemoveReply(id: $id) {
      ok
      error
    }
  }
`;

/**
 * Update Reply
 * @param {
 *  id: ID!
 *  body: String
 * }
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const UPDATE_REPLY = gql`
  mutation UpdateReply($id: ID!, $body: String) {
    UpdateReply(id: $id, body: $body) {
      ok
      error
    }
  }
`;
