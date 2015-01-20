//(function() {      //immediately invoked function expression
	/*
	document.open();
	document.write() {
*/
/*		document.getElementsByTagName('title')[0].textContent = "My Javascript Blog";

		document.getElementsByTagName('h1')[0].textContent = "My Javascript Blog";

		var blogpost1 = document.createElement('h1');
		blogpost1.textContent = "My Second Blog Post";

		var article1 = document.getElementsByTagName('article')[0];

		var blog1content = document.getElementsByTagName('p')[0];
		blog1content.textContent = "This is a blog post about really awesome stuff I've done in JavaScript.";

		article1.insertBefore(blogpost1, blog1content);

		article1.removeChild(blog1content);

		var clicked1 = true;
		article1.addEventListener('click', function(togglearticle1) {
			
			if (clicked1) {
				clicked1 = false;
				article1.appendChild(blog1content);
			}
			else {
				clicked1 = true;
				article1.removeChild(blog1content);
			}

		});

		//create a second article

		var article2 = document.createElement('article');
		document.getElementsByTagName('body')[0].appendChild(article2);

		var blogpost2 = document.createElement('h1');
		blogpost2.textContent = 'My First Blog Post';

		
		article2.appendChild(blogpost2);

		var blogcontent2 = document.createElement('p');
		blogcontent2.textContent = "This is the first blog post I've ever written.";
		
		//function populateArticle2 (){

		


		var clicked2 = true;
		article2.addEventListener('click', function(togglearticle2) {
			
			if (clicked2) {
				clicked2 = false;
				article2.appendChild(blogcontent2);
			}
			else {
				clicked2 = true;
				article2.removeChild(blogcontent2);
			}

		});
		//mouseover to change article 2
		article2.addEventListener("mouseover", function( event ) { 
			article2.style.color = "orange";
		//	setTimeout(function() {
		//	event.target.style.color = "";
		//	}, 500);
			
		}, 400);//, false);

		article2.addEventListener('mouseleave', function(event){
			article2.style.color = 'black';
		}, 400);

		





		//Make it so that when you click an article title, it toggles the visibility of the paragraphs within the article.
  <head>
    <title>My JavaScript Blog</title>
  </head>
  <body>
    <h1>My JavaScript Blog</h1>
    <article>
      <h1>My Second Blog Post</h1>
      <p>This is a blog post about really awesome stuff I've done in JavaScript.</p>
    </article>
    <article>
      <h1>My First Blog Post</h1>
      <p>This is the first blog post I've ever written.</p>
    </article>
  </body>
  <script type="text/javascript" src="script.js"></script>
</html>


		var mynewheader = document.createElement('hi');
		var myoldheader = document.getElementsByTagName('hi')[0];


	var aNewBodyElement = document.createElement("body");
	aNewBodyElement.id = "newBodyElement";
	document.body = aNewBodyElement;
	alert(document.body.id); // "newBodyElement"
*/
	//document.close();
//})();


