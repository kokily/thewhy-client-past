import { gql } from '@apollo/client';

export const SEND_CONTACT = gql`
  mutation SendContact($name: String!, $email: String!, $subject: String!, $body: String!) {
    SendContact(name: $name, email: $email, subject: $subject, body: $body) {
      ok
      error
    }
  }
`;
