import styles from './Title.module.scss';

const Title = (text: { title: string; subTitle: string }) => {
  return (
    <div className={styles.about}>
      <h2 className={styles.about_title}>{text.title}</h2>
      <section className={styles.about_subtitle}>
        <div className={styles.line_left}></div>
        <div className={styles.about_subtitle}>{text.subTitle}</div>
        <div className={styles.line_right}></div>
      </section>
    </div>
  );
};

export default Title;
