import React from "react";
import styles from "./clientList.scss";

const clientList = props => {
  return (
    <div className={styles.clientList}>
      <i className="material-icons">keyboard_arrow_down</i>
      <select value={props.currentClient} onChange={props.handleChange}>
        <option value="" disabled selected>
          Choose your client...
        </option>
        {props.clients.map(item => (
          <option value={item.client} key={item.id}>
            {item.client}
          </option>
        ))}
      </select>
      {console.log("clients name", props.clients[0].client)}
    </div>
  );
};

export default clientList;
