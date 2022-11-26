import type { FC } from 'react';

interface NumTextProps {
  number: number;
  color: string;
}

export const NumText: FC<NumTextProps> = ({ number, color }) => {
  return (
    <div style={{ display: 'inline-block', height: '100%', width: '200px', backgroundColor: color, borderRadius: '20px' }}>
      <h1 style={{ fontSize: '140px', textAlign: 'center' }}>{number}</h1>
    </div>
  );
};