(function() {

  document.getElementsByTagName('title')[0].textContent = "This is a payment site!!";

  var newBody = document.createElement('body'); 
  var wholething = document.getElementsByTagName('html')[0];
  wholething.replaceChild(newBody, document.body)

  var headerPage = document.createElement('h1');
  headerPage.textContent = 'This is a payment site!!!';
  newBody.appendChild(headerPage);

  //make a table
  var formtitle = document.createElement('h2');
  formtitle.textContent = "Please fill this out";
  var form = document.createElement('form');
  form.appendChild(formtitle);

  /*

  var nameDiv = document.createElement('div');
  var namelabel = document.createElement('label');
  var namebox = document.createElement('input');
  namelabel.textContent = 'Name: ';
  namebox.setAttribute('type', 'text',);
  namebox.setAttribute('id', 'name');
  nameDiv.appendChild(namelabel);
  nameDiv.appendChild(namebox);
  form.appendChild(nameDiv);	

  var emailDiv = document.createElement('div');
  var emaillabel = document.createElement('label');
  var emailbox = document.createElement('input');
  emaillabel.textContent = 'Email: ';
  emailbox.setAttribute('type', 'text');
  emailbox.setAttribute('id', 'name');
  emailDiv.appendChild(emaillabel);
  emailDiv.appendChild(emailbox);
  form.appendChild(emailDiv);

  var creditDiv = document.createElement('div');
  var creditlabel = document.createElement('label');
  var creditbox = document.createElement('input');
  creditlabel.textContent = 'CreditCard Number: ';
  creditbox.setAttribute('type', 'text');
  creditbox.setAttribute('id', 'name');
  creditDiv.appendChild(creditlabel);
  creditDiv.appendChild(creditbox);
  form.appendChild(creditDiv);

  var creditexpDiv = document.createElement('div');
  var creditexplabel = document.createElement('label');
  var creditexpbox = document.createElement('input');
  creditexplabel.textContent = 'CreditCard Exp: ';
  creditexpbox.setAttribute('type', 'text');
  creditexpbox.setAttribute('id', 'name');
  creditexpDiv.appendChild(creditexplabel);
  creditexpDiv.appendChild(creditexpbox);
  form.appendChild(creditexpDiv);

  var creditvarDiv = document.createElement('div');
  var creditvarlabel = document.createElement('label');
  var creditvarbox = document.createElement('input');
  creditvarlabel.textContent = 'CreditCard Var: ';
  creditvarbox.setAttribute('type', 'text');
  creditvarbox.setAttribute('id', 'name');
  creditvarDiv.appendChild(creditvarlabel);
  creditvarDiv.appendChild(creditvarbox);
  form.appendChild(creditvarDiv);

  var cityDiv = document.createElement('div');
  var citylabel = document.createElement('label');
  var citybox = document.createElement('input');
  citylabel.textContent = 'City: ';
  citybox.setAttribute('type', 'text');
  citybox.setAttribute('id', 'name');
  cityDiv.appendChild(citylabel);
  cityDiv.appendChild(citybox);
  form.appendChild(cityDiv);

  var stateDiv = document.createElement('div');
  var statelabel = document.createElement('label');
  var statebox = document.createElement('input');
  statelabel.textContent = 'State: ';
  statebox.setAttribute('type', 'text');
  statebox.setAttribute('id', 'name');
  stateDiv.appendChild(statelabel);
  stateDiv.appendChild(statebox);
  form.appendChild(stateDiv);
  */

  function buildinputDiv(id, message){
  	var div = document.createElement('div');
  	var label = document.createElement('label');
  	var box = document.createElement('input');
  	var button = document.createElement('input');
  	label.textContent = message + ':';
  	//button.setAttribute('type', 'button');
  	//button.setAttribute('class', "btn btn-default");
  	box.setAttribute('type', 'text');
  	box.setAttribute('class', 'form-control');
  	box.setAttribute('id', 'name');

  	div.setAttribute('class', 'form-group');

  	div.appendChild(label);
  	div.appendChild(box);
  	//div.appendChild(button);
  	return div;
  }

  var nameDiv = buildinputDiv('name', 'Name');
  var emailDiv = buildinputDiv('email', 'Email');
  var creditDiv = buildinputDiv('credit', 'CreditCard');
  var cityDiv = buildinputDiv('city', 'City');
  var stateDiv = buildinputDiv('state', 'State');
  
  

  form.appendChild(nameDiv);
  form.appendChild(emailDiv);
  form.appendChild(creditDiv);
  form.appendChild(cityDiv);
  form.appendChild(stateDiv);


  var buttonDiv = document.createElement('div');
  var buttonLabel = document.createElement('label');
  var newButton = document.createElement('button');
  newButton.setAttribute('type', 'submit');  //submit is default
  newButton.setAttribute('class', 'btn btn-primary');
  newButton.setAttribute('input', 'form-data');
  newButton.textContent = "BUTTON";


  form.appendChild(newButton);

  //Make the button submit the form data successfully















  newBody.appendChild(form);	


  



/*
  var emailTitle = document.createElement('h2');
  emailTitle.textContent = 'Please provide your email';
  newBody.appendChild(emailTitle);

  var creditTitle = document.createElement('h2');
  creditTitle.textContent = 'Please provide your creditcard number';
  newBody.appendChild(creditTitle);

  var emailTitle = document.createElement('h2');
  emailTitle.textContent = 'Please provide your creditcard expira';
  newBody.appendChild(emailTitle);

  var emailTitle = document.createElement('h2');
  emailTitle.textContent = 'Please provide your email';
  newBody.appendChild(emailTitle);

*/

   //window.onbeforeunload = function() {
    //return "Are you sure you want to leave this page bla bla bla?"; // you can make this dynamic, ofcourse...
 //};


  



})();





















