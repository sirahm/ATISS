//instance variables
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
module.exports = router;

// connect to our survey answers Model
let Survey = require('../models/displaysurveys');


/* GET Route for the server answers - READ Operation */
router.get('/', (req, res, next) => {
    Survey.find((err, surveyQuestions) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(surveyAnswers);

            res.render('displaysurveys', { title: 'Survey Questions', SurveyQ: surveyQuestions })            
        }
    });
});


