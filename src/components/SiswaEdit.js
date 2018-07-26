import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
        siswas: [],
        id : parseInt(this.props.match.params.index, 10),
        nama: '',
        gender: '',
        no_telp: '',
        Redirect: false
      }
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ nama : event.target.value });
  }
  
  handleChange2 = event => {
    this.setState({ gender: event.target.value });

  }

  handleChange3 = event => {
    this.setState({ no_telp: event.target.value });
  }


  handleSubmitEdit = event => {
    const inputEdit = {
        nama: this.state.nama,
        gender: this.state.gender,
        no_telp: this.state.no_telp
    }

    axios.put(`http://localhost:8000/siswa/${this.state.id}`, inputEdit)
      .then(res => {
        this.setState({ redirect: true });
        console.log(res.data);
      })
      event.preventDefault()
  }


  componentDidMount(){
    console.log(this.state.id)
      axios.get(`http://localhost:8000/siswa/${this.state.id}`)
      .then(response => {
        console.log(response.data.data.nama)
        this.setState({ 
                        nama: response.data.data.nama,
                        gender: response.data.data.gender,
                        no_telp: response.data.data.no_telp
                      });

      })
      .catch(function (error) {
        console.log(error);
      })
    }


    render() {
     const { redirect } = this.state;
     if (redirect) {
       return <Redirect to='/siswa'/>;
     }
      return (
        <form onSubmit={this.handleSubmitEdit}>
          <div className="form-group">
              <label> Nama Siswa:</label>
              <input type="text" name="nama" value={this.state.nama} className="form-control" onChange={this.handleChange} />
          </div>
          
          <div className="form-group">
              <label> Gender:</label>
              <input type="text" value={this.state.gender} name="gender" className="form-control" onChange={this.handleChange2} />
          </div>

          <div className="form-group">
              <label> No. Telp:</label>
              <input type="text" value={this.state.no_telp} name="no_telp" className="form-control" onChange={this.handleChange3} />
          </div>

          <div className="form-group">
              <input type="submit" value="Ubah" className="btn btn-primary"/>
          </div>
        </form>
      );
    }
  }