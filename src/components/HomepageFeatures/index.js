import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Instant Feedback',
    Png: require('@site/static/img/play.png').default,
    description: (
      <>
        UI-Labs features a <b>Hot-Reloader</b> that detects and updates your changes in real time.
        Forget about having to run Studio everytime you modify your UI.
      </>
    ),
  },
  {
    title: 'Controls',
    Png: require('@site/static/img/controls.png').default,
    description: (
      <>
        Set custom controls to change your UI's properties without needing to change your code
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With support for {<a href='https://flipbook-labs.github.io/flipbook/'>Flipbook</a>} and {<a href='https://www.roblox.com/library/4621580428/Hoarcekat'>Hoarcekat</a>}
        , Bring your existing stories and storybooks over to UI-Labs
      </>
    ),
  },
];

function Feature({Svg, Png, title, description}) {
   return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
         {Svg? <Svg className={styles.featureSvg} role="img" />: 
         Png? <img className={styles.featureSvg} src={Png} role="img" />: undefined}
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
