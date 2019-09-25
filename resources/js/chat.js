$("#search_chat").keyup(function(event) {
        var valme = $(this).val();
        if (valme.length > 0) {
            document.querySelectorAll("#user_chat_list li").forEach( function(element, index) {
                element.classList.add("hide");
                if (element.querySelector(".chat-name").textContent.toLowerCase().includes(valme.toLowerCase())) {
                    return element.classList.remove('hide');
                }
            });
        } else {
           $("#user_chat_list li").removeClass('hide');
        }
    });


    $(document).ready(function(){

      $('.tab-changer').click(function(){

        var tab_id = $(this).attr('data-tab');


        $('.tab-content').removeClass('current');
        $('.tab-changer').removeClass('current-chat')
        // $('.tab-changer').addClass('f-grey');
        // $('.tab-changer').removeClass('svg-effect');
        // $('.tab-changer').removeClass('tab-changer-active');


        $(this).addClass('current-chat');
        // $(this).removeClass('f-grey');
        // $(this).addClass('f-yellow');
        // $(this).addClass('svg-effect');
        // $(this).addClass('tab-changer-active');


        $("#"+tab_id).addClass('current');
        scrollBottom();
      });

    });

 (()=>{
    $(".customscrollbar").scrollTop($(".customscrollbar").height() ** 2 );
})();


$(".tab-changer").click(function(event) {
    let data_url = $(this).data('url');
    let target = `?message_id=${data_url}`;
    let title = "Pesan";
    let url = `?test=${data_url}`;

    $(".tab-content").removeClass('active-tab');
    window.history.pushState(target, title, url);

    let tab = $(this).data('tab');

    $("#"+tab).addClass('active-tab');

    const element = $("#"+tab).innerHTML;
    const elem = ($("#"+tab).html());

    const root = $('#root-scroll');

    root.innerHTML = elem;
    root.innerHTML = root.textContent;

    console.log(elem);

});