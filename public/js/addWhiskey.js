
$(document).ready(function () {

    let whiskeyName = $('#whiskeyname');
    let price = $('#price');
    let whiskeyReview = $('#whiskeyReview');

    $(document).on('submit', '#addwhiskey-form', function (event) {
        event.preventDefault();
        let whiskeyType = $('#whiskeyType').find(':selected').text();
        let whiskeyRating = parseInt($('#whiskeyRating').find(':selected').text());

        if (!whiskeyName.val().trim().trim()) {
            return;
        }

        createWhiskey({
            name: whiskeyName.val().trim(),
            type: whiskeyType,
            price: price.val().trim()
        })

        createReview({
            body: whiskeyReview,
            rating: whiskeyRating,
        })
    })

    function createWhiskey(whiskeyData) {
        console.log("This is your " + whiskeyData)
        $.post("/api/addWhiskey", whiskeyData)
    }

    function createReview(reviewData) {
        console.log(reviewData)
        $.post("/api/addReview", reviewData)
    }

    // Function for retrieving authors and getting them ready to be rendered to the page
    //   function getAuthors() {
    //     $.get("/api/authors", function(data) {
    //       var rowsToAdd = [];
    //       for (var i = 0; i < data.length; i++) {
    //         rowsToAdd.push(createAuthorRow(data[i]));
    //       }
    //       renderAuthorList(rowsToAdd);
    //       nameInput.val("");
    //     });
    //   }

    // Function for retrieving authors and getting them ready to be rendered to the page
    function getUsers() {
        $.get("/api/users", function (data) {
            // var usersArray = [];
            // for (var i = 0; i < data.length; i++) {
            //     usersArray.push(createAuthorRow(data[i]));
            // }
            // renderAuthorList(rowsToAdd);
            // nameInput.val("");
        });
    }
    getUsers();
})