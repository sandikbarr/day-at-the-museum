import { LoadMore } from '@day-at-the-musuem/next-ui';
import { Search } from '@day-at-the-musuem/next-ui';
import { Card, CardCollection } from '@day-at-the-musuem/shared-ui';

import { fetchMet } from '@day-at-the-musuem/actions';

export interface MetProps {
  searchParams?: {
    query?: string;
    hasImages?: string;
    after?: string;
  };
}

export async function Page({ searchParams }: MetProps) {
  const searchQuery = searchParams?.query;
  const after = searchParams?.after ? Number(searchParams.after) : undefined;
  const hasImages = searchParams?.hasImages
    ? Boolean(searchParams.hasImages)
    : undefined;

  const metCollection = searchQuery
    ? await fetchMet(searchQuery, hasImages, after)
    : undefined;

  return (
    <div>
      <h1 className="text-3xl flex justify-center">
        Browse The Metropolitan Museum of Art Collection
      </h1>
      <div className="my-6 flex justify-center">
        <Search placeholder="Search collection..." />
      </div>
      <CardCollection>
        {metCollection?.objects.map((obj: any) => (
          <Card
            key={obj.objectID}
            objectID={obj.objectID}
            href={`/met/detail/${obj.objectID}`}
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
        {searchQuery && metCollection && (
          <LoadMore
            query={searchQuery}
            hasImages={hasImages}
            initialCursor={
              (metCollection.objects[metCollection.objects.length - 1] as any)
                .objectID
            }
          />
        )}
      </CardCollection>
    </div>
  );
}

export default Page;
