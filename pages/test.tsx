import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import g from '@styles/General.module.scss';
import Image from 'next/image';
import discord from '@public/custom_icons/discord.svg';
import { TextContainer } from '@components/TextContainer';
import { SpecialTextP } from '@components/SpecialTextP';

const CreateDiscordBot: NextPage = () => {
  return (
    <Thumbnail direction='ltr' bg='/backgrounds/mc.png'>
      <TextContainer>
        <h1 className={g['text-large']}>TEST</h1>
        <SpecialTextP gradient='#2fe01f' text='COOL' textSize='large' gap direction='ltr' />
        <h1 className={g['text-large']}>ASDASASD</h1>
        <h1 className={g['text-large']}>WADASD</h1>
      </TextContainer>
      <div className={g['side-container']}>
        <Image src={discord} width={800} alt='' />
      </div>
    </Thumbnail>
  );
};

export default CreateDiscordBot;
