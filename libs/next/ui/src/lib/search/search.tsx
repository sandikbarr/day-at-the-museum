'use client';

import {
  ReadonlyURLSearchParams,
  useSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export interface SearchProps {
  placeholder?: string;
}

export function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function getURLSearchParams(params: ReadonlyURLSearchParams): URLSearchParams {
    return new URLSearchParams(
      params as ReadonlyURLSearchParams & {
        size: number;
      }
    );
  }

  const setSearchQuery = useDebouncedCallback((term: string) => {
    const params = getURLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  function setHasImages(hasImages: boolean) {
    const params = getURLSearchParams(searchParams);
    if (hasImages) {
      params.set('hasImages', hasImages.toString());
    } else {
      params.delete('hasImages');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  const query = searchParams.get('query')?.toString();
  if (!query) {
    setSearchQuery('painting')
  }
  return (
    <>
      <label className="mr-4">
        Search:{' '}
        <input
          placeholder={placeholder}
          defaultValue={query}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </label>

      <label className="mr-4">
        <input
          type="checkbox"
          defaultChecked={Boolean(searchParams.get('hasImages'))}
          onChange={(e) => setHasImages(e.target.checked)}
        />
        has images
      </label>
    </>
  );
}

export default Search;
