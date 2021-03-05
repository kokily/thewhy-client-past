import { gql } from '@apollo/client';

/**
 * ListNotice
 * @param(title: string, tag: string, cursor: ID)
 * @returns {
 *  ok: Boolean;
 *  error: String;
 *  stories: [Story]
 * }
 */
export const LIST_STORIES = gql`
  query ListStories($title: String, $tag: String, $cursor: ID) {
    ListStories(title: $title, tag: $tag, cursor: $cursor) {
      ok
      error
      stories {
        id
        title
        body
        thumbnail
        tags
        created_at
        updated_at
      }
    }
  }
`;
