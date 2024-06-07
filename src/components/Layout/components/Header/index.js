import {
  faCheckCircle,
  faCircleXmark,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { useEffect, useState } from "react";
import Wrapper from "../../../Popper/Wrapper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult(["1"]);
    }, 0);
  }, []);

  const accounts = [
    {
      src: "/avarta.jpg",
      name: " Thai Nguyen Gia Bao",
      bio: "301/1111",
    },
    {
      src: "/avarta.jpg",
      name: " Thai Nguyen Gia Bao",
      bio: "301/1111",
    },
    {
      src: "/avarta.jpg",
      name: " Thai Nguyen Gia Bao",
      bio: "301/1111",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/tik-tok.png" alt="tiktok" style={{ width: 45 }}></img>
        </div>
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => {
            return (
              <div className={styles.searchResult} tabIndex={-1} {...attrs}>
                <Wrapper>
                  <h4 style={{ color: "grey" }}>Accounts</h4>
                  <div className={styles.accountContainer}>
                    {accounts.map((account, index) => {
                      return (
                        <AccountItem
                          account={account}
                          key={index}
                        ></AccountItem>
                      );
                    })}
                  </div>
                </Wrapper>
              </div>
            );
          }}
        >
          <div className={styles.search}>
            <input placeholder="Search"></input>

            <button className={styles.closeButton}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ height: 20, color: "rgba(22, 24, 35, 0.34)" }}
              />
            </button>

            <button className={styles.searchButton}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{
                  width: 24,
                  height: 24,
                  color: "rgba(22, 24, 35, 0.34)",
                }}
              />
            </button>
          </div>
        </Tippy>
        <div className={styles.action}>
          <button className={styles.uploadButton}>
            <FontAwesomeIcon icon={faPlus} style={{marginRight: "10px"}} />
            Upload
          </button>
          <button className={styles.loginButton}>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
