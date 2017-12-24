const mysql = require('mysql');
var connection;

/**
 *
 *
 *
 */

function connectToDb() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'node'
    });
    connection.connect(function (err) {


        if (err) {
            console.log(err);
            throw err;

        }
        console.log('connect successfull - correct place ');


    });
    //'select count(*) as numberStudents from student.js
    connection.query('select count(*) as numberStudents from students', function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        }
    );


}

module.exports.queries = {
    findAllStudents: function (callback) {
        connection.query('select * from students', function (error, records) {
            if (error || !records) {
                callback('Error getting students')
            } else {
                const studentRecords = [];
                records.forEach(record => studentRecords.push({
                    id: record.id,
                    firstName: record.first_name,
                    lastName: record.last_name,
                    email: record.email
                })
            )
                ;
                callback(error, studentRecords);
            }
        });

    },
    findByid: function (id, callback) {
        connection.query('select * from students where id = ' + id, function (error, record) {
                if (!error && record && record.length > 0) {
                    callback(error,
                        {
                            id: record[0].id,
                            firstName: record[0].first_name,
                            lastName: record[0].last_name,
                            email: record[0].email
                        });
                } else {
                    callback('No Record Found');
                }
            }
        );

    }
}


module.exports.connectToDb = connectToDb;
