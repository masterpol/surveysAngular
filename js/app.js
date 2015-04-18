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
            mensaje = [],
            $modal = $("#myModal");

        if (name.length == 0) {
            $name.css("border","1px solid red");
            mensaje.push("The field is required name");
        }

        if (email.length == 0) {
            $email.css("border","1px solid red");
            mensaje.push("The field is required email");
        }

        if (youLike.length == 0) {
            $youLike.css("border","1px solid red");
            mensaje.push("The field is required ask 1");
        }

        if (youCan.length == 0) {
            $youCan.css("border","1px solid red");
            mensaje.push("The field is required ask 2");
        }

        if (youWish.length == 0) {
            $youWish.css("border","1px solid red");
            mensaje.push("The field is required ask 3");
        }

        if (mensaje.length > 0) {
            var pop = '<ul  class="list-unstyled alert alert-danger">';
            for (var i = mensaje.length - 1; i >= 0; i--) {
                pop += "<li>" + mensaje[i] + "</li>"
            };
            pop += "</ul>";

            window.scrollTo(0, 0);
            $form.prepend(pop);
            return;
        } else {
            $modal.modal("show");
        }
    });   
} 