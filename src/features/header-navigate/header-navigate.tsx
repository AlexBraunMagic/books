import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATE_LINKS } from 'shared/consts';
import styles from './style.module.css';

export const HeaderNavigate: FC = () => {
  return (
    <ul className={styles.navigateWrapper}>
      {NAVIGATE_LINKS.map((item, index) => {
        return (
          <li
            key={`${item.linkText}-${index}-${item.pathName}`}
            className={styles.navigateLinkWrapper}
          >
            <Link to={item.pathName} className={styles.navigateLinkText}>
              {item.linkText}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
