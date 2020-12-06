const router = require("express").Router();
const CV = require('../models/CV')

router.get('/', async(req, res) => {
    await CV.find({}).then(data => {
        res.json(data)
    })

});

router.post('/add/:id', async(req, res) => {
    let id = req.params.id;
    let newS = CV({
        userId: id,
        fName: req.body.fName,
        lName: req.body.lName,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        linkedIn: req.body.linkedIn,
        socialMedia: req.body.socialMedia,
        objective: req.body.objective,
        experiences: req.body.experiences,
        educations: req.body.educations,
        skills: req.body.skills,
        languges: req.body.languges,
        certifications: req.body.certifications,
    }).save().then(data => {
        console.log(data)
        return res.json(data)
    })

})
module.exports = router;