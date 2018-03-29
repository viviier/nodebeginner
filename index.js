// simple reptile
const request = require('request');
const cheerio = require('cheerio');
const uuid = require('uuid/v4');
const mkdirp = require('mkdirp');

const fs = require('fs');

let url = 'http://feixinghou454.lofter.com/';
let dirname = __dirname + '/img';

mkdirp(dirname, err => console.log('创建目录成功'));

request.get(url, (err, res, body) => {
    if (!err && res.statusCode === 20) {
        let $ = cheerio.load(body);

        $('.img img').map((i, el) => {
            let src = $(el).attr('src');
            let filename = uuid() + '.jpg';
            downloadImg(src, dirname, filename);
        });
    }
});

// download img
function downloadImg(src, dirname, filename) {
    request.head(src)
        .pipe(fs.createWriteStream(dirname + '/' + filename));
}

