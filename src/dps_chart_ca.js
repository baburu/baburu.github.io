import React from "react";
import Title from "./title";
import Footer from "./footer";
import Tooltip from "./tooltip";
import heavyCruisers from "./data/heavyCruisers.json";
import { customStyles } from "./data/dataTableCustomStyles";
import DataTable from "react-data-table-component";

const DPSHeavyCruisers = () => {
  const columns = [
    {
      id: "Ship",
      name: "Ship",
      selector: (row) => (
        <Tooltip ship={row.ship} description={row.description}></Tooltip>
      ),
    },
    {
      id: "Slot1",
      name: "Slot 1",
      selector: (row) => (
        <img className={row.slot1Class} src={require(`${row.slot1}`)} />
      ),
    },
    {
      id: "MainGun",
      name: "Main Gun %",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.mgdps,
      cell: (row) => `${row.mgdps.toFixed(1)}`,
    },
    {
      id: "Torpedo",
      name: "Torpedo %",
      sortable: true,
      grow: 1.5,
      style: { color: "mediumspringgreen" },
      selector: (row) => row.torpdps,
      cell: (row) => `${row.torpdps.toFixed(1)}`,
    },
    {
      id: "Barrage",
      name: "Barrage %",
      sortable: true,
      grow: 1.5,
      style: { color: "orchid" },
      selector: (row) => row.barragedps,
      cell: (row) => `${row.barragedps.toFixed(1)}`,
    },
    {
      id: "Light",
      name: "Light",
      sortable: true,
      style: { color: "lightgrey" },
      selector: (row) => row.lightdps,
      cell: (row) => `${row.lightdps.toFixed(1)}`,
    },
    {
      id: "Medium",
      name: "Medium",
      sortable: true,
      style: { color: "orange" },
      selector: (row) => row.mediumdps,
      cell: (row) => `${row.mediumdps.toFixed(1)}`,
    },
    {
      id: "Heavy",
      name: "Heavy",
      sortable: true,
      style: { color: "tomato" },
      selector: (row) => row.heavydps,
      cell: (row) => `${row.heavydps.toFixed(1)}`,
    },
    {
      id: "Average",
      name: "Average",
      sortable: true,
      style: { color: "orangered" },
      selector: (row) => row.avgdps,
      cell: (row) => `${row.avgdps.toFixed(1)}`,
    },
  ];

  return (
    <div>
      <Title title="DPS CHART - HEAVY CRUISERS" />
      <div className="main-container">
        <DataTable
          columns={columns}
          data={heavyCruisers}
          customStyles={customStyles}
          defaultSortAsc={false}
          defaultSortFieldId="Average"
          striped
        />
        <Footer />
      </div>
    </div>
  );
};

export default DPSHeavyCruisers;
