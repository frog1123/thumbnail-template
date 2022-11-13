import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import Image from 'next/image';
import img from '@public/assets/make-vscode-better/img.png';
import { TextContainer } from '@components/TextContainer';

const MakeVscodeBetter: NextPage = () => {
  return (
    <Thumbnail direction='ltr'>
      <TextContainer>
        <h1 className={g['text-large']}>MAKE</h1>
        <h1 className={g['text-large']}>YOUR</h1>
        <SpecialText color='#0098ff' text='VSCODE' textSize='large' textTransparent direction='ltr' />
        <h1 className={g['text-large']}>BETTER</h1>
      </TextContainer>
      <div className={g['side-container']}>
        <Image src={img} width={800} alt='' />
      </div>
    </Thumbnail>
  );
};

export default MakeVscodeBetter;
