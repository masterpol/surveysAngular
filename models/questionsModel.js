Home.service("questionsModel", function(){

        this.setSurveyCommonAsk = function(){ 
            return [
                {
                    value : "Full name",
                    type : "text",
                    required : "required",
                    name : "names",
                    placeholder : "Enter yor name"
                },
                {
                    value : "email",
                    type : "email",
                    name : "email",
                    required : "required",
                    placeholder : "Enter yor email"
                },
                {
                    value : "You like star wars?",
                    type : "text",
                    name : "you_like",
                    required : "required",
                    placeholder : "Enter yor answser"
                },
                {
                    value : "What are your skills?",
                    type : "text",
                    name : "you_can",
                    required : "required",
                    placeholder : "Enter yor answser"
                },
                {
                    value : "if you had a power which will?",
                    type : "text",
                    name : "you_wish",
                    required : "",
                    placeholder : "Enter yor answser"
                }]
        }; 
});    