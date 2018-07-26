import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom'

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
        siswas: [],
      };
    }

    componentDidMount(){
      axios.get('http://localhost:8000/siswa')
      .then(response => {
        this.setState({ siswas: response.data.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    tabRow(){
        return this.state.siswas.map(function(object, index){
            return <TableRow obj={object} key={index} />;            
        });
    }

    render() {
      return (
        <div className="container">
            <Link className="btn btn-primary" to="/siswa/create" style={{ marginBottom: 10}} ><i className="fas fa-plus"></i> Tambah</Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Nama</td>
                  <td>Gender</td>
                  <td>No. Telp</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }