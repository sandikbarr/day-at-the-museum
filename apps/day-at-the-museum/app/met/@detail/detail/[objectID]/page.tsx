import { fetchMetObject } from '@day-at-the-musuem/actions';
import { Detail } from '@day-at-the-musuem/shared-ui';
import { BackButton } from '@day-at-the-musuem/next-ui';

export default async function Page({ params }: { params: { objectID: string } }) {
  const objectID = Number(params.objectID);
  console.log('met/detail/[objectID]', { objectID });
  const metObject = await fetchMetObject(objectID);

  return (
    <div
      className="relative z-10"
      aria-label={metObject.object.title}
      role="dialog"
      aria-modal="true"
    >
      {/*
        Background backdrop, show/hide based on modal state.
      */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/*
              Modal panel, show/hide based on modal state.
          */}
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-10/12">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <Detail 
                objectID={metObject.objectID}
                title={metObject.object.title}
                closeBtn={(<BackButton>X</BackButton>)}
                primaryImage={metObject.object.primaryImage}
                imageWidth="100%"
                objectName={metObject.object.objectName}
                artistDisplayName={metObject.object.artistDisplayName}
                artistDisplayBio={metObject.object.artistDisplayBio}
                objectDate={metObject.object.objectDate}
                medium={metObject.object.medium}
                department={metObject.object.department}
                culture={metObject.object.culture}
                period={metObject.object.period}
                creditLine={metObject.object.creditLine}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
