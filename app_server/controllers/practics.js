const mongoose = require('mongoose');
const practic = mongoose.model('practic');

function sendJsonResponse(res, status, content){
  res.status(status);
  res.json(content);
}

module.exports.getOne = function (req, res, next) {
  practic.findOne({_id: req.params.id}, (err, practic)=>{
    if(err){
      sendJsonResponse(res, 500, err);
      return;
    }
    sendJsonResponse(res, 200, practic);
  });
};

module.exports.getAll = function (req, res, next) {
  practic.find({}, (err, practics)=>{
    if(err){
       sendJsonResponse(res, 500, err);
       return;
    }

    //setTimeout(()=>{
      sendJsonResponse(res, 200, practics);
    //}, 15000);

  });
};

module.exports.createNew = function (req, res, next) {
  practic.create(req.body, (err, createdEx)=>{
    if(err){
      sendJsonResponse(res, 500, err);
      return;
    }
    sendJsonResponse(res, 201, createdEx);
  });
};

module.exports.update = function (req, res, next) {

  practic.findOne({_id: req.params.id}, (err, practic)=>{
    if(err){
      sendJsonResponse(res, 500, err);
      return;
    }

    const allFields = ['name','ruk','student','group','spec','dateStart','dateFinish','mark'];

    allFields.forEach( f => {
      if(req.body[f]){
        practic[f] = req.body[f];
      }
    });

    practic.save((err, practic)=>{
      if(err){
      sendJsonResponse(res, 500, err);
        return;
      }
      sendJsonResponse(res, 201, practic);
    });

  });
};

module.exports.delete = function (req, res, next) {
  practic.deleteOne({_id: req.params.id}, err => {
    if(err){
      sendJsonResponse(res, 500, err);
      return;
    }
    sendJsonResponse(res, 204, null);
  });
};