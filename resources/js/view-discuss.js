"use strict"

const root = document.getElementById("roots"); 
let temp = "";
const search = new URLSearchParams(window.location.search);
const templates = document.getElementById('templates').innerHTML;
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
	fetch('discussion.json').then(async(result, key)=>{
		var data = await result.json();	
		var random = Math.ceil(Math.random() * data.length);

				const url = search.get("discuss_id") ? search.get("discuss_id") : null;

				
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
							.replace('{image}',data[url].image);
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
				
		$(root).prepend(temp);
	})
})();