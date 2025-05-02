import styles from './ContentWrapper.module.css';

const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.contentWrapper}>{children}</div>;
};

export { ContentWrapper };
