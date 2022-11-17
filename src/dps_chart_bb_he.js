import React from "react";
import Title from "./title";
import Footer from "./footer";
import Tooltip from "./tooltip";
import battleshipsHe from "./data/battleshipsHe.json";
import { customStyles } from "./data/dataTableCustomStyles";
import DataTable from "react-data-table-component";

const DPSBattleshipsHE = () => {
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
      id: "Barrage1",
      name: "Barrage 1",
      sortable: true,
      style: { color: "orchid" },
      selector: (row) => row.barrage1,
      cell: (row) => `${row.barrage1.toFixed(1)}`,
    },
    {
      id: "Barrage2",
      name: "Barrage 2",
      sortable: true,
      style: { color: "orchid" },
      selector: (row) => row.barrage2,
      cell: (row) => `${row.barrage2.toFixed(1)}`,
    },
    {
      id: "Total",
      name: "Total",
      sortable: true,
      style: { color: "orchid" },
      selector: (row) => row.total,
      cell: (row) => `${row.total.toFixed(1)}`,
    },
    {
      id: "MainGun",
      name: "Main Gun",
      sortable: true,
      style: { color: "burlywood" },
      selector: (row) => row.mgdps,
      cell: (row) => `${row.mgdps.toFixed(1)}`,
    },
    {
      id: "MainGunAsDmg",
      name: "Main Gun %",
      sortable: true,
      style: { color: "skyblue" },
      selector: (row) => row.mgasdmg,
      cell: (row) => `${row.mgasdmg}`,
    },
    {
      id: "SkillAsDmg",
      name: "Skill %",
      sortable: true,
      style: { color: "skyblue" },
      selector: (row) => row.skillasdmg,
      cell: (row) => `${row.skillasdmg}`,
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
      <Title title="DPS CHART - BATTLESHIPS HE" />
      <div className="main-container">
        <DataTable
          columns={columns}
          data={battleshipsHe}
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

export default DPSBattleshipsHE;
