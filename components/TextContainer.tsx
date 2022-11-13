import type { FC } from 'react';
import styles from '@styles/TextContainer.module.scss';

interface TextContainerProps {
  children: string | JSX.Element[] | JSX.Element;
}

export const TextContainer: FC<TextContainerProps> = ({ children }) => {
  return <div className={styles['text-container']}>{children}</div>;
};
