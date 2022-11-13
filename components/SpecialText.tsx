import Image, { StaticImageData } from 'next/image';
import type { FC } from 'react';
import styles from '@styles/SpecialText.module.scss';

interface SpecialTextBasics {
  icon?: StaticImageData;
  text: string;
  textSize: 'large';
  textTransparent?: boolean;
  gap?: boolean;
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

export const SpecialText: FC<SpecialTextProps> = ({ color, gradient, icon, text, textSize, textTransparent, gap, direction }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <div className={styles['special-text-container']} style={{ gap: gap ? '20px' : '' }} dir={direction}>
        <div className={styles['special-text']} style={{ backgroundColor: color, background: gradient }}>
          <h1 style={{ fontSize: textSize === 'large' ? '140px' : '', color: textTransparent ? 'var(--background-color)' : '' }}>{text}</h1>
        </div>
        {icon && <Image className={styles['icon']} width={210} src={icon} alt='' />}
      </div>
    </div>
  );
};
