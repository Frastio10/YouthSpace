const root = document.getElementById("root"); 
let temp = "";
const search = new URLSearchParams(window.location.search);
const template = document.getElementById("templates").innerHTML;
// const templates = document.getElementById('templates').innerHTML;


//Searchbox
const search_input = document.getElementById('search_input');
const btn_search = document.getElementById('search_button');





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

search_input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
	window.location.href = `?search_query=${search_input.value}`;
   
  }
});

btn_search.addEventListener("click",()=>{
	window.location.href = `?search_query=${search_input.value}`;
});



(async()=>{
	fetch('article.json').then(async(result, key)=>{
		var data = await result.json();	

		
		


		const url = search.get("category") ? search.get("category") : "all";

		var filtered_data = data.filter( element => element.category == url);
		console.log(filtered_data);

		var limit = 4;
		
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

		var random = Math.ceil(Math.random() * data.length);

		let pill_bg = "";

		let category;

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
		
		const search_query = search.get("search_query") ? search.get("search_query") : null;
		const regexp = new RegExp(search_query,"i");

		if (search_query != null) {
			data.forEach(async(item,key)=>{
				if ((item.title.search(regexp) != -1) || (item.desc.search(regexp) != -1) || (item.author.search(regexp) != -1) || (item.category.search(regexp) != -1)) {
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
				} //else{
					//temp = `<h3 class="f-lato">404 NOT FOUND :(</h3>`;
				//}

			})
		}

		
		if(url == "all" && search_query == null){
			
			let randomValue = getRandomValue(data, limit);

			randomValue.forEach(async(item,key)=>{
				console.log(randomValue[key].title);
				
				categories(randomValue[key].category);

				temp = temp + template
				.replace('{pill-bg}',pill_bg)
				.replace('{title}', randomValue[key].title)
				.replace('{date}', randomValue[key].date)
				.replace('{author}', randomValue[key].author)
				.replace('{shortdesc1}', randomValue[key].short_desc_1)
				.replace('{category}',category)
				.replace('{link}', `<a href="view-news.html?news_id=${randomValue[key].id}&category=${randomValue[key].category}" class="btn btn-blue">Baca selengkapnya</a>`)

			});
		}
		
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

