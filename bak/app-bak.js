const fetch = require("node-fetch");

//----------- função para listar arrayFinal
const listarArray = (obj) => {
  //células com valores
  const cellValues = obj.map((x) => {
    return x["gs$cell"];
  });

  //lista de indices
  const arrayIndex = cellValues.map((x) => x.row);

  //lista de valores
  const arrayValues = cellValues.map((x) => x.inputValue);

  //cria a arrayFinal
  const arrayIndex_last = arrayIndex[arrayIndex.length - 1];
  const arrayFinal = {};
  for (let index = 0; index < arrayIndex_last; index++) {
    arrayFinal[index + 1] = [];
  }

  //preenche o arrayFinal
  for (let index = 0; index < arrayIndex.length; index++) {
    arrayFinal[arrayIndex[index]].push(arrayValues[index]);
  }

  //   console.log(arrayFinal);
  return arrayFinal;
};

//----------- função para ler página
const readPage = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const objeto = json.feed.entry;
      listarArray(objeto);
    });
};

const url =
  "https://spreadsheets.google.com/feeds/cells/1iEJVOKNXAeVaC2H_F27Tjk-FwkR2s27SR31V-Xga95U/1/public/full?alt=json";

(async () => {
  console.log(await readPage(url));
})();
