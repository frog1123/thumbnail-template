import Image, { StaticImageData } from 'next/image';
import type { FC } from 'react';
import styles from '@styles/SpecialText.module.scss';

interface SpecialTextProps {
  color: string;
  icon: StaticImageData;
  text: string;
  textSize: 'large';
  textTransparent?: boolean;
  direction: 'ltr' | 'rtl';
}

export const SpecialText: FC<SpecialTextProps> = ({ color, icon, text, textSize, textTransparent, direction }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <div className={styles['special-text-container']} dir={direction}>
        <div className={styles['special-text']} style={{ backgroundColor: color }}>
          <h1 style={{ fontSize: textSize === 'large' ? '140px' : '', color: textTransparent ? 'var(--background-color)' : '' }}>{text}</h1>
        </div>
        <Image className={styles['icon']} width={210} src={icon} alt='' />
      </div>
    </div>
  );
};
