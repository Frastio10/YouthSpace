const root_2 = document.getElementById("root_2"); 
const root_3 = document.getElementById("root_3"); 
const templates_2 = document.getElementById('random-news').innerHTML;
let temp_2 = "";



(async()=>{
	fetch('article.json').then(async(result, key)=>{
		var data = await result.json();	
		var random = Math.ceil(Math.random() * data.length);

			const getRandomValue = (arr, count)=>{
  var result = [];
  var _tmp = arr.slice();
  for(var i = 0; i<count; i++){
    var index = Math.ceil(Math.random() * 10) % _tmp.length;
    result.push(_tmp.splice(index, 1)[0]);
  }
  return result;
};

				
				
				let limit = 4;

				let randomValue = getRandomValue(data, limit);

					randomValue.forEach(async(item,key)=>{						
						if(key <= 4){
							temp_2 = temp_2 + templates_2
							.replace('{title}', randomValue[key].short_title)
							.replace('{image}',`<img src="./assets/images/${randomValue[key].image}" class="w-100 random-thumb" alt="">`)
							.replace('{link}', `view-inspirasi.html?inspirasi_id=${randomValue[key].id}}`)
							console.log(randomValue[key].id);
						}

					});
		$(root_2).prepend(temp_2);
		$(root_3).prepend(temp_2);
	})
})();