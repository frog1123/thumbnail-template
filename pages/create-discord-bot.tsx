import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import g from '@styles/General.module.scss';
import Image from 'next/image';
import discord from '@public/custom_icons/discord.svg';
import { TextContainer } from '@components/TextContainer';
import { SpecialText } from '@components/SpecialText';

const CreateDiscordBot: NextPage = () => {
  return (
    <Thumbnail direction='ltr'>
      <TextContainer>
        <h1 className={g['text-large']}>CREATE A</h1>
        <SpecialText gradient='#5865f2' text='DISCORD' textSize='large' textTransparent gap direction='ltr' />
        <h1 className={g['text-large']}>BOT</h1>
        <h1 className={g['text-large']}>EPISODE 1</h1>
      </TextContainer>
      <div className={g['side-container']}>
        <Image src={discord} width={800} alt='' />
      </div>
    </Thumbnail>
  );
};

export default CreateDiscordBot;
