import React, { Component, useEffect, useState } from "react";
import "../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// import '../../node_modules/bootstrap/dist/js'

const PaginatorDemo = (props) => {

  const factory = paginationFactory({
    page: 2,
    sizePerPage: 2,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  return (
    <div>
      <div className="container">
        {/* <Spinner animation="border"/>:         */}
        <BootstrapTable keyField="product_id" data={props.data} columns={props.columns} pagination={factory}></BootstrapTable>
      </div>
    </div>
  );
};

export default PaginatorDemo;
