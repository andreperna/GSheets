const readGsheet = require("./readGsheet");

const createTable = async (url) => {
    const objCells = await readGsheet(url);
    let innerTable = "";
    for (const key in objCells) {
        innerTable += "<tr>";
        for (const item of objCells[key]) {
            innerTable += `<td> ${item} </td>`;
        }
        innerTable += "</tr>";
    }
    return innerTable;
};

module.exports = createTable;
