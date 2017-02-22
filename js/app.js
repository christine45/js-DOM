/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var singer = document.getElementById("name1");
singer.innerHTML = "Tay-Tay";


/*2. Replace the n/a with the following: 

Project Manager*/
var dj = document.getElementById("position2");
dj.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/

var piko = document.getElementById("alias3");
piko.innerHTML = "Concatenation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var snoop1 = document.getElementsByClassName("profile");

snoop1[0].innerHTML = "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
var sammy = document.getElementsByClassName("profile");
sammy[2].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae numquam consequatur enim laudantium earum eum magnam nesciunt dolor dolorem praesentium tenetur pariatur suscipit veritatis animi, aliquam. In maiores fugiat voluptatibus!";



/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
var divElement = document.createElement("div");
divElement.id = "name7";
divElement.innerHTML = "Chuck Norris";
nameBox.appendChild(divElement);

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/
var divElement = document.createElement("div");
divElement.id = "alias8";
divElement.innerHTML = "The Purple Monster";
aliasBox.appendChild(divElement);



//Final Boss
/*8. Create your own profile.*/
var devs = document.getElementsByClassName("block3 col-sm-4");
console.log(devs);

var ids = ["name9", "position9", "alias9", "bio9"];

var innerStuff = ["Christine", "EA", "Flyin' Hawaiian", "Born and Raised in Honolulu"];

var toAdd = document.createDocumentFragment();

for (var i = 0; i<ids.length; i++){
	console.log(ids[i]);
	var newDivs = document.createElement("div");
	newDivs.id = ids[i];
	newDivs.innerHTML = innerStuff[i];
	toAdd.appendChild(newDivs);
}
devs[2].appendChild(toAdd);