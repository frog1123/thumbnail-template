import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import Image from 'next/image';
import github from '@public/custom_icons/github_icon.svg';
import stellar from '@public/custom_icons/stellar.svg';
import { TextContainer } from '@components/TextContainer';

const InstallStellarThemeUpdated: NextPage = () => {
  return (
    <Thumbnail direction='ltr'>
      <TextContainer>
        <h1 className={g['text-large']}>INSTALL</h1>
        <h1 className={g['text-large']}>THEMES</h1>
        <h1 className={g['text-large']}>FOR</h1>
        <SpecialText color='white' text='GITHUB' textSize='large' icon={github} textTransparent gap direction='ltr' />
      </TextContainer>
      <div className={g['side-container']}>
        <Image src={stellar} width={800} alt='' />
      </div>
    </Thumbnail>
  );
};

export default InstallStellarThemeUpdated;
