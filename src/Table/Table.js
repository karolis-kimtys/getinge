import React, { useState, useEffect } from 'react';
import styles from './Table.module.scss';
import { motion } from 'framer-motion';
import spinner from '../assets/spinner.svg';

export default function Table() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://personal-mongo.herokuapp.com/issues/`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
      });
  }, [isLoaded]);

  return (
    <div className={styles.Table}>
      {/* <div className={styles.Button}>
        <input type="submit" value="Load Data" onClick={loadData} id="submit" />
      </div> */}

      <table>
        {isLoaded ? (
          <tr className={styles.Header}>
            <th>Name</th>
            <th>Date</th>
            <th>Issue</th>
            <th>Info</th>
          </tr>
        ) : (
          <div className={styles.Spinner}>
            <img src={spinner} alt="loading" />
            <h6>Data loading... </h6>
          </div>
        )}

        {isLoaded &&
          Object.values(items).map((item, key) => {
            return (
              <motion.tr
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: 'easeOut',
                  duration: 2,
                  delay: key / 15,
                }}
              >
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.issue}</td>
                <td>{item.info}</td>
              </motion.tr>
            );
          })}
      </table>
    </div>
  );
}
