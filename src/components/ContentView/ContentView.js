import React from "react";
import styles from "./ContentView.scss";

const ContentView = props => {
  return (
    <div className={styles.contentWrapper}>
        {props.children}
    </div>
  );
};

export default ContentView;
