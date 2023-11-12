import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    "Query to search met museum collection"
    metMuseumSearch(query: String, hasImages: Boolean, pageSize: Int, after: Int): MetMuseumObjectListPage
    "Query to get single object by id"
    metMuseumObject(objectID: Int): MetMuseumObject
  }

  type MetMuseumObjectListPage {
    total: Int
    cursor: String
    hasMore: Boolean!
    objects: [MetMuseumObject]
  }
  type MetMuseumObject {
    objectID: Int
    object: MetMuseumObjectFields
  }

  type MetMuseumObjectFields {
    isHighlight: Boolean
    accessionNumber: String
    accessionYear: String
    isPublicDomain: Boolean
    primaryImage: String
    primaryImageSmall: String
    additionalImages: [String]
    constituents: [String]
    department: String
    objectName: String
    title: String
    culture: String
    period: String
    dynasty: String
    reign: String
    portfolio: String
    artistRole: String
    artistPrefix: String
    artistDisplayName: String
    artistDisplayBio: String
    artistSuffix: String
    artistAlphaSort: String
    artistNationality: String
    artistBeginDate: String
    artistEndDate: String
    artistGender: String
    artistWikidata_URL: String
    artistULAN_URL: String
    objectDate: String
    objectBeginDate: Int
    objectEndDate: Int
    medium: String
    dimensions: String
    dimensionsParsed: Float
    measurements: [Element]
    creditLine: String
    geographyType: String
    city: String
    state: String
    county: String
    country: String
    region: String
    subregion: String
    locale: String
    locus: String
    excavation: String
    river: String
    classification: String
    rightsAndReproduction: String
    linkResource: String
    metadataDate: String
    repository: String
    objectURL: String
    # tags	array	An array of subject keyword tags associated with the object and their respective AAT URL	[{"term": "Abstraction","AAT_URL": "http://vocab.getty.edu/page/aat/300056508","Wikidata_URL": "https://www.wikidata.org/wiki/Q162150"}]
    objectWikidata_URL: String
    isTimelineWork: Boolean
    GalleryNumber: String
  }

  type Element {
    elementName: String!
    elementDescription: String
    elementMeasurements: Measurement
  }

  union Measurement = WeightMeasurement | SpatialMeasurement
  type WeightMeasurement {
    Weight: Float
  }
  type SpatialMeasurement {
    Height: Float
    Length: Float
    Width: Float
    Diameter: Float
  }
`;
