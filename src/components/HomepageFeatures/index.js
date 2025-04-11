import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '営業時間',
    imgSrc: require('@site/src/components/Image/counter.jpg').default,
    description: (
      <>
        月・水・木・金・土<br></br>
        午後12時～午後５時<br></br>
        午後6時30分～午後10時30分（予約）<br></br>
        <br></br>
        日・火<br></br>
        定休日<br></br>
      </>
    ),
  },
  {
    title: '営業案内',
    imgSrc: require('@site/src/components/Image/longchair.jpg').default,
    description: (
      <>
        カラオケ歌い放題（1,200円）<br></br>
        コーヒー・お菓子付き<br></br>
      </>
    ),
  },
  {
    title: '店舗イベント情報',
    imgSrc: require('@site/src/components/Image/event.jpg').default,
    description: (
      <>
        📌　年に数回歌手のキャンペン
        📌　年１発表会
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={imgSrc} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
