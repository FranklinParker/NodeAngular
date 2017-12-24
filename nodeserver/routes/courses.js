const router = require('express').Router();


const courseList = [
    {
        courseName: 'US History',
        professor: 'Jill Jones',
        classSchedule: 'Th F 9-11 am'

    },
    {
        courseName: 'Calculus',
        professor: 'Jim Smith',
        classSchedule: 'M W 2-4 PM'

    }];

/**
 * gets all students
 *
 *
 */
router.get('/', function (req, res) {
    res.status(200).json(courseList);

});


module.exports = router;

