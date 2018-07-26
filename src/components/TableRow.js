import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.nama}
          </td>
          <td>
            {this.props.obj.gender}
          </td>
          <td>
            {this.props.obj.no_telp}
          </td>                          
           <td>
              <div className="btn-toolbar pull-right">
                   <Link className="btn btn-primary" to={`/siswa/edit/${this.props.obj.id}`}>Edit</Link>
                    <Link to={`/siswa/delete/${this.props.obj.id}`} className="btn btn-danger">Delete</Link>
              </div>
          </td>
        </tr>
    );
  }
}

export default TableRow;