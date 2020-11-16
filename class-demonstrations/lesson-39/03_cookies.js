document.cookie = 'hello=true'; // ?q=t&t=1
document.cookie = 'anotherCookie=something';

document.cookie = 'minasCookie=mina; expires=Tue, 17 Nov 2020 23:59:00 GMT';
document.cookie = 'minasCookie=mina; expires=';
document.cookie = 'minasCookie=mina;';

function alertCookie() {
  alert(document.cookie);
  console.log(document.cookie);
}

// delimiter = ; 
const string1 = 'anotherCookie=something;hello=true;hello=true';
// delimiter = ,
const string2 = 'name,number,address,age';
// delimiter =  
const string3 = 'name number address age';

const splitString = string1.split(';');
splitString[0] = 'anotherCookie=something';
splitString[1] = 'hello=true';
splitString[2] = 'hello=true';

const splitString3 = string1.split(' ');

function resetOnce() {
  document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

const cookie = document.cookie;
let splitCookie = cookie.split(';');

// classic JavaScript
if (document.cookie.split(';').some(function (item) {
    return item.trim().indexOf('reader=') == 0
  })) {
  console.log('The cookie "reader" exists (ES5)')
}

const string = '    mina    ';
// string.trim()
// 'mina'
// modern JavaScript
if (document.cookie.split(';').some((item) => item.trim().startsWith('reader='))) {
  console.log('The cookie "reader" exists (ES6)')
}