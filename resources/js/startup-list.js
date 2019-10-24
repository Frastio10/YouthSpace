const search = new URLSearchParams(window.location.search);
const page = search.get("page") ? search.get("page") : 1;

		//Fake pagination
var nav = document.querySelectorAll(`.page-${page}`);
//console.log(nav);
nav[0].classList.add('paginate-active');

