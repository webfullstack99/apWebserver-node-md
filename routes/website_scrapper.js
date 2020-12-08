var express = require('express');
var router = express.Router();

const scrape = require('website-scraper');

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
    const  websiteUrl = req.body.url;
    if (websiteUrl) {
        console.log('url', websiteUrl);
        scrape({
            urls: [websiteUrl],
            urlFilter: function (url) {
                return url.indexOf(websiteUrl) === 0;
            },
            recursive: true,
            maxDepth: 50,
            prettifyUrls: true,
            filenameGenerator: 'bySiteStructure',
            directory: './node-website'
        }).then((data) => {
            console.log("Entire website succesfully downloaded");
        }).catch((err) => {
            console.log("An error ocurred", err);
        });
    }
    res.render('index', { title: 'Express' });
});

module.exports = router;
