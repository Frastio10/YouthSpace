// const roots = document.getElementById('roots');
// let temp;
// const template = document.getElementById('templates').innerHTML;
// var card = document.querySelectorAll(".outer-card");

// const getRandomValue = (arr, count)=>{
//   var result = [];
//   var _tmp = arr.slice();
//   for(var i = 0; i<count; i++){
//     var index = Math.ceil(Math.random() * 10) % _tmp.length;
//     result.push(_tmp.splice(index, 1)[0]);
//   }
//   return result;
// };

// (async()=>{
// 	fetch('inspirasi.json').then(async(result, key)=>{
// 		var data = await result.json();
// 		var random = Math.ceil(Math.random() * data.length);

// 		let amount = 0;


// 		// for (var i = 0; i <= data.length - 2; i++) {
// 		// 	amount++;
// 		// 	console.log(amount);
			
// 		// }

// 		data.forEach(async(item,index)=>{
			
// 			if(index % 4 == 0){
// 				amount++;

// 				let createRow = document.createElement('div');
// 					createRow.classList.add('slick-row');
// 					createRow.classList.add(`card-row-${amount}`);

// 				roots.prepend(createRow);

// 			}


// 			var limiter = (data.length - 1) / 4;
			
// 			if (index <= data.length - 2) {
// 				// console.log(key % 4);
				

				
				
// 				// if (key) {
// 					temp = temp + template
// 					.replace('{image}', item.image)
// 					.replace('{title}', item.title)
// 					.replace('{date}', item.date)
// 					.replace('{shorttitle}',item.short_title)
// 					.replace('{id}', item.id)
// 				//} 


				
// 			}
			
// 		});
// 		let temp_2 = $(temp);	
// 		roots.innerHTML(temp_2);
		

// 	});

// })();