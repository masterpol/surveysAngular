// General script
$(function() {
    submitSurveyForm();
});

function submitSurveyForm() {
    $(document).on("click", "#submit", function (e) {
        var $form = $("#survey-form"),
            $name = $("#names"),
            name = $name.val(),
            $email = $("#email"), 
            email = $email.val(),
            $youLike = $("#you_like"),
            youLike = $youLike.val(),
            $youCan = $("#you_can"), 
            youCan = $youCan.val(),
            $youWish = $("#you_wish") 
            youWish = $youWish.val(),
            menssages = [],
            $modal = $("#myModal");

        if (name.length == 0) {
            $name.css("border","1px solid red");
            menssages.push("The field is required name");
        }

        if (email.length == 0) {
            $email.css("border","1px solid red");
            menssages.push("The field is required email");
        }

        if (youLike.length == 0) {
            $youLike.css("border","1px solid red");
            menssages.push("The field is required ask 1");
        }

        if (youCan.length == 0) {
            $youCan.css("border","1px solid red");
            menssages.push("The field is required ask 2");
        }

        if (youWish.length == 0) {
            $youWish.css("border","1px solid red");
            menssages.push("The field is required ask 3");
        }

        if (menssages.length > 0) {
            var pop = '<ul  class="list-unstyled alert alert-danger">';
            for (var i = menssages.length - 1; i >= 0; i--) {
                pop += "<li>" + menssages[i] + "</li>"
            };
            pop += "</ul>";

            window.scrollTo(0, 0);
            $form.prepend(pop);
            return;
        } else {
            var data = ["<span class='text-red'>Full name:</span> </br>"+name,
                        "<span class='text-red'>Email:</span> </br>"+email, 
                        "<span class='text-red'>You like star wars?:</span> </br>"+youLike, 
                        "<span class='text-red'>What are your skills?:</span> </br>"+youCan,
                        "<span class='text-red'>if you had a power which will?:</span> </br>"+youWish],
                $modalUl = $(".show-answer"),
                $modalLi = $modalUl.find("li");

            for (var i = 0; i <= data.length - 1; i++) {
                $modalLi.clone().html(data[i]).appendTo($modalUl);
            };
            $modal.modal("show");
            _drawSuccesMessage($modal);
            _modalClose($modal);
        }
    });   
} 

function _modalClose($modal) {
    var $elements = $modal.find(".show-answer span").parent("li");
    $modal.on("hide.bs.modal", function(){
        $elements.remove();
    });
}

function _drawSuccesMessage($modal) {
    var $menssage = "<div class='alert alert-success'>Good job, Thanks for do this survey</div>",
        $btn = $modal.find("#save-changes");
    $btn.on("click", function() {
         $modal.find(".modal-body").html($menssage);
    });    
}