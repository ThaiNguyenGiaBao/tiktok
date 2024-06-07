import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle
  } from "@fortawesome/free-solid-svg-icons";
function AccountItem({account}) {
  return (
    <div className={styles.account}>
      <div className={styles.avatar}>
        <img src={account.src} alt="avt" className={styles.avatar} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>
          {account.name}
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ marginLeft: 5, color: "rgb(32,213,236)" }}
          />
        </p>
        <p className={styles.bio}>{account.bio}</p>
      </div>
    </div>
  );
}

export default AccountItem;
