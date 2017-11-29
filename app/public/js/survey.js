$(document).ready(function () {

    let questions = ["Ball of yarn > Tennis ball", "I love swimming!", "I love learning new things!", "I constantly seek the approval of others", "Tuna, yuck!", "I love playing the role of an obedient submissive", "I'm always excited to meet new people!", "On a typical Friday night, you can ususally find me curled up in a blanket on the couch", "I feel like I'm more important than you", "Rub my tummy!"];

    let count;

    let newUser = {
        scores: []
    };

    $("#start-btn").on("click", function () {
        let name = $("#name").val();
        let photo = $("#photo").val()
        if (name && photo) {
            newUser.name = name;
            newUser.photo = photo;
            $(".question").html(questions[0]);
            $("#myModal").modal();
            count = 1;
        } else {
            alert('Please a valid name and URL')
        }
    })

    $('.selection').on('click', function () {
        if (count < questions.length) {
            let value = $(this).data('value');
            newUser.scores.push(value);
            $(".question").empty().html(questions[count]);
            $("#q-number").empty().html('Question #' + (count + 1));
            count++
        } else {
            $('#submit').css("display", "initial")
        }
    });

    $("#submit").on('click', function () {
        console.log(newUser)

        let location = window.location.origin;

        $("#myModal").modal('toggle');

        $.ajax({
            url: location + "/api/friends",
            data: newUser,
            type: 'POST',
            traditional: true, //needed for posting an object that contains an array.. i guess??
            success: function () {


                console.log("success")
                //                console.log(data)
            }
        });

        // find and display match
    })



})
