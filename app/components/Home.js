import React from 'react'
import { Link } from 'react-router'
import styles from '../styles'

const Home = (props) => {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Github Battle</h1>
      <p className="lead">Some cool moto</p>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-success">Get Started</button>
      </Link>
    </div>
  )
};

export default Home;