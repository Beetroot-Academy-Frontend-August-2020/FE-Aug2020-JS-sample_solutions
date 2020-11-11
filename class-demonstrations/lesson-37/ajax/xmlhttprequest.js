// synchronous - make a request and you do nothing until it comes back
// asynchronous - make a request, move on with the execution, and then
//                an event handler deals with the response when it comes in
function loadDoc() {
  var xhttp = new XMLHttpRequest(); // AJAX object
  xhttp.onreadystatechange = function() {
    // HTTP Codes
    // 404 - Page Not Found
    // 500 - Internal Server Error Occurred
    // 200 - Request Successful
    // Ready state
    // 4 = ready to go, request has been fulfilled
    // 0	UNSENT	Client has been created. open() not called yet.
    // 1	OPENED	open() has been called.
    // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    // 3	LOADING	Downloading; responseText holds partial data.
    // 4	DONE	The operation is complete.
    if (this.readyState == 3) {
        // show loading graphic
        document.getElementById("demo").innerHTML = 'LOADING LOADING LOADING';
    }
    if (this.readyState == 4 && this.status == 200) {
        // hide loading graphic
        // this.responseText will contain 'Hello World, this is AJAX'
        document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  // configure or setup the request
  // specify the type of request - GET or POST
  // specify the location or the URL
  xhttp.open("GET", "ajax_info.txt", true);
  // xhttp.open("GET", "api.facebook.com/v1/get/timeline", true);
  xhttp.send();
}

document.addEventListener('DOMContentLoaded', () => {
    loadDoc();
});