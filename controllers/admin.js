const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;
// const {userDataValidate} = require("../validation/user.validation");

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('student_profile').collection('students').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('student_profile')
    .collection('students')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const deleteinfo = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid student id to delete a student.');
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('student_profile').collection('students').remove({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the student.');
    };
  }

module.exports = { getAll,deleteinfo,getSingle}

// newinfo,updatestu