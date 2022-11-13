import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import Image from 'next/image';
import { TextContainer } from '@components/TextContainer';
import sidebar from '@public/assets/modern-sidebar/sidebar.png';
import styles from '@styles/other/ModernSidebar.module.scss';

const ModernSidebar: NextPage = () => {
  return (
    <Thumbnail direction='ltr'>
      <TextContainer>
        <h1 className={g['text-large']}>CREATE</h1>
        <h1 className={g['text-large']}>A</h1>
        <SpecialText gradient='linear-gradient(45deg, #ce376a 0%, #ae80c9 100%)' text='MODERN' textSize='large' textTransparent gap direction='ltr' />
        <h1 className={g['text-large']}>SIDEBAR</h1>
      </TextContainer>
      <div className={g['side-container']}>
        <Image className={styles['main-img']} src={sidebar} width={700} alt='' />
      </div>
    </Thumbnail>
  );
};

export default ModernSidebar;
