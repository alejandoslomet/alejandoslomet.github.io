// // Reading the contact form data
// var fields = {};

// document.addEventListener("DOMContentLoaded", function() {
//     fields.name = document.getElementById('form-getintouch-fullname');
//     fields.email = document.getElementById('form-getintouch-email');
//     fields.affiliation = document.getElementById('form-getintouch-affiliation');
//     fields.question = document.getElementById('form-getintouch-que_com');
//     fields.file = document.getElementById('form-getintouch-att_fil');
//     fields.newsletter = document.getElementById('form-getintouch-mai_lis');
// })

// // Validating the contact form data
// function isNotEmpty(value) {
//     if (value == null || typeof value == 'undefined' ) return false;
//     return (value.length > 0);
// }

// function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
// }

// function fieldValidation(field, validationFunction) {
//     if (field == null) return false;
   
//     let isFieldValid = validationFunction(field.value)
//     if (!isFieldValid) {
//         field.className = 'placeholderRed';
//     } else {
//         field.className = '';
//     }
   
//     return isFieldValid;
// }

// function isValid() {
//     var valid = true;
    
//     valid &= fieldValidation(fields.name, isNotEmpty);
//     // valid &= fieldValidation(fields.email, isNotEmpty);
//     // valid &= fieldValidation(fields.affiliation, isNotEmpty);
//     // valid &= fieldValidation(fields.question, isNotEmpty);
//     // valid &= fieldValidation(fields.file, isNotEmpty);
//     // valid &= fieldValidation(fields.email, isEmail);
//     // valid &= fieldValidation(fields.newsletter, isNotEmpty);
   
//     return valid;
// }

// // Creating user 
// class User {
//     constructor(name, email, affiliation, question, file, newsletter) {
//         this.name = name;
//         this.email = email;
//         this.affiliation = affiliation;
//         this.question = question;
//         this.file = file;
//         this.newsletter = newsletter;
//     }
// }

// // Sending contact form data
// function sendContact() {
//     console.log(fields.name);

//     if (isValid()) {
//         let usr = new User(name.value, email.value, affiliation.value, question.value, file.value, newsletter.value);

//         alert('${usr.name} thank you for getting in touch with us.' )
//     } else {
//         alert('There was an error')
//     }
// }