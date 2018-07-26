import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

class SiswaList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siswas: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/siswa')
    .then((res)=> {
    console.log(res.data)
    this.setState
    (
      {siswas: res.data.data}
    )
    }).catch(err => console.log(err))
}

    render() {
    return (
      <div className="App" align="center">
      
      {
        this.state.siswas.map((data, index) => {
          return (
            <div className="content" key={index}>
              <h5><Link to={`/siswa/${index}`}>Edit</Link></h5>
            </div>
          )
        })
      }
     </div>
    );
  }
}

export default SiswaList