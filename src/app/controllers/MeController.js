const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((course) => {
                res.render('me/stored-Courses', {
                    course: multipleMongooseToObject(course),
                })
            })
            .catch(next)
    }
}

module.exports = new MeController()
