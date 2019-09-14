const root = document.getElementById("roots"); 
const root_2 = document.getElementById("root_2"); 
let temp = "";
const search = new URLSearchParams(window.location.search);
const templates = document.getElementById('templates').innerHTML;
const templates_2 = document.getElementById('random-news').innerHTML;
let temp_2 = "";

const getRandomValue = (arr, count)=>{
  var result = [];
  var _tmp = arr.slice();
  for(var i = 0; i<count; i++){
    var index = Math.ceil(Math.random() * 10) % _tmp.length;
    result.push(_tmp.splice(index, 1)[0]);
  }
  return result;
};


(async()=>{
	fetch('article.json').then(async(result, key)=>{
		var data = await result.json();	
		var random = Math.ceil(Math.random() * data.length);

				const url = search.get("news_id") ? search.get("news_id") : null;

				
				data.forEach(async(item,key)=>{

					if(url != null){

						if(url == data[key].id){
							document.title = data[url].title;
							console.log(data[url].author);
							temp = temp + templates
							.replace('{title}',data[url].title)
							.replace('{desc}', data[url].desc)
							.replace('{author}', data[url].author)
							.replace('{date}', data[url].date)
							.replace('{image}',`<img src="./assets/images/${data[url].image}" class="w-100" alt="">`);
							// root.innerHTML = temp;

						} 

					
						console.log(data.length);

						if(url >= data.length){
							window.location.replace('404.html');
						}

					} else{
						window.location.replace('404.html');
					}

				});
				let limit = 4;

				let randomValue = getRandomValue(data, limit);

					randomValue.forEach(async(item,key)=>{						
						if(key <= 4){
							temp_2 = temp_2 + templates_2
							.replace('{title}', randomValue[key].short_title)
							.replace('{image}',`<img src="./assets/images/${randomValue[key].image}" class="w-100 random-thumb" alt="">`)
							.replace('{link}', `view-news.html?news_id=${randomValue[key].id}&category=${randomValue[key].category}`)
							console.log(randomValue[key].id);
						}

					});
		$(root).prepend(temp);
		$(root_2).prepend(temp_2);
	})
})();