import { NextPage } from 'next';
import { Thumbnail } from '@components/Thumbnail';
import { SpecialText } from '@components/SpecialText';
import g from '@styles/General.module.scss';
import styles from '@styles/other/PrismaMongodb.module.scss';
import prisma from '@public/icons/prisma.svg';
import mongodb from '@public/custom_icons/mongodb.png';
import handshake from '@public/assets/prisma-mongodb/handshake.png';
import Image from 'next/image';

const PrismaMongodb: NextPage = () => {
  return (
    <Thumbnail direction='rtl'>
      <div className={g['text-container']}>
        <h1 className={g['text-large']}>USING</h1>
        <SpecialText color='#00bfa5' text='PRISMA' textSize='large' icon={prisma} direction='rtl' />
        <h1 className={g['text-large']}>IN</h1>
        <SpecialText color='#4db33d' text='MONGODB' textSize='large' icon={mongodb} direction='rtl' />
      </div>
      <div className={styles['custom-container-container']}>
        <div className={styles['custom-container']}>
          <Image className={styles['big-img']} src={prisma} alt='' />
          <Image className={styles['big-img']} src={handshake} alt='' />
          <Image className={styles['big-img']} src={mongodb} alt='' />
        </div>
      </div>
    </Thumbnail>
  );
};

export default PrismaMongodb;
