// batch rename
const fs = require('fs');

let dir = __dirname + '/img';

fs.readdir(dir, (err, files) => {
    files.map((file, i) => {
        let oldPathName = `${dir}/${file}`;
        let newPathName = `${dir}/${i}.jpg`;
        fs.rename(oldPathName, newPathName);
    });
});