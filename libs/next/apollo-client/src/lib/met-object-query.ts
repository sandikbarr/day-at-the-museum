import { gql } from '@apollo/client';

export const metObjectQuery = gql`
  query Query($objectID: Int) {
    metMuseumObject(objectID: $objectID) {
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
`;
