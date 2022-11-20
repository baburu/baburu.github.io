import React from "react";
import Title from "./title";
import Footer from "./footer";
import Tooltip from "./tooltip";
import aircraftCarriers from "./data/aircraftCarriers.json";
import { customStyles } from "./data/dataTableCustomStyles";
import DataTable from "react-data-table-component";

const DPSAircraftCarriers = () => {
  const columns = [
    {
      id: "Ship",
      name: "Ship",
      width: "90px",
      selector: (row) => (
        <Tooltip ship={row.ship} description={row.description}></Tooltip>
      ),
    },
    {
      id: "Slot1",
      name: "Slot 1",
      width: "90px",
      selector: (row) => (
        <img className={row.slot1Class} src={require(`${row.slot1}`)} />
      ),
    },
    {
      id: "Slot2",
      name: "Slot 2",
      width: "90px",
      selector: (row) => (
        <img className={row.slot2Class} src={require(`${row.slot2}`)} />
      ),
    },
    {
      id: "Slot3",
      name: "Slot 3",
      width: "90px",
      selector: (row) => (
        <img className={row.slot3Class} src={require(`${row.slot3}`)} />
      ),
    },
    {
      id: "Slot1AsDmg",
      name: "Slot 1",
      width: "90px",
      sortable: true,
      center: true,
      style: { color: "skyblue" },
      selector: (row) => row.slot1AsDmg,
      cell: (row) => `${row.slot1AsDmg}`,
    },
    {
      id: "Slot2AsDmg",
      name: "Slot 2",
      width: "90px",
      sortable: true,
      center: true,
      style: { color: "skyblue" },
      selector: (row) => row.slot2AsDmg,
      cell: (row) => `${row.slot2AsDmg}`,
    },
    {
      id: "Slot3AsDmg",
      name: "Slot 3",
      width: "90px",
      sortable: true,
      center: true,
      style: { color: "skyblue" },
      selector: (row) => row.slot3AsDmg,
      cell: (row) => `${row.slot3AsDmg}`,
    },
    {
      id: "Skill",
      name: "Skill",
      width: "90px",
      sortable: true,
      center: true,
      style: { color: "orchid" },
      selector: (row) => row.skilldps,
      cell: (row) => `${row.skilldps.toFixed(1)}`,
    },
    {
      id: "DoT",
      name: "Dot",
      width: "90px",
      sortable: true,
      style: { color: "crimson" },
      selector: (row) => row.dotdps,
      cell: (row) => `${row.dotdps.toFixed(1)}`,
    },
    {
      id: "Light",
      name: "Light",
      width: "90px",
      sortable: true,
      style: { color: "lightgrey" },
      selector: (row) => row.lightdps,
      cell: (row) => `${row.lightdps}`,
    },
    {
      id: "Medium",
      name: "Medium",
      width: "90px",
      sortable: true,
      style: { color: "orange" },
      selector: (row) => row.mediumdps,
      cell: (row) => `${row.mediumdps}`,
    },
    {
      id: "Heavy",
      name: "Heavy",
      width: "90px",
      sortable: true,
      style: { color: "tomato" },
      selector: (row) => row.heavydps,
      cell: (row) => `${row.heavydps}`,
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
      <Title title="NIKKE - EVALUATION CHART" />
      <div className="main-container">
        <DataTable
          columns={columns}
          data={aircraftCarriers}
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

export default DPSAircraftCarriers;
