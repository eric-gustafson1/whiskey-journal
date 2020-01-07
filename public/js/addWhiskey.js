
$(document).ready(function () {

    let whiskeyName = $('#whiskeyname');
    let price = $('#price');

    $(document).on('submit', '#addwhiskey-form', function (event) {
        event.preventDefault();
        let whiskeyType = $('#whiskeyType').find(':selected').text();
        console.log($('#whiskeyType').find(':selected').text())
        console.log(whiskeyName.val())
        console.log(price.val())

        if (!whiskeyName.val().trim().trim()) {
            return;
        }

        createWhiskey({
            name: whiskeyName.val().trim(),
            type: whiskeyType,
            price: price.val().trim()
        })
    })

    function createWhiskey(whiskeyData) {
        console.log(whiskeyData)
        $.post("/api/addWhiskey", whiskeyData)

    }
})