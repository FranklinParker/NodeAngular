const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: [true, ' First Name is required.']
    },
    lastName: {
        type: String,
        required: [true, ' Last Name is required.']
    },
    email: {
        type: String,
        required: [true, ' Last Name is required.']
    }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;

