import styles from './App.module.scss';
import Form from './Form/Form';
import Table from './Table/Table';

function App() {
  return (
    <div className={styles.App}>
      <Form />
      <Table />
    </div>
  );
}

export default App;
