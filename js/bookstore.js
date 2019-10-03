
function bookshop () {
  var classification = prompt("What book categories do you prefer to read؟");
  var name;
  var h;
  
  while (classification !== 'n' && classification !== 'f' && classification !== 'c')
  {
      classification =  prompt('try n,f or c');
  }
  
  if (classification == 'n') {
   h = "<img src='https://timedotcom.files.wordpress.com/2018/11/best-non-fiction-books.jpg'>" 
        } else if(classification =='f') {
         h = "<img src=https://assets.readitforward.com/wp-content/uploads/2018/10/RIF-Holiday-NonFiction-830x625.jpg>"
            
        } else if (classification=='c'){
         h = "<img src='https://timedotcom.files.wordpress.com/2018/11/best-non-fiction-books.jpg'>"
            
  }

    return h;

}

var time = prompt("Anytime you like to come to the library??");
var text = "";
var i;
for (i = 1; i < 10; i++) {
  text += " i will come at " + i + "<br>"
}

