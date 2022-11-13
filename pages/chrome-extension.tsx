import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import Image from 'next/image';
import chrome from '@public/custom_icons/chrome.png';
import stellar from '@public/custom_icons/stellar.svg';
import { TextContainer } from '@components/TextContainer';

const ChromeExtension: NextPage = () => {
  return (
    <Thumbnail direction='ltr'>
      <TextContainer>
        <h1 className={g['text-large']}>I MADE</h1>
        <h1 className={g['text-large']}>A</h1>
        <SpecialText color='gray' text='CHROME' textSize='large' icon={chrome} textTransparent gap direction='ltr' />
        <h1 className={g['text-large']}>EXTENSION</h1>
      </TextContainer>
      <div className={g['side-container']}>
        <Image src={stellar} width={800} alt='' />
      </div>
    </Thumbnail>
  );
};

export default ChromeExtension;
