import React, { useState, useEffect } from 'react';
import styles from './Table.module.scss';
import { motion } from 'framer-motion';
import Sync from '../assets/refresh.svg';

export default function Table() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setTimeout(() => {
          setIsLoaded(true);
        }, 2000);
      });
  }, [isLoaded]);

  return (
    <div className={styles.Table}>
      {/* <div className={styles.Button}>
        <input type="submit" value="Load Data" onClick={loadData} id="submit" />
      </div> */}

      {isLoaded || (
        <div className={styles.Loader}>
          {/* <h6>Data loading... </h6> */}

          <img
            onClick={() => {
              window.location = '/';
            }}
            src={Sync}
            alt="refresh button"
            className={styles.Refresh}
          />
        </div>
      )}

      <table>
        {isLoaded && (
          <thead>
            <tr className={styles.Header}>
              <th>Name</th>
              <th>Date</th>
              <th>Issue</th>
              <th className={styles.Cell}>Info</th>
            </tr>
          </thead>
        )}

        {isLoaded &&
          Object.values(items).map((item, key) => {
            return (
              <tbody key={key}>
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: 'easeIn',
                    duration: 1,
                    delay: 0.1 * key,
                  }}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.issue}</td>
                  <td>{item.info}</td>
                </motion.tr>
              </tbody>
            );
          })}
      </table>
      {isLoaded && (
        <img
          onClick={() => {
            window.location = '/';
          }}
          src={Sync}
          alt="refresh button"
          className={styles.Refresh}
        />
      )}
    </div>
  );
}
