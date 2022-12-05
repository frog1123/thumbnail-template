import { FC } from 'react';
import styles from '@styles/Thumbnail.module.scss';
import bg from '@public/assets/backgrounds/rain_blurered.gif';
import { url } from 'inspector';

interface ThumbnailProps {
  direction: 'ltr' | 'rtl';
  bg?: string;
  children: string | JSX.Element[] | JSX.Element;
}

export const Thumbnail: FC<ThumbnailProps> = ({ direction, bg, children }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: bg }} dir={direction}>
      {children}
    </div>
  );
};
