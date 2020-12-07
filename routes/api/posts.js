var express = require('express')
var router = express.Router()

const dateFns = require('date-fns');

const Helper = require('../../my_llibs/helper');
const Post = require('../../app/models/post');
const User = require('../../app/models/user');


// LIST
router.get('/', (req, res, next) => {
    Post.find({}, (err, result) => {
        if (!err) Helper.showSuccessResponse(res, result);
        else Helper.showFailResponse(res, err);
    })
})


// CREATE
router.post('/', (req, res, next) => {
    const { title, description, userId } = req.body.post;
    let params = {
        created: new Date().toISOString(),
        reactions: {},
        title,
        description,
        userId
    }
    new Post(params).save()
        .then((result) => {
            if (result) Helper.showSuccessResponse(res, result)
            else Helper.showFailResponse(res);
        })

})

// PUT
router.put('/:id', (req, res, next) => {
    let doc = req.body.post;
    Post.updateOne(
        { _id: req.params.id }, doc,
        (err, result) => {
            if (!err) Helper.showSuccessResponse(res, doc);
            else Helper.showFailResponse(res, err);
        })
})

router.put('/addReactions/:id', (req, res, next) => {
    const { reactions } = req.body;
    console.log(req.params.id, reactions)
    Post.updateOne(
        { _id: req.params.id }, { reactions },
        (err) => {
            if (!err) Helper.showSuccessResponse(res, { _id: req.params.id, reactions });
            else Helper.showFailResponse(res, err);
        })
})

// DELETE
router.delete('/:id', (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }, (err) => {
        if (err) Helper.showFailResponse(res);
        else Helper.showSuccessResponse(res);
    })
})

// FAKE
router.get('/fake', (req, res, next) => {
    Post.deleteMany({}, (err) => {
        if (!err) {
            Post.insertMany([
                {
                    title: 'Nha gia kim',
                    description: 'Nha gia kim description',
                    created: dateFns.sub(new Date(), { minutes: 10 }).toISOString(),
                    userId: '5fccbc01d1e2d02154dac4aa',
                    reactions: {},

                },
                {
                    title: 'Tiem tap hoa Namiya',
                    description: 'Tiem tap hoa Namiya description',
                    created: dateFns.sub(new Date(), { minutes: 10 }).toISOString(),
                    userId: '5fccbc01d1e2d02154dac4aa',
                    reactions: {},
                },
                {
                    title: 'Naoko',
                    description: 'Naoko description',
                    created: dateFns.sub(new Date(), { minutes: 10 }).toISOString(),
                    userId: '5fccbc01d1e2d02154dac4aa',
                    reactions: {},
                },
                {
                    title: 'Phia sau nghi can X',
                    description: 'Phia sau nghi can X description',
                    created: dateFns.sub(new Date(), { minutes: 10 }).toISOString(),
                    userId: '5fccbc01d1e2d02154dac4aa',
                    reactions: {},
                },
            ], (err, result) => {
                if (!err) Helper.showSuccessResponse(res, result)
                else Helper.showFailResponse(res, err);
            })
        } else Helper.showFailResponse(err);
    })
})

module.exports = router;