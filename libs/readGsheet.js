const axios = require("axios").default;

const readGsheet = (url) =>
    new Promise((resolve, reject) => {
        axios
            .get(url)
            .then((res) => resolve(groupBy(res.data.feed.entry, "row")))
            .catch((err) => reject(err));
    });

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

module.exports = readGsheet;
