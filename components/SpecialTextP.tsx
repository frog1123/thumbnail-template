import Image, { StaticImageData } from 'next/image';
import type { FC } from 'react';
import styles from '@styles/SpecialTextP.module.scss';

interface SpecialTextBasics {
  icon?: StaticImageData;
  text: string;
  textSize: 'large';
  textTransparent?: boolean;
  gap?: boolean;
  bg?: string;
  direction: 'ltr' | 'rtl';
}

interface SpecialTextGradientProps extends SpecialTextBasics {
  color?: never;
  gradient?: string;
}

interface SpecialTextColorProps extends SpecialTextBasics {
  color?: string;
  gradient?: never;
}

type SpecialTextProps = SpecialTextGradientProps | SpecialTextColorProps;

export const SpecialTextP: FC<SpecialTextProps> = ({ color, gradient, icon, text, textSize, textTransparent, bg, gap, direction }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <div className={styles['special-text-container']} style={{ gap: gap ? '20px' : '', color: color }} dir={direction}>
        <div className={styles['special-text']} style={{ backgroundColor: color, background: gradient }}>
          <h1 className={bg ? styles['clip-text'] : ''} style={{ fontSize: textSize === 'large' ? '140px' : '', backgroundImage: bg, color: textTransparent ? 'var(--background-color)' : '' }}>
            {text}
          </h1>
        </div>
        {icon && <Image className={styles['icon']} width={210} src={icon} alt='' />}
      </div>
    </div>
  );
};
