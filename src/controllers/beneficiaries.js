const diamModel = require('../model/model')





const home = (req, res, next) => {
    res.json("Ayo Solomon,Chinwendu Iheanetu,Micheal Oladipopo presents Sopa-Ereto first place winner at Hack The Mara"
    );
}

const addRanger = (req, res, next) => {

    diamModel.keeperModel.findOne({ name: req.body.name,surname: req.body.surname,middleName:req.body.middleName }, (err, data) => {
        if (!data) {
            const newDiam = new diamModel.keeperModel({
                name:req.body.name,
                surname:req.body.surname,
                middleName:req.body.middleName,
                address:req.body.address,
                phoneNumber:req.body.phoneNumber,
                accountNumber:req.body.accountNumber,
                salary:req.body.salary,

            })

            newDiam.save((err, response) => {
                if (err) return res.json({
                    Error: err
                });
                return res.json({
                    status: 200,
                    "data": response
                });

            })
        } else {
            if (err) return res.json({
                Error: 'something went wrong $err'
            });
            return res.json({
                status: 302,
                data: 'User already exist'
            });

        }
    })
}

const validateRanger = (req, res, next) => {
    diamModel.keeperModel.findOne({  name: req.body.name,surname: req.body.surname,middleName:req.body.middleName }, (err, data) => {
        if (data) {
            return res.json({
                status: 200,
                data: data
            }); } else {
            if (err) return res.json({
                status: 500,
                Error: 'something went wrong $err'
            });
            return res.json({
                status: 404,
                error: 'User not found'
            });

        }
    })

};

const addLandOwner = (req, res, next) => {

    diamModel.findOne({ email: req.body.email }, (err, data) => {
        if (!data) {
            const newDiam = new diamModel({
                email: req.body.email,
                image: req.body.image,
                password: req.body.password,
                donor: req.body.donor

            })

            newDiam.save((err, response) => {
                if (err) return res.json({
                    Error: err
                });
                return res.json({
                    status: 200,
                    "data": response
                });

            })
        } else {
            if (err) return res.json({
                Error: 'something went wrong $err'
            });
            return res.json({
                status: 302,
                data: 'User already exist'
            });

        }
    })
}


module.exports = {
    home,
    addLandOwner,
    addRanger,
    validateRanger

};