import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';

function App2() {

  const products = [
    { id: 1, name: 'George', animal: 'Monkey' },
    { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
    { id: 3, name: 'Alice', animal: 'Giraffe' },
    { id: 4, name: 'Alice', animal: 'Tiger' }
  ];

  const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'animal', text: 'Animal', sort: true }
  ];

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  return (
    <div className="App">
      <h5>React Bootstrap Table Next with Sorting</h5>

      <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} />
    </div>
  );
}

export default App2;