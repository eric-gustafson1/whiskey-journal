
$(document).ready(function () {

    let whiskeyName = $('#whiskeyname');
    let price = $('#price');
    

    $(document).on('submit', '#addwhiskey-form', function (event) {
        let whiskeyType = $('#whiskeyType').find(':selected').text();
        let whiskeyRating = parseInt($('#whiskeyRating').find(':selected').text());
        let whiskeyReview = $('#whiskeyReview').val();
        console.log(whiskeyRating);
        console.log(whiskeyReview);

        if (!whiskeyName.val().trim().trim()) {
            return;
        }

        createWhiskey({
            name: whiskeyName.val().trim(),
            type: whiskeyType,
            price: price.val().trim(),
            body: whiskeyReview,
            rating: whiskeyRating,
        })
    })

    function createWhiskey(whiskeyData) {
        console.log("This is your " + whiskeyData)
        $.post("/api/addWhiskey", whiskeyData)
    }

})