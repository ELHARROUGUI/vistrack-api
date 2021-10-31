const db = require("../models");
const Info = db.info;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.x) {
    res.status(400).send({
      message: "Info content can not be empty!"
    });
    return;
  }

  const info = {
    x: req.body.x,
    y: req.body.y || Date.now()
  };

  Info.create(info)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Info."
      });
    });
};

exports.findAll = (req, res) => {
  const x = req.query.x;
  var condition = x ? { x: { [Op.like]: `%${x}%` } } : null;

  Info.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving infos."
      });
    });
};
