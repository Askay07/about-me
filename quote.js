$(document).ready(function(){
    var quoteSource=[
    
    {
        quote:"Don't watch the clock; do what it does. Keep going.",
      
    },
    {
        quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
       
    },
    {
        quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        
    },
    {
        quote:"Expect problems and eat them for breakfast.",
       
    },
    {
        quote:"Start where you are. Use what you have. Do what you can.",
        
    },
    {
        quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        
    },
    {
        quote:"Always remember that you are absolutely unique. Just like everyone else.",
       
    },
    {
        quote:"Do not take life too seriously. You will never get out of it alive.",
       
    },
    
    {
        quote:"Atheism is a non-prophet organization.",
        
    },
    {
        quote:"Hapiness is not something ready made. It comes from your own actions.",
     
    }

];
    

    $('#quoteButton').click(function(evt){
        //define the containers of the info we target
        var quote = $('#quoteContainer p').text();
        var quoteGenius = $('#quoteGenius').text();
        //prevent browser's default action
        evt.preventDefault();
        //getting a new random number to attach to a quote and setting a limit
        var sourceLength = quoteSource.length;
        var randomNumber= Math.floor(Math.random()*sourceLength);
        //set a new quote
        for(i=0;i<=sourceLength;i+=1){
        var newQuoteText = quoteSource[randomNumber].quote;
        //console.log(newQuoteText,newQuoteGenius);
  var timeAnimation = 500;
  var quoteContainer = $('#quoteContainer');
  //fade out animation with callback
  quoteContainer.fadeOut(timeAnimation, function(){
    quoteContainer.html('');
            quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="RanQuote">'+'-'+newQuoteGenius+'</p>');
    //fadein animation.
    quoteContainer.fadeIn(timeAnimation);
  });  
        
       
  break;
    };

});
    
    
});