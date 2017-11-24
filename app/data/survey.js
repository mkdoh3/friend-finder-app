$(document).ready(function () {

    let questions = ["Ball of yarn > Tennis ball", "I love swimming!", "I love learning new things!", "I constantly seek the approval of others", "Tuna, yuck!", "I love playing the role of an obedient submissive", "I'm always excited to meet new people!", "On a typical Friday night, you can ususally find me curled up in a blanket on the couch", "I feel like I'm more important than you", "Rub my tummy!"];

    let count;

    $("#start-btn").on("click", function () {
        console.log("hello");
        $(".question").html(questions[0])
        count = 0;
        console.log('count', count);
    })





    $('.selection').on('click', function () {
        console.log($(this).data('value'));
        count++
        console.log('count', count);

        $(".question").empty().html(questions[count]);
        $("#q-number").empty().html('Question #' + count)
    });

})
