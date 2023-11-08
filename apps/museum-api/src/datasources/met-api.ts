import { RESTDataSource } from '@apollo/datasource-rest';

export class MetAPI extends RESTDataSource {
  baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/";

  getObjects() {
    return this.get("objects");
  }

  searchObjects(query: string, hasImages?: boolean) {
    let uri = `search?q=${query}`;
    if (hasImages !== undefined) {
      uri += `&hasImages=${hasImages}`;
    }
    return this.get(uri)
  }

  getObject(objectID: number) {
    return this.get(`objects/${objectID}`);
  }
}
