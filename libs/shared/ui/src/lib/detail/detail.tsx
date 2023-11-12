import styles from './detail.module.css';

export interface DetailProps {
  objectID: number;
  title: string;
  primaryImage?: string;
  imageWidth?: string;
  objectName?: string;
  artistDisplayName?: string;
  artistDisplayBio?: string;
  objectDate?: string;
  medium?: string;
  department?: string;
  culture?: string;
  period?: string;
  creditLine?: string;
}

export function Detail({
  title,
  primaryImage,
  imageWidth,
  objectName,
  artistDisplayName,
  artistDisplayBio,
  objectDate,
  medium,
  department,
  culture,
  period,
  creditLine,
}: DetailProps) {
  return (
    <div className={styles.card}>
      <div className="flex flex-col items-center">
        <h2 className="text-xl">{title}</h2>
        {primaryImage && (
          <img
            width={imageWidth || '400'}
            src={primaryImage}
            alt={objectName}
          />
        )}
      </div>
      <div className="flex justify-between">
        <span>{artistDisplayName ? artistDisplayName : 'artist unknown'}</span>
        <div className="flex flex-col">
          <span className="text-end">
            {objectDate ? objectDate : 'undated'}
          </span>
          {medium && <p className="text-end">{medium}</p>}
        </div>
      </div>
      {artistDisplayBio && <p>{artistDisplayBio}</p>}
      <div className="my-4">
        {department && <p>{department}</p>}
        {culture && <p>{culture}</p>}
        {period && <p>{period}</p>}
        {creditLine && <p>{creditLine}</p>}
      </div>
    </div>
  );
}

export default Detail;
