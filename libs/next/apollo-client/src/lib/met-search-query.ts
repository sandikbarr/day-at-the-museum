import { gql } from '@apollo/client';

export const metSearchQuery = gql`
  query Query(
    $query: String
    $hasImages: Boolean
    $pageSize: Int
    $after: Int
  ) {
    metMuseumSearch(
      query: $query
      hasImages: $hasImages
      pageSize: $pageSize
      after: $after
    ) {
      total
      cursor
      hasMore
      objects {
        objectID
        object {
          primaryImage
          department
          objectName
          title
          culture
          period
          dynasty
          reign
          artistDisplayName
          artistDisplayBio
          objectDate
          medium
          creditLine
        }
      }
    }
  }
`;
