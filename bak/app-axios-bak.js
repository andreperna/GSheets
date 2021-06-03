const axios = require("axios").default;
const { config } = require("../config/config");

// console.log(config.url);

const readGsheet = (url) => {
  axios
    .get(url)
    .then((res) => console.log(groupBy(res.data.feed.entry, "row")))
    .catch((err) => console.log(err));
};

readGsheet(config.url);

const obj = [
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R1C1",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "A1" },
    content: { type: "text", $t: "Item" },
    link: [[Object]],
    gs$cell: { row: "1", col: "1", inputValue: "Item", $t: "Item" },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R1C2",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "B1" },
    content: { type: "text", $t: "Descrição" },
    link: [[Object]],
    gs$cell: { row: "1", col: "2", inputValue: "Descrição", $t: "Descrição" },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R1C3",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "C1" },
    content: { type: "text", $t: "Valor" },
    link: [[Object]],
    gs$cell: { row: "1", col: "3", inputValue: "Valor", $t: "Valor" },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R2C1",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "A2" },
    content: { type: "text", $t: "1" },
    link: [[Object]],
    gs$cell: {
      row: "2",
      col: "1",
      inputValue: "1",
      numericValue: "1.0",
      $t: "1",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R2C2",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "B2" },
    content: { type: "text", $t: "Cadeira" },
    link: [[Object]],
    gs$cell: { row: "2", col: "2", inputValue: "Cadeira", $t: "Cadeira" },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R2C3",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "C2" },
    content: { type: "text", $t: "10" },
    link: [[Object]],
    gs$cell: {
      row: "2",
      col: "3",
      inputValue: "10",
      numericValue: "10.0",
      $t: "10",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R3C1",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "A3" },
    content: { type: "text", $t: "2" },
    link: [[Object]],
    gs$cell: {
      row: "3",
      col: "1",
      inputValue: "2",
      numericValue: "2.0",
      $t: "2",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R3C2",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "B3" },
    content: { type: "text", $t: "Mesa" },
    link: [[Object]],
    gs$cell: { row: "3", col: "2", inputValue: "Mesa", $t: "Mesa" },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R3C3",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "C3" },
    content: { type: "text", $t: "20" },
    link: [[Object]],
    gs$cell: {
      row: "3",
      col: "3",
      inputValue: "20",
      numericValue: "20.0",
      $t: "20",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R4C1",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "A4" },
    content: { type: "text", $t: "3" },
    link: [[Object]],
    gs$cell: {
      row: "4",
      col: "1",
      inputValue: "3",
      numericValue: "3.0",
      $t: "3",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R4C2",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "B4" },
    content: { type: "text", $t: "Computador" },
    link: [[Object]],
    gs$cell: {
      row: "4",
      col: "2",
      inputValue: "Computador",
      $t: "Computador",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R4C3",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "C4" },
    content: { type: "text", $t: "30" },
    link: [[Object]],
    gs$cell: {
      row: "4",
      col: "3",
      inputValue: "30",
      numericValue: "30.0",
      $t: "30",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R5C1",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "A5" },
    content: { type: "text", $t: "4" },
    link: [[Object]],
    gs$cell: {
      row: "5",
      col: "1",
      inputValue: "4",
      numericValue: "4.0",
      $t: "4",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R5C2",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "B5" },
    content: { type: "text", $t: "teclado" },
    link: [[Object]],
    gs$cell: { row: "5", col: "2", inputValue: "teclado", $t: "teclado" },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R5C3",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "C5" },
    content: { type: "text", $t: "40" },
    link: [[Object]],
    gs$cell: {
      row: "5",
      col: "3",
      inputValue: "40",
      numericValue: "40.0",
      $t: "40",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R7C1",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "A7" },
    content: { type: "text", $t: "5" },
    link: [[Object]],
    gs$cell: {
      row: "7",
      col: "1",
      inputValue: "5",
      numericValue: "5.0",
      $t: "5",
    },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R7C2",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "B7" },
    content: { type: "text", $t: "teste" },
    link: [[Object]],
    gs$cell: { row: "7", col: "2", inputValue: "teste", $t: "teste" },
  },
  {
    id: {
      $t: "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full/R7C3",
    },
    updated: { $t: "2021-06-02T13:43:38.601Z" },
    category: [[Object]],
    title: { type: "text", $t: "C7" },
    content: { type: "text", $t: "50" },
    link: [[Object]],
    gs$cell: {
      row: "7",
      col: "3",
      inputValue: "50",
      numericValue: "50.0",
      $t: "50",
    },
  },
];

// const filterRow = obj.map((x) => x["gs$cell"].row);
// const filterValue = obj.map((x) => x["gs$cell"].inputValue);

const groupBy = (objArray, property) => {
  const filterCells = objArray.map((x) => x["gs$cell"]);
  const groupObj = filterCells.reduce((acc, cur) => {
    const key = cur[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cur.inputValue);
    return acc;
  }, {});
  return groupObj;
};

// console.log(groupBy(obj, "row"));
