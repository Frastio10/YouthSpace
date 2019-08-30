const root = document.getElementById("root"); 
let temp = "";
const search = new URLSearchParams(window.location.search);
const templates = document.getElementById('templates').innerHTML;

(async()=>{
	fetch('article.json').then(async(result, key)=>{
		var data = await result.json();	

		const url = search.get("category") ? search.get("category") : null;

		
		data.forEach(async(item,key)=>{
			
			if(url != null){

				if (url == "education") {
					
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
