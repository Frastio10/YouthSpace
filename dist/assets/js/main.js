const root = document.getElementById("roots"); 
let temp = "";
const search = new URLSearchParams(window.location.search);
const templates = document.getElementById('templates').innerHTML;

(async()=>{
	fetch('article.json').then(async(result, key)=>{
		var data = await result.json();	

		const url = search.get("news_id") ? search.get("news_id") : null;

		
		data.forEach(async(item,key)=>{
			
			if(url != null){

				if(url == data[key].id){
					console.log(data[url].author);
					temp = temp + templates
					.replace('{title}',data[url].title)
					.replace('{desc}', data[url].desc)
					.replace('{author}', data[url].author)
					.replace('{date}', data[url].date)
					.replace('{image}',`<img src="./assets/images/${data[url].image}" class="w-100" alt="">`);
					// root.innerHTML = temp;
					console.log(data[url].title);

				} 
				console.log(data.length);

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