import { FC } from 'react';
import styles from '@styles/Thumbnail.module.scss';

interface ThumbnailProps {
  direction: 'ltr' | 'rtl';
  children: string | JSX.Element[] | JSX.Element;
}

export const Thumbnail: FC<ThumbnailProps> = ({ direction, children }) => {
  return (
    <div className={styles.container} dir={direction}>
      {children}
    </div>
  );
};
