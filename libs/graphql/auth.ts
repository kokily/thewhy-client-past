import { gql } from '@apollo/client';

/**
 * Register
 * @param {password: String!}
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const REGISTER = gql`
  mutation Register($password: String!) {
    Register(password: $password) {
      ok
      error
    }
  }
`;

/**
 * Login
 * @param {password: String!}
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const LOGIN = gql`
  mutation Login($password: String!) {
    Login(password: $password) {
      ok
      error
    }
  }
`;

/**
 * Logout
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const LOGOUT = gql`
  mutation Logout {
    Logout {
      ok
      error
    }
  }
`;

/**
 * Me
 * @returns {
 *  ok: Boolean!
 *  error: String
 *  me: {
 *    adminId: String
 *  }
 * }
 */
export const ME = gql`
  query Me {
    Me {
      ok
      error
      me {
        adminId
      }
    }
  }
`;
