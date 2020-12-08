class Helper {
    static showSuccessResponse(res, data, message) {
        res.status(200);
        let resObj = {
            status: 'success', data,
        }
        if (message) resObj.message = message;
        res.json(resObj);
    }

    static showFailResponse(res, message) {
        res.status(500);
        let resObj = {
            status: 'fail',
        }
        if (message) resObj.message = message;
        res.json(resObj);
    }

    static showNotFoundResponse(res, message) {
        res.status(404);
        let resObj = {
            status: 'fail',
            message: 'Not found',
        }
        if (message) resObj.message = message;
        res.json(resObj);
    }
};

module.exports = Helper;