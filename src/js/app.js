// Your code goes here

var facts = ["Turtles can breathe out of their anus."
,"A human's eyes never grow from the day they were born."
,"Hay gente en los arboles."
,"Me gusta la escuela de Penn State."
,"Penn State Behrend is the best campus in PA."
,"Penn State Behrend is the best campus in the US."
,"Behrend bois best bois."
,"\"I\" comes before \"e\", except after \"c.\""
,"The best, the best, the best, the best..."
,"We're just two lost souls swimming in a fish bowl, year after year.  Running over the same old ground, how we found the same old fears, I wish you were here."
,"Pink Floyd best Floyd."
,"Turtles never outgrow their shell; rather, their shell outgrows them."
,"This is the best project submission for this challenge.  Hands down.  GGWP, no Re."
,"REEEEEEEEEEEEE!"
,"It is presently 1:34 am at the time of typing this sentence."
,"I don't know what I'm doing, but I'm living life."
,"Is this real life, or just fantasy?"
,"1 like = 1 prayer"
,"Help me, I've been forced to type this.  If you don't click f to pay respects, I may never return."
,"Behrend > Main Campus"
,"Programming is the most meaningful part of my life, I cannot wait to live a life of no sleep, only code, counting starting from 0 when grabbing things and having no life."
,"I am the muffin man."
,"I am the walrus."];

var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
});


var fact = document.getElementById('funfact');
{
  fact.innerHTML = facts[Math.floor(Math.random() * facts.length)];
}
