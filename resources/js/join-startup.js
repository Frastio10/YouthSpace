$("#search_by_name, #search_by_location").keyup(function(event) {
        var byLocation = $("#search_by_location").val();
        var byName = $("#search_by_name").val();
       // console.log(valme);

        if (byName.length >= 0 && byLocation.length >= 0) {
            document.querySelectorAll(".list-parent .startup-list").forEach( function(element, index) {
                element.classList.add("hide");
                if (element.querySelector(".card-detail h3").textContent.toLowerCase().includes(byName.toLowerCase()) && element.querySelector(".card-info .location span").textContent.toLowerCase().includes(byLocation.toLowerCase())) {
                    return element.classList.remove('hide');
                }
            });
        } else {
           $(".list-parent .startup-list").removeClass('hide');
        }
    });