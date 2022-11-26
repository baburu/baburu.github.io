import React from "react";
import Title from "./title";
import Footer from "./footer";
import Tooltip from "./nikke-tooltip";
import nikke from "./data/nikke1.json";
import nikke2 from "./data/nikke2.json";
import nikke3 from "./data/nikke3.json";
import nikke4 from "./data/nikke4.json";
import nikke5 from "./data/nikke5.json";
import nikke6 from "./data/nikke6.json";
import { customStyles } from "./data/dataTableCustomStyles";
import DataTable from "react-data-table-component";

const Nikke = () => {
  const columns = [
    {
      id: "Burst",
      name: "Burst",
      grow: 1.5,
      selector: (row) => (
        <img className={row.burstclass} src={require(`${row.burst}`)} />
      ),
    },
    {
      id: "Rating",
      name: "Rating",
      sortable: false,
      center: true,
      grow: 1.5,
      style: {color: "black" },
      selector: (row) => (
        <div className={row.ratingclass}>{row.rating}</div>
      ),
    },
    {
      id: "Nikke",
      name: "Nikke",
      grow: 1.5,
      selector: (row) => (
        <Tooltip nikke={row.nikke} name={row.name}></Tooltip>
      ),
    },
    {
      id: "Weapon",
      name: "Weapon",
      sortable: false,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.weapon,
      cell: (row) => `${row.weapon}`,
    },
    {
      id: "Range",
      name: "Range",
      sortable: false,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.range,
      cell: (row) => `${row.range}`,
    },
    {
      id: "Cooldown",
      name: "Cooldown",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "#56E39F" },
      selector: (row) => row.cooldown,
      cell: (row) => `${row.cooldown}`,
    },
    {
      id: "Charge",
      name: "Charge",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.chargetime,
      cell: (row) => `${row.chargetime}`,
    },
    {
      id: "Shooting Time",
      name: "Shooting Time",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.shootingtime,
      cell: (row) => `${row.shootingtime}`,
    },
    {
      id: "Reload",
      name: "Reload",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.reload,
      cell: (row) => `${row.reload}`,
    },
    {
      id: "Cycle Time",
      name: "Cycle Time",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.cycletime,
      cell: (row) => `${row.cycletime}`,
    },
    {
      id: "Full Charge DMG",
      name: "Full Charge DMG",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.fullchargedmg,
      cell: (row) => `${row.fullchargedmg}`,
    },
    {
      id: "Highest Theor. DPS",
      name: "Highest Theor. DPS",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "tomato" },
      selector: (row) => row.hightheorydps,
      cell: (row) => `${row.hightheorydps}`,
    },
    {
      id: "Gun Type Corr DPS",
      name: "Gun Type Corr DPS",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "orange" },
      selector: (row) => row.guntypecorrdps,
      cell: (row) => `${row.guntypecorrdps}`,
    },
    {
      id: "Full Buff DPS",
      name: "Full Buff DPS",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "orangered" },
      selector: (row) => row.actualdps,
      cell: (row) => `${row.actualdps}`,
    },
    {
      id: "Buff%",
      name: "Buff%",
      sortable: true,
      center: true,
      grow: 1.5,
      style: { color: "burlywood" },
      selector: (row) => row.buff,
      cell: (row) => `${row.buff}`,
    },
    
    
  ];

  const transformField = (field) => {
    if (typeof field != "string") 
        return field;
    else if (field.includes("."))
        return parseFloat(field);
    else
        return parseInt(field);
};

const customSort = (rows, selector, direction) => {
 return rows.sort((rowA, rowB) => {
 
  const aField = transformField(selector(rowA));
  const bField = transformField(selector(rowB));

  let comparison = 0;

  if (aField > bField) {
   comparison = 1;
  } else if (aField < bField) {
   comparison = -1;
  }

  return direction === 'desc' ? comparison * -1 : comparison;
 });
};

  return (
    <div>
      <Title title="NIKKE - EVALUATION CHART" />
      <div className="main-container">
        <DataTable
          columns={columns}
          data={nikke}
          customStyles={customStyles}
          defaultSortAsc={false}
          defaultSortFieldId="Average"
          striped
          sortFunction={customSort}
        />
        <DataTable
          columns={columns}
          data={nikke2}
          customStyles={customStyles}
          defaultSortAsc={false}
          defaultSortFieldId="Average"
          striped
          sortFunction={customSort}
        />
        <DataTable
          columns={columns}
          data={nikke3}
          customStyles={customStyles}
          defaultSortAsc={false}
          defaultSortFieldId="Average"
          striped
          sortFunction={customSort}
        />    
        <DataTable
          columns={columns}
          data={nikke4}
          customStyles={customStyles}
          defaultSortAsc={false}
          defaultSortFieldId="Average"
          striped
          sortFunction={customSort}
        />
        <DataTable
          columns={columns}
          data={nikke5}
          customStyles={customStyles}
          defaultSortAsc={false}
          defaultSortFieldId="Average"
          striped
          sortFunction={customSort}
        />
        <DataTable
          columns={columns}
          data={nikke6}
          customStyles={customStyles}
          defaultSortAsc={false}
          defaultSortFieldId="Average"
          striped
          sortFunction={customSort}
        />                                   
        <Footer />
      </div>
    </div>
  );
};

export default Nikke;
