import React, { Component } from 'react';
import styles from './Form.module.scss';
import logo from '../assets/logo.png';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeIssue = this.onChangeIssue.bind(this);
    this.onChangeInfo = this.onChangeInfo.bind(this);

    this.state = {
      name: '',
      date: '',
      issue: '',
      info: '',
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeIssue(e) {
    this.setState({
      issue: e.target.value,
    });
  }

  onChangeInfo(e) {
    this.setState({
      info: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const issueSubmit = {
      name: this.state.name,
      date: this.state.date,
      issue: this.state.issue,
      info: this.state.info,
    };

    // console.log('Issue is being submitted - ', issueSubmit);
    axios
      .post('https://personal-mongo.herokuapp.com/issues/add', issueSubmit)
      // .post("http://localhost:5000/trades/add", trade)
      .then((res) => console.log(res.data))
      .catch((err) => console.log('Error caught in promise - ' + err));
  }

  render() {
    return (
      <div className={styles.Container}>
        <img src={logo} alt='getinge logo' />

        <form className={styles.Form} onSubmit={this.onSubmit}>
          <div className={styles.Inputs}>
            <input type='hidden' name='contact_number' />
            <div className={styles.Name}>
              <input
                className={styles.NameInput}
                type='text'
                required
                placeholder=' '
                value={this.state.name}
                onChange={this.onChangeName}
              />
              <label className={styles.NameLabel}>Name</label>
            </div>

            <div className={styles.Name}>
              <input
                className={styles.NameInput}
                type='date'
                required
                placeholder=' '
                // value={new Date().toISOString().slice(0, 10)}
                value={this.state.date}
                onChange={this.onChangeDate}
              />
              <label className={styles.NameLabel}>Date</label>
            </div>

            <div className={styles.Name}>
              <select
                required
                className={styles.NameInput}
                value={this.state.issue}
                onChange={this.onChangeIssue}
              >
                <option>Select an issue</option>
                <option value='office'>Office</option>
                <option value='edc'>EDC</option>
                <option value='factory'>Factory</option>
              </select>
              <label className={styles.NameLabel}>Issue: </label>
            </div>

            <div className={styles.Name}>
              <textarea
                className={styles.NameInput}
                required
                value={this.state.info}
                onChange={this.onChangeInfo}
              />
              <label className={styles.NameLabel}>Info</label>
            </div>
          </div>
          <div className={styles.Button}>
            {/* <ToastContainer
            bodyClassName='toastBody'
            className={styles.Toast}
            style={{
              width: '200px',
              fontSize: '14px',
              padding: '30px',
            }}
          /> */}
            <input type='submit' value='Submit' onChange={this.onSubmit} />
          </div>
        </form>
      </div>
    );
  }
}
