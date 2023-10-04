const fs = require("fs");

exports.getDataFromFile = (req, res) => {
  fs.readFile(req.body.filename, function (err, data) {
    if (err) {
      res(err);
    } else {
      res.writeHead(200, { "Content-Type": "text" });
      res.write(data);
      return res.end();
    }
  });
};

exports.appendDataToFile = (req, res) => {
  fs.appendFile(req.body.filename, req.body.data, function (err, data) {
    if (err) {
      res(err);
    } else {
      res.writeHead(200, { "Content-Type": "text" });
      res.write("Sucessfully appended");
      return res.end();
    }
  });
};

exports.writeDataToFile = (req, res) => {
  fs.writeFile(req.body.filename, req.body.data, function (err, data) {
    if (err) {
      res(err);
    } else {
      res.writeHead(200, { "Content-Type": "text" });
      res.write("Sucessfully writeFile");
      return res.end();
    }
  });
};

exports.deleteFile = (req, res) => {
  fs.unlink(req.body.filename, function (err, data) {
    if (err) {
      res(err);
    } else {
      res.writeHead(200, { "Content-Type": "text" });
      res.write("Sucessfully deleted");
      return res.end();
    }
  });
};
