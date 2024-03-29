//Define elements
const root = document.getElementById("root"); 
let temp = "";
const search = new URLSearchParams(window.location.search);
const template = document.getElementById("templates").innerHTML;
// const templates = document.getElementById('templates').innerHTML;
 

//Define Searchbox
const search_input = document.getElementById('search_input');
const btn_search = document.getElementById('search_button');
const search_input_2 = document.getElementById('search_input_2');
const btn_search_2 = document.getElementById('search_button_2');


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

// btn_search.addEventListener("click",()=>{
// 	console.log(search_input.value);
// });


//Event triggers on search box
search_input.addEventListener("keyup", function(event) {
	
  if (event.keyCode === 13) {
	window.location.href = `news.html?search_query=${search_input.value}`;
  }
});

btn_search.addEventListener("click",()=>{
	window.location.href = `news.html?search_query=${search_input.value}`;
});

search_input_2.addEventListener("keyup", function(event) {
	
  if (event.keyCode === 13) {
	window.location.href = `news.html?search_query=${search_input_2.value}`;
  }
});

btn_search_2.addEventListener("click",()=>{
	window.location.href = `news.html?search_query=${search_input_2.value}`;
});


//Fetch JSON
(async()=>{
	fetch('article.json').then(async(result, key)=>{
		var data = await result.json();	

		//Get url values
		const url = search.get("category") ? search.get("category") : "all";
		const page = search.get("page") ? search.get("page") : 1;

		//Fake pagination
		var nav = document.querySelectorAll(`.page-${page}`);
		console.log(nav);
		nav[0].classList.add('paginate-active');

		//Filter data by it's category
		var filtered_data = data.filter( element => element.category == url);
		console.log(filtered_data);

		var limit = 4;
		
		//Navigate category
		if (url == "all") {
			$('.catefory-list').removeClass('active');
			$('.all').addClass('active'); 
			// $('#category-name').text('Semua berita');
		} else if (url == "education") {
			$('.catefory-list').removeClass('active');
			$('.edu').addClass('active');
			$('#category-name').text('Pendidikan');
		} else if (url == "nature") {
			$('.catefory-list').removeClass('active');
			$('.nature').addClass('active');
			$('#category-name').text('Alam');

		} else if (url == "technology") {
			$('.catefory-list').removeClass('active');
			$('.tech').addClass('active');
			$('#category-name').text('Teknologi');

		} else if (url == "lifestyle") {
			$('.catefory-list').removeClass('active');
			$('.lifestyle').addClass('active');
			$('#category-name').text('Gaya hidup');

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
				} else if(data == "lifestyle"){
					pill_bg = "bg-pink-1";
					category = "Gaya Hidup";
				}

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
						.replace('{link}', `<a href="view-news.html?news_id=${item.id}&category=${item.category}" class="btn btn-blue">Baca selengkapnya</a>`)
						.replace('{title}', item.title)
						.replace('{date}', item.date)
						.replace('{author}', item.author)
						.replace('{shortdesc1}', item.short_desc_1)
						.replace('{category}',category) 
						.replace('{image}',item.image)
				} //else{
					//temp = `<h3 class="f-lato">404 NOT FOUND :(</h3>`;
				//}

			})
		}

		
		//Shows random article on category all and shows it up
		if(url == "all" && search_query == null){
			
			let randomValue = getRandomValue(data, limit);

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
						.replace('{image}',randomValue[key].image)
					.replace('{category}',category)
					.replace('{link}', `<a href="view-news.html?news_id=${randomValue[key].id}&category=${randomValue[key].category}" class="btn btn-blue">Baca selengkapnya</a>`)
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
					.replace('{link}', `<a href="view-news.html?news_id=${item.id}&category=${item.category}" class="btn btn-blue">Baca selengkapnya</a>`)
					.replace('{title}', item.title)
					.replace('{date}', item.date)
					.replace('{author}', item.author)
					.replace('{shortdesc1}', item.short_desc_1)
					.replace('{category}',category) 
					.replace('{image}',item.image)

				}

				if(url >= data.length){
					window.location.replace('404.html');
				}

			} else{
				window.location.replace('404.html');
			}

		})
		$(root).prepend(temp);

	})
})();

