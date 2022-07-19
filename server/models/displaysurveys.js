//instance variables
let mongoose = require('mongoose');

// create a model class
let displaysurveysModel = mongoose.Schema({
    
    QuestionID: String,
    QuestionType: String,
    QuestionText: String,
    SurveyID: String,
    Favourite: Boolean, 

},
{
    collection: "questions"
});

module.exports = mongoose.model('display-surveys', displaysurveysModel);