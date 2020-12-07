var express = require('express')
var router = express.Router()

const dateFns = require('date-fns');

const Helper = require('../../my_llibs/helper');
const Post = require('../../app/models/post');
const User = require('../../app/models/user');


// LIST
router.get('/', (req, res, next) => {
    User.find({}, (err, result) => {
        if (!err) Helper.showSuccessResponse(res, result);
        else Helper.showFailResponse(res, err);
    })
})

router.get('/fake', (req, res, next) => {
    User.deleteMany({}, (err) => {
        if (!err) {
            User.insertMany([
                {
                    username: 'peteranh',
                    fullName: 'Tran Hoang Anh',
                },
                {
                    username: 'thuytien',
                    fullName: 'Dinh Thuy Tien',
                },
                {
                    username: 'hongtruc',
                    fullName: 'Nguyen Hiep Hong Truc',
                },
            ], (err, result) => {
                if (!err) Helper.showSuccessResponse(res, result)
                else Helper.showFailResponse(res, err);
            })
        } else Helper.showFailResponse(err);
    })
})

module.exports = router;