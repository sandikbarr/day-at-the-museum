'use client';

import {
  ReadonlyURLSearchParams,
  useSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import styles from './search.module.css';

export interface SearchProps {
  placeholder?: string;
}

export function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setSearchQuery = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(
      searchParams as ReadonlyURLSearchParams & {
        size: number;
      }
    );
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  function setHasImages(hasImages: boolean) {
    const params = new URLSearchParams(
      searchParams as ReadonlyURLSearchParams & {
        size: number;
      }
    );

    if (hasImages) {
      params.set('hasImages', hasImages.toString());
    } else {
      params.delete('hasImages');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <span>
      <label className={styles.searchLabel}>
        Search:{' '}
        <input
          placeholder={placeholder}
          defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </label>

      <label className={styles.searchLabel}>
        <input
          type="checkbox"
          defaultChecked={Boolean(searchParams.get('hasImages'))}
          onChange={(e) => setHasImages(e.target.checked)}
        />
        has images
      </label>
    </span>
  );
}

export default Search;
