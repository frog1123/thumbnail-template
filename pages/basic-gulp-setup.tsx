import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import Image from 'next/image';
import stellar from '@public/custom_icons/stellar.svg';
import { TextContainer } from '@components/TextContainer';
import gulp from '@public/icons/gulp.svg';

const BasicGulpSetup: NextPage = () => {
  return (
    <Thumbnail direction='rtl'>
      <TextContainer>
        <h1 className={g['text-large']}>CREATE A</h1>
        <h1 className={g['text-large']}>BASIC</h1>
        <SpecialText color='#e53935' text='GULP' textSize='large' textTransparent gap direction='rtl' />
        <h1 className={g['text-large']}>SETUP</h1>
      </TextContainer>
      <div className={g['side-container']}>
        <Image src={gulp} width={950} alt='' />
      </div>
    </Thumbnail>
  );
};

export default BasicGulpSetup;
