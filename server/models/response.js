let mongoose = require('mongoose');

// create a model class
const ResponseSchema = new Schema
({
    SurveyID: String,
    Answers:
    {
        QuestionID: String,
        OptionID: String,
        Value: String,
    }
    
},
{
    collection: "responses"
});

// Step 3- Create a Model using the Schema
const Model = mongoose.model("Responses", ResponseSchema);