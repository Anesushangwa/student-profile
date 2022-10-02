


const validator = require('../user/validate');

const saveContact = (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    firstname: 'required|string',
    lastname: 'required|string',
    email: 'required|email',
    home_adress:'required|string',
    number_subject_registered: 'required|string',
    about:'required|string',
    computer_scince:'required|string',
    Maths:'required|string',
    english:'required|string',
    shona:'required|string',
    wood_work:'required|string',
    date_of_birth:'required|string'
   

  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveContact
};

// module.exports = { userDataValidate };

// const { body } = require("express-validator");

// const userDataValidateChainableAPI = [
//   body("userName")
//     .exists({ checkFalsy: true })
//     .withMessage("User name is required")
//     .isString()
//     .withMessage("User name should be string"),
//   body("password")
//     .exists()
//     .withMessage("Password is required")
//     .isString()
//     .withMessage("Password should be string")
//     .isLength({ min: 5 })
//     .withMessage("Password should be at least 5 characters"),
//   body("email").optional().isEmail().withMessage("Provide valid email"),
//   body("gender")
//     .optional()
//     .isString()
//     .withMessage("Gender should be string")
//     .isIn(["Male", "Female", "Other"])
//     .withMessage("Gender value is invalid"),
//   body("dateOfBirth")
//     .optional()
//     .isDate()
//     .withMessage("DOB should be valid date"),
//   body("phoneNumber")
//     .optional()
//     .isString()
//     .withMessage("phone number should be string")
//     .custom((value) => {
//       if (value.length !== 10) {
//         return Promise.reject("Phone number should be 10 digits");
//       } else {
//         return true;
//       }
//     }),
// ];