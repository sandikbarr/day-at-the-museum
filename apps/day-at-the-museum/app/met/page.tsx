import styles from './met.module.css';

import { Cursor } from '@day-at-the-musuem/next-ui';
import { Search } from '@day-at-the-musuem/next-ui';
import { Card } from '@day-at-the-musuem/shared-ui';

import { getClient } from '@day-at-the-musuem/shared-apollo';
import { gql } from '@apollo/client';

const query = gql`
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

interface MetCollection {
  metMuseumSearch: {
    total: number;
    cursor: number;
    hasMore: boolean;
    objects: Array<unknown>;
  };
}

export interface MetProps {
  searchParams?: {
    query?: string;
    hasImages?: string;
    after?: string;
  };
}

export async function Page({ searchParams }: MetProps) {
  const searchQuery = searchParams?.query || 'portrait';
  const after = searchParams?.after ? Number(searchParams.after) : null;
  const hasImages = searchParams?.hasImages
    ? Boolean(searchParams.hasImages)
    : null;

  const metCollection = await getClient().query<MetCollection>({
    query,
    variables: {
      query: searchQuery,
      ...(hasImages !== null && { hasImages }),
      pageSize: 12,
      ...(after !== null && { after }),
    },
  });

  return (
    <div className={styles.met}>
      <div className={styles.searchParams}>
        <Search placeholder="Search collection..." />
        <Cursor
          after={
            metCollection.data.metMuseumSearch.hasMore &&
            (
              metCollection.data.metMuseumSearch.objects[
                metCollection.data.metMuseumSearch.objects.length - 1
              ] as any
            ).objectID
          }
          return={!!searchParams?.after}
        ></Cursor>
      </div>
      <div className={styles.cards}>
        {metCollection.data.metMuseumSearch.objects.map((obj: any) => (
          <Card
            objectID={obj.objectID}
            title={obj.object.title}
            primaryImage={obj.object.primaryImage}
            objectName={obj.object.objectName}
            artistDisplayName={obj.object.artistDisplayName}
            artistDisplayBio={obj.object.artistDisplayBio}
            objectDate={obj.object.objectDate}
            medium={obj.object.medium}
            department={obj.object.department}
            culture={obj.object.culture}
            period={obj.object.period}
            creditLine={obj.object.creditLine}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
