import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import Image from 'next/image';
import stellar from '@public/custom_icons/stellar.svg';
import { TextContainer } from '@components/TextContainer';

const GithubStellarTheme: NextPage = () => {
  return (
    <Thumbnail direction='rtl'>
      <TextContainer>
        <h1 className={g['text-large']}>GITHUB</h1>
        <SpecialText gradient='linear-gradient(45deg, #9335f2 0%, #aa74e0 100%)' text='STELLAR' textSize='large' textTransparent gap direction='rtl' />
        <h1 className={g['text-large']}>THEME</h1>
        <h1 className={g['text-large']}>EXTENSION</h1>
      </TextContainer>
      <div className={g['side-container']}>
        <Image src={stellar} width={800} alt='' />
      </div>
    </Thumbnail>
  );
};

export default GithubStellarTheme;
