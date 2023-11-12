export interface MetCollectionSearch {
  total: number;
  cursor: number;
  hasMore: boolean;
  objects: Array<unknown>;
};

export interface MetCollection {
metMuseumSearch: MetCollectionSearch;
}

export interface MetCollectionObject {
  objectID: number;
  object: any;
}

export interface MetObject {
  metMuseumObject: MetCollectionObject;
}
