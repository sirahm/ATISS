//instance variables
let mongoose = require('mongoose');

// create a model class
const QuestionSchema = new Schema
({
    
    QuestionID: String,
    QuestionType: String,
    QuestionText: String,
    SurveyID: String,
    OptionCount: Number,    
    
},
{
    collection: "questions"
});

// Step 3- Create a Model using the Schema
const Model = mongoose.model("Questions", QuestionSchema);