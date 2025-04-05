import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '営業時間',
    imgSrc: require('@site/src/components/Image/150x150_square_52218619.jpg').default,
    description: (
      <>
        月火水木金<br></br>
        午後1時～午後５時<br></br>
        午後7時～午後11時（予約）<br></br>
        <br></br>
        土日・祝日<br></br>
        午前10時～午後５時（予約・レッスン）<br></br>
      </>
    ),
  },
  {
    title: '営業案内',
    imgSrc: require('@site/src/components/Image/150x150_square_52218628.jpg').default,
    description: (
      <>
        カラオケ歌い放題（1,200円）<br></br>
        コーヒー・お茶・ソフトドリンク　⁂1杯付き<br></br>
        おつまみ・お菓子付き
      </>
    ),
  },
  {
    title: '店舗イベント情報',
    imgSrc: require('@site/src/components/Image/150x150_square_52218634.jpg').default,
    description: (
      <>
        カラオケ大会・歌手イベントなど<br></br>
        📌　イベント情報は店にお知らせ一覧をご覧ください。
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
