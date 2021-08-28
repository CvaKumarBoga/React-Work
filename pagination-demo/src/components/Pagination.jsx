import React, { useState } from "react";
import PaginatorDemo from "./PaginatorDemo";

const Pagination = () => {

  const [columns,setColumns] = useState([{dataField:"id",text:"User Id"},{dataField:"name",text:"User Name"},{dataField:"age",text:"Age"}]);
  const [data, setData] = useState([
    { id: "1", name: "abc", age: "23" },
    { id: "2", name: "ads", age: "23" },
    { id: "3", name: "abqwqc", age: "23" },
    { id: "4", name: "abewecvc", age: "23" },
  ]);

  return (
    <div>
    
      <PaginatorDemo columns={columns} data={data}/>;

    </div>
  );
};

export default Pagination;
