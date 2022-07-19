//instance variables
let mongoose = require('mongoose');

// create a model class
const OptionSchema = new Schema
({
    
    OptionID: String,
    OptionText: String,
    OptionValue: Number,
    QuestionID: String,
    
},
{
    collection: "options"
});

// Step 3- Create a Model using the Schema
const Model = mongoose.model("Options", OptionSchema);