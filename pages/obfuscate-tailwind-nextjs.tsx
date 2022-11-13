import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import styles from '@styles/other/ObfuscateTailwindNextjs.module.scss';
import tailwindcss from '@public/icons/tailwindcss.svg';
import next from '@public/icons/next.svg';

const ObfuscateTailwindNextjs: NextPage = () => {
  return (
    <Thumbnail direction='ltr'>
      <div className={g['text-container']}>
        <h1 className={g['text-large']}>OBFUSCATE</h1>
        <SpecialText color='#4db6ac' text='TAILWIND' textSize='large' icon={tailwindcss} direction='ltr' />
        <h1 className={g['text-large']}>CLASSES</h1>
        <h1 className={g['text-large']}>
          IN <SpecialText color='#cfd8dc' text='NEXTJS' textSize='large' icon={next} textTransparent direction='ltr' />
        </h1>
      </div>
      <div>
        <div className={styles['example-text-container']}>
          <h1 className={styles['example-text']}>
            .container <br />
            ⬇️
            <br />
            .Y29udGFpbmVy
          </h1>
        </div>
      </div>
    </Thumbnail>
  );
};

export default ObfuscateTailwindNextjs;
