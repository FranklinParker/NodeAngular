const router = require('express').Router();
const Student = require('../model/student');
const useDb = require('../useDB').useDb;
const lodash = require('lodash');

const studentList = [{
    _id: '1',
    firstName: 'Jim',
    lastName: 'Smith'

}, {
    _id: '2',
    firstName: 'Jose',
    lastName: 'Cruz'

}, {
    _id: '3',
    firstName: 'Jill',
    lastName: 'Brown'

},
    {
        _id: '4',
        firstName: 'Sanjay',
        lastName: 'Patel'

    }];

/**
 * gets all students
 *
 *
 */
router.get('/', function (req, res) {
    if (useDb) {
        Student.find()
            .exec(function (error, stundents) {
                if (error) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: error
                    });
                }
                console.log("students:" + JSON.stringify(stundents));
                res.status(200).json({
                    message: 'got Students',
                    students: stundents
                });

            });
    } else {
        res.status(200).json({
            message: 'Got Students',
            students: studentList
        });

    }


});

/**
 * update a student
 *
 *
 */
router.post('/update', function (req, res) {
    const id = req.body.id;
    const newStudent = req.body;
    console.log('update: ', id);
    if(useDb){
        Student.findById(id)
            .exec(function (error, student) {
                if(error)
                {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: error
                    });

                } else{
                    student.lastName = newStudent.lastName;
                    student.firstName = newStudent.firstName;
                    student.save();
                    res.status(200).json({
                        message: 'Updated',
                    });

                }
            })

    }else {

        const student = lodash.filter(studentList, {'_id': id});
        console.log('found', student);
        if (student) {
            student.firstName = newStudent.firstName;
            student.lastName = newStudent.lastName;
        }


        res.status(200).json({
            message: 'Updated',
        });
    }


});



router.get('/:id', function (req, res) {
    console.log('id:' + req.params.id);
    const id = req.params.id;
    if (useDb) {
        Student.findById(id)
            .exec(function (error, stundent) {
                if (error) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: error
                    });
                }
                res.status(200).json({
                    message: 'success',
                    student: stundent
                });

            });
    } else {
        findStudent(id, function (student) {
            res.status(200).json({
                message: 'success',
                student: student
            });

        });
    }
});


module.exports = router;

function findStudent(id, callback) {
    studentList.forEach(function (student) {
            if (id == student._id) {
                callback(student);
            }
        }
    );

}