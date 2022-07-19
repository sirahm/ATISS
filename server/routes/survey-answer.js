//instance variables
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
module.exports = router;

// connect to our survey answers Model
let Survey = require('../models/survey');

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    res.render('/add', {title: 'Add Survey'})   
  
  });

  // POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
 
    let newSurvey = Survey({
        "SurveyID": req.body.SurveyID,
        "OwnerID": req.body.OwnerID,
        "SurveyName": req.body.SurveyName,
        "EndDate": req.body.EndDate,
        "Active": req.body.Active
    });
  
  
  
    Survey.create(newSurvey, (err, Survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/survey');
        }
    });
  });
  

/* GET Route for the server answers - READ Operation */
router.get('/', (req, res, next) => {
    Survey.find((err, surveyAnswers) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(surveyAnswers);

            res.render('survey', {title: 'Survey Table', SurveyList: surveyAnswers})            
        }
    });
});




  //GET route for displaying the edit page
  router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id;
  
      Survey.findById(id, (err, surveyAnswers) => {
          if(err)
          {
              console.log(err);
              res.end(err);
          }
          else
          {
              //show the edit view
              res.render('/edit', {title: 'Edit Survey', SurveyList: surveyAnswers})   
              
          }
      });
    });  
  
    router.post('/edit/:id', (req, res, next) => {
        let id = req.params.id
      
        let updatedSurvey = Survey({
          "_id": id,
          "SurveyID": req.body.SurveyID,
          "OwnerID": req.body.OwnerID,
          "SurveyName": req.body.SurveyName,
          "EndDate": req.body.EndDate,
          "Active": req.body.Active
          
        });
      
        Survey.updateOne({_id: id}, updatedSurvey, (err) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                // refresh the book list
                res.redirect('/survey');
            }
        });
      });
  
  
  // GET - process the delete by user id
  router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
  
      Survey.remove({_id: id}, (err) => {
          if(err)
          {
              console.log(err);
              res.end(err);
          }
          else
          {
               // refresh the list
               res.redirect('/survey');
          }
      }); 
  
  });