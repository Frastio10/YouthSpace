  "use strict"

$('.search-box-discuss').click(function(event) {

	$('.popup-search').addClass('active')
});

$('.close-popup-wrapper').click(function(event) {

	$('.popup-search').removeClass('active')
});

$('.notification-box-discuss').hover(function() {

	$('.popup-notification').toggleClass('active');
});

$('.category-trigger').click(function(event) {

	$('.category-popup').addClass('active');
});

$('.close-trigger').click(function(event) {

	$('.category-popup').removeClass('active');
});


$('.rounded-category').click(function(event) {
	$('.rounded-category').removeClass('active')
	$(this).toggleClass('active');
});


$(document).on('click', '.btn-slider', function(event) {
	event.preventDefault();
	
	$(this).closest('.discussion').find('.slide-content').slideToggle();
});


//Define elements
const root = document.getElementById("root"); 
let temp = "";
const search = new URLSearchParams(window.location.search);
const template = document.getElementById("templates").innerHTML;
const template_not_inner = document.getElementById("templates");
const liked_template = document.getElementById("liked_template").innerHTML;
// const templates = document.getElementById('templates').innerHTML;


//Define Searchbox
const search_input = document.getElementById('search_input');
const btn_search = document.getElementById('search_button');


//Generate random values
const getRandomValue = (arr, count)=>{
  var result = [];
  var _tmp = arr.slice();
  for(var i = 0; i<count; i++){
    var index = Math.ceil(Math.random() * 10) % _tmp.length;
    result.push(_tmp.splice(index, 1)[0]);
  }
  return result;
};

// const showReplies = (e)=>{
// 	$(this).click(function(event) {
	
// 	$(this).closest('.discussion-card').children('.reply-wrapper').slideToggle();
// });
// }


const btn = root.querySelector('.btn_slider');

$(btn).click(function(event) {
	alert("lol")
});
// btn_search.addEventListener("click",()=>{
// 	console.log(search_input.value);
// });


//Event triggers on search box
// search_input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
// 	window.location.href = `news.html?search_query=${search_input.value}`;
//   }
// });

// btn_search.addEventListener("click",()=>{
// 	window.location.href = `news.html?search_query=${search_input.value}`;
// });



//Fetch JSON
(async()=>{
	fetch('discussion.json').then(async(result, key)=>{
		var data = await result.json();	

		//Get url values
		const url = search.get("category") ? search.get("category") : null;

		//Filter data by it's category
		var filtered_data = data.filter( element => element.category == url);
		

		var limit = 4;
		
		//Navigate category
		if (url == "all") {
			$('.catefory-list').removeClass('active');
			$('.all').addClass('active');
		} else if (url == "education") {
			$('.catefory-list').removeClass('active');
			$('.edu').addClass('active');
		} else if (url == "nature") {
			$('.catefory-list').removeClass('active');
			$('.nature').addClass('active');
		} else if (url == "technology") {
			$('.catefory-list').removeClass('active');
			$('.tech').addClass('active');
		}

		//Generate random values
		var random = Math.ceil(Math.random() * data.length);

		let pill_bg = "";

		let category;

		//Category
		const categories = (data)=>{

				if (data == "nature") {
					pill_bg = "bg-darkgreen";
					category = "Alam";

				} else if(data == "technology"){
					pill_bg = "bg-darkblue";
					category = "Teknologi";

				} else if(data == "education"){
					pill_bg = "bg-darkyellow";
					category = "Pendidikan";

				}

		}

		if(url == "all"){
			$(".category-all").addClass('current-category');
		} else if(url == "liked"){
			$(".category-liked").addClass('current-category');
		} else if(url == "education"){
			$(".category-education").addClass('current-category');
		} else if(url == "technology"){
			$(".category-technology").addClass('current-category');
		} else if(url == "nature"){
			$(".category-nature").addClass('current-category');
		}

		if(url != null){
			$('.create-discuss').addClass('d-none')
		}
		
		//Get search query values
		const search_query = search.get("search_query") ? search.get("search_query") : null;
		const regexp = new RegExp(search_query,"i");

		//Find the data and shows it up
		if (search_query != null) {
			data.forEach(async(item,key)=>{
				if ((key <= 4 && item.title.search(regexp) != -1) || (item.desc.search(regexp) != -1) || (item.author.search(regexp) != -1) || (item.category.search(regexp) != -1)) {
					console.log(item.title);
					categories(item.category);
				
					temp = temp + template
						.replace('{pill-bg}',pill_bg)
						.replace('{link}', `discuss_id=${item.id}&category=${item.category}"`)
						.replace('{title}', item.title)
						.replace('{date}', item.date)
						.replace('{author}', item.author)
						.replace('{shortdesc1}', item.short_desc_1)
						.replace('{category}',category) 
				} //else{
					//temp = `<h3 class="f-lato">404 NOT FOUND :(</h3>`;
				//}

			})
		}

		
		//Shows random article on category all and shows it up
		if(url == "all" && search_query == null || url == null){
			
			let randomValue = getRandomValue(data, limit);
			console.log(randomValue);
			randomValue.forEach(async(item,key)=>{
				console.log(randomValue[key].title);
				
				categories(randomValue[key].category);

				if(key <= 4){
					temp = temp + template
					.replace('{pill-bg}',pill_bg)
					.replace('{title}', randomValue[key].title)
					.replace('{date}', randomValue[key].date)
					.replace('{author}', randomValue[key].author)
					.replace('{shortdesc1}', randomValue[key].short_desc_1)
					.replace('{category}',category)
					.replace('{link}', `discuss_id=${randomValue[key].id}&category=${randomValue[key].category}"`)
				}

			});
		}
		
		//Show data that has been filtered by it's category
		filtered_data.forEach(async(item,key)=>{
			
			if(url != null){
				console.log(url);

				if(url.indexOf(data.category)){
					categories(item.category)

					temp = temp + template
					.replace('{pill-bg}',pill_bg)
					.replace('{link}', `discuss_id=${item.id}&category=${item.category}"`)
					.replace('{title}', item.title)
					.replace('{date}', item.date)
					.replace('{author}', item.author)
					.replace('{shortdesc1}', item.short_desc_1)
					.replace('{category}',category) 
				}

				if(url >= data.length){
					window.location.replace('404.html');
				}

			} else{
				window.location.replace('404.html');
			}

		})


		if(url != "liked"){
			$(root).append(temp);
		} else{
			$(root).append(liked_template);
			$('.btn-loadmore').css('display', 'none');
		}

	})
})();

