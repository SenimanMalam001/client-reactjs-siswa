import React, { Component } from "react"
import axios from 'axios'
import { Redirect } from 'react-router'

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
        siswas: [],
        id : parseInt(this.props.match.params.index, 10)
      }
    }

  componentDidMount(){
    console.log(this.state.id)
      axios.delete(`http://localhost:8000/siswa/${this.state.id}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    };

  render() {
      return (
          <Redirect to='/siswa'/>
      );
    }
  }