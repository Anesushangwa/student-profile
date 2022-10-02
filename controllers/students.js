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



const newinfo = async (req,res, next) => {
  const newcontact = {
    
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email:req.body.email,
      home_adress:req.body.home_adress,
      number_subject_registered: req.body.number_subject_registered,
      about:req.body.about,
      computer_scince:req.body.computer_scince,
      Maths:req.body.Maths,
      english:req.body.english,
      shona:req.body.shona,
      wood_work:req.body.wood_work,
      date_of_birth:req.body.date_of_birth
  };
  const sendinfo = await mongodb.getDb().db('student_profile').collection('students').insertOne(newcontact);

  try {
    
      res.status(201).json(sendinfo)
  }
  catch (error) {
      res.status(500).json({message: error.message})
  };
}

// if (sendinfo.acknowledged) {
//   res.status(201).json(sendinfo);
// } else {
//   res.status(500).json(sendinfo.error || 'Some error occurred while creating the contact.');
// }
// };

// const updateContact = async (req, res) => {
// const userId = new ObjectId(req.params.id);
// const newcontact= {
  
//   username: req.body.username,
//   firstname: req.body.firstname,
//   lastname: req.body.lastname,
//   email:req.body.email,
//   home_adress:req.body.home_adress,
//   number_subject_registered: req.body.number_subject_registered,
//   about:req.body.about,
//   computer_scince:req.body.computer_scince,
//   Maths:req.body.Maths,
//   english:req.body.english,
//   Shona:req.body.shona,
//   wood_work:req.body.wood_work,
//   date_of_birth:req.body.date_of_birth
  
// };

// // try {
// //   const dataToSave = await data.save();
// //   res.status(200).json(dataToSave)
// // }
// // catch (error) {
// //   res.status(400).json({message: error.message})
// // }
// // });
// // const sendinfo = await mongodb
// // .getDb()
// // .db('anesu')
// // .collection('contacts')
// // .replaceOne({ _id: userId }, newcontact);
// // console.log(sendinfo);
// // if ( sendinfo.modifiedCount > 0) {
// // res.status(204).send();
// // } else {
// // res.status(500).json(sendinfo.error || 'Some error occurred while updating the contact.');
// // }
// // };

// const deleteinfo = async (req, res) => {
//   const userId = new ObjectId(req.params.id);
//   const del = await mongodb.getDb().db('anesu').collection('contacts').deleteOne({ _id: userId }, true);
//   console.log(del);
//   if (del.deletedCount > 0) {
//     res.status(204).send();
//   } else {
//     res.status(500).json(del.error || 'Some error occurred while deleting the contact.');
//   }
// };

const updatestu = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid information id to update for a student.');
  }
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email:req.body.email,
    home_adress:req.body.home_adress,
    number_subject_registered: req.body.number_subject_registered,
    about:req.body.about,
    computer_scince:req.body.computer_scince,
    Maths:req.body.Maths,
    english:req.body.english,
    shona:req.body.shona,
    wood_work:req.body.wood_work,
    date_of_birth:req.body.date_of_birth
    
  };
  const response = await mongodb
    .getDb()
    .db('student_profile')
    .collection('students')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the students.');
  }
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

  module.exports = { getAll, newinfo,updatestu,deleteinfo,getSingle}


