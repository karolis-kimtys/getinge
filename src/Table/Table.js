import React, { useState } from 'react';
import styles from './Table.module.scss';

export default function Table() {
  const [items, setItems] = useState([]);
  const loadData = () => {
    fetch(`https://personal-mongo.herokuapp.com/issues/`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        // setTableOpen(!tableOpen);
        // setIsLoaded(true);
      });
  };
  return (
    <div className={styles.Table}>
      <div className={styles.Button}>
        <input type="submit" value="Load Data" onClick={loadData} id="submit" />
      </div>

      <table>
        <tr className={styles.Header}>
          <th>Name</th>
          <th>Date</th>
          <th>Issue</th>
          <th>Info</th>
        </tr>

        {Object.values(items).map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.issue}</td>
              <td>{item.info}</td>
              <br />
            </tr>
          );
        })}
      </table>
    </div>
  );
}
