const fs = require('fs');

exports.getDataFromFile = (req, res) => {
    fs.readFile('HtmlFile.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })

}