import React from "react";
import styles from "./SelectList.scss";

const SelectList = props => {
  return (
    <div className={styles.clientList}>
      <label className={styles.label}>
        your client
      </label>
      <i className="material-icons">keyboard_arrow_down</i>
      <select value={props.currentClient} onChange={props.handleClientChange}>
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

export default SelectList;
