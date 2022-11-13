import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import styles from '@styles/other/SassNextjs.module.scss';
import sass from '@public/icons/sass.svg';
import next from '@public/icons/next.svg';
import image from '@public/assets/sass-nextjs/img.png';
import Image from 'next/image';
import { TextContainer } from '@components/TextContainer';

const SassNextjs: NextPage = () => {
  return (
    <Thumbnail direction='ltr'>
      <TextContainer>
        <h1 className={g['text-large']}>USING</h1>
        <SpecialText color='#ec407a' text='SASS' textSize='large' icon={sass} direction='ltr' />
        <h1 className={g['text-large']}>IN</h1>
        <SpecialText color='#cfd8dc' text='NEXTJS' textSize='large' icon={next} textTransparent direction='ltr' />
      </TextContainer>
      <div className={styles['image-container-container']}>
        <div>
          <Image className={styles['image']} src={image} width={1000} alt='' />
        </div>
      </div>
    </Thumbnail>
  );
};

export default SassNextjs;
