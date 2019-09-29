const root = document.getElementById("root"); 
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

					temp = temp + templates
					.replace('{desc}', data[url].desc)
					.replace('{author}', data[url].author)
					.replace('{date}', data[url].date)
					.replace('{image}',`<img src="${data[url].image}" class="w-100" alt="">`)
					root.innerHTML = temp;
				}

			} 
				window.location.replace('404.html');
			


		})
	})
})()
