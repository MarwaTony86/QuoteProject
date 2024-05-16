
var Quote1 =[
    
    `Be yourself everyone else is already taken`,
    `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best`,
    `“So many books, so little time.”`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    `“A room without books is like a body without a soul.”`,
    
];
var Quote2=[
    `― Oscar Wilde`,`― Marilyn Monroe`, `― Frank Zappa`, `--Albert Einstein`,`― Marcus Tullius Cicero`
]
function getRandomQuote(){
  var Random =Math.floor(Math.random ()*(Quote1.length)); 
  

    document.getElementById('quote1').innerHTML=Quote1[Random]
    document.getElementById('quote2').innerHTML=Quote2[Random] 
}