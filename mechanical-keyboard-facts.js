'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = app.id;
var SKILL_NAME = 'Mechanical Keyboard Facts';

/**
 * Array containing mechanical keyboard facts.
 */
var FACTS = [
    "Mechanical keyboards are available with many different types of switches. The Most Common are: Red, Blue, Green, Brown, Black, and Clear.",
    "Mechancial Keyboards with linear switches are Red and Black.",
    "Mechancial Keyboards with tactile or clicky switches are blues, browns, and greens.",
    "Mechanical keyboards differ from rubber dome keyboards by using actual, physical switches underneath the keys to determine when a key is activated.",
    "One of the Most Expensive Mechanical Keyboards sold was the Japanese HP Happy Hacking Keyboard Price for $4400.",
    "Red switches are normally the preferred switch for gamering.",
    "Red switches commonly require an actuation force of 45 grams.",
    "Blue switches commonly require an actuation force of 60 grams.",
    "Green switches commonly require an actuation force of 80 grams.",
    "Brown switches commonly require an actuation force of 45 grams.",
    "Black switches commonly require an actuation force of 50 grams.",
    "There are various types of switch types like cherry mx, or kalilth",
    "The IBM model M is known as an iconic mechanical keyboard"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the mechanical keyboard facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a mechanical keyboard fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
