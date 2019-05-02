// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload = function() {
	makeRequest(1);
}

function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...	
	var url = "";

	if (pageNum == 1) {
		url = "https://reqres.in/api/users?page=1";
	}
	else if (pageNum == 2) {
		url = "https://reqres.in/api/users?page=2";
	}
	else if (pageNum == 3) {
		url = "https://reqres.in/api/users?page=3";
	}
	else {
		url = "https://reqres.in/api/users?page=4";
	}
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"


			var myTable = document.getElementById("data");
			myTable.innerHTML = "";

			for (var i = 0; i < jsData.data.length; i++) {
				
				// create variables
				var myId = jsData.data[i].id;
				var myFname = jsData.data[i].first_name;
				var myLname = jsData.data[i].last_name;
				var myAvatar = jsData.data[i].avatar;

				// create appropriate tags for the table
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var td2 = document.createElement("td");
				var td3 = document.createElement("td");
				var td4 = document.createElement("td");
				var img = document.createElement("img");

				// assign attribute to the image tag
				img.setAttribute("src", myAvatar)

				// create the tag for td
				var h4 = document.createElement("h4");
				
				// content for td tags
				var id_content = document.createTextNode(myId);
				var fname_content = document.createTextNode(myFname);
				var lname_content = document.createTextNode(myLname);
				
				// append id, fName, lName, avatar
				h4.appendChild(id_content);
				h4.appendChild(fname_content);
				h4.appendChild(lname_content);

				// append id and td1 into the row
				td1.appendChild(id_content);
				tr.appendChild(td1);

				// append fName and td2 into the row
				td2.appendChild(fname_content);
				tr.appendChild(td2);

				// apppend lName and td3 into the row
				td3.appendChild(lname_content);
				tr.appendChild(td3);

				// append avatar and td4 into the row
				td4.appendChild(img);
				tr.appendChild(td4);

				// append all content into the table body 
				myTable.appendChild(tr);
			}
						
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			
			var classButton = document.getElementsByClassName("pgbtn");
			for (var i = 0; i < classButton.length; i++) {
				classButton[i].classList.remove("active");
			}
						
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			
			var number = jsData.page;

			var activeButton = document.querySelector("#pgbtn"+number);
			activeButton.classList.add("active");


		} else {
			console.log('There was a problem with the request.');
		}
	}
}	
