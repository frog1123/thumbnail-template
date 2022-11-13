import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import styles from '@styles/other/HostHtmlHeroku.module.scss';
import html from '@public/icons/html.svg';
import heroku from '@public/icons/heroku.svg';
import Image from 'next/image';
import localhost from '@public/assets/host-html-heroku/localhost.png';
import herokuapp from '@public/assets/host-html-heroku/herokuapp.png';
import { TextContainer } from '@components/TextContainer';

const HostHtmlHeroku: NextPage = () => {
  return (
    <Thumbnail direction='rtl'>
      <TextContainer>
        <h1 className={g['text-large']}>HOST</h1>
        <h1 className={g['text-large']} dir='ltr'>
          <SpecialText color='#e44d26' text='HTML' textSize='large' icon={html} textTransparent direction='rtl' /> FILES
        </h1>
        <h1 className={g['text-large']}>ON</h1>
        <SpecialText color='#6963b9' text='HEROKU' textSize='large' icon={heroku} textTransparent direction='rtl' />
      </TextContainer>
      <div className={g['side-container']}>
        <div className={styles['side-container-content']}>
          <div>
            <h1 className={styles['side-text']}>noob ❌</h1>
            <Image className={styles['main-img']} height={120} src={localhost} alt='' />
          </div>
          <div>
            <h1 className={styles['side-text']}>pro ✅</h1>
            <Image className={styles['main-img']} width={767} src={herokuapp} alt='' />
          </div>
        </div>
      </div>
    </Thumbnail>
  );
};

export default HostHtmlHeroku;
