'use client';

import styles from './load-more.module.css';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSuspenseQuery } from '@apollo/client';

import { MetCollection, metSearchQuery } from '@day-at-the-musuem/apollo-client';
// import { MetCollection, metSearchQuery } from './met-search-query';
import { Card, Spinner } from '@day-at-the-musuem/shared-ui';

export interface LoadMoreProps {
  query: string;
  hasImages?: boolean;
  initialCursor?: number;
}

export function LoadMore({query, hasImages, initialCursor}: LoadMoreProps) {
  const [metObjects, setMetObjects] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [nextCursor, setNextCursor] = useState<number | undefined>(initialCursor);
  const [after, setAfter] = useState(initialCursor);

  const { data } = useSuspenseQuery<MetCollection>(metSearchQuery, {variables: {query, hasImages, after}});

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  async function loadMore() {
    await delay(500);
    // update after variable to rerun query and fetch next data set
    setAfter(nextCursor);
  }

  useEffect(() => {
    setMetObjects((objects) => [...objects, ...data.metMuseumSearch.objects]);
    setHasMore(data.metMuseumSearch.hasMore);
    setNextCursor(
      (data.metMuseumSearch.objects[data.metMuseumSearch.objects.length - 1] as any).objectID
    );
  }, [data]);

  useEffect(() => {
    if (inView && hasMore) {
      loadMore();
    }
  }, [inView]);

  return (
    <>
      {metObjects.map((obj: any) => (
        <Card
          key={obj.objectID}
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
      {hasMore && (
        <div ref={ref}>
          <Spinner />
        </div>
      )}
    </>
  );
}

export default LoadMore;
