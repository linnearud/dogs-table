import React, { Component } from 'react';
import './App.css';
import Reactable from 'reactable';  

class DogsTable extends Component {
  render() {

    var Table = Reactable.Table;
    var Thead = Reactable.Thead;
    var Th = Reactable.Th;
    let rows = this.props.data || []

    return (
      <Table className="table" data={rows} 
        itemsPerPage={25}
        currentPage={0}
        sortable={true}>
        <Thead>
          <Th column="DogName" className="table-column">Dog Name</Th>
          <Th column="LicenseType" className="table-column">License Type</Th>
          <Th column="Breed" className="table-column">Breed</Th>
          <Th column="Color" className="table-column">Color</Th>
        </Thead>
      </Table>  
    );
  }
}

export default DogsTable;