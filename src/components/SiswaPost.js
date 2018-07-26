import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'

class SiswaPost extends Component {
  state = {
    nama: '',
    gender: '',
    no_telp: '',
    Redirect: false
  }

  handleChange = event => {
    this.setState({ nama: event.target.value });
  }
	
  handleChange2 = event => {
    this.setState({ gender: event.target.value });
  }

  handleChange3 = event => {
    this.setState({ no_telp: event.target.value });
  }

  handleSubmit = event => {
    const input = {
        nama: this.state.nama,
        gender: this.state.gender,
        no_telp: this.state.no_telp
    }

    axios.post(`http://localhost:8000/siswa/create`, input)
      .then(res => {
        this.setState({ redirect: true });
        console.log(res.data);
      })
      event.preventDefault()
  }

  render() {
    const { redirect } = this.state;
     if (redirect) {
       return <Redirect to='/siswa'/>;
     }

    return (
      <div style={{marginTop: 20}}> 
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label> Nama Siswa:</label>
              <input type="text" name="nama" className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label> Gender : </label>
              <input type="text" name="gender" className="form-control" onChange={this.handleChange2} />
          </div>
          <div className="form-group">
              <label> No. Telp : </label>
              <input type="text" name="no_telp" className="form-control" onChange={this.handleChange3} />
          </div>
          <div className="form-group">
              <input type="submit" value="Simpan" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SiswaPost
