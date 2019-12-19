$(document).ready(function () {

    let username = $('#username');
    let over21 = $('#over21')

    $(document).on('submit', '#adduser-form', function (event) {
        event.preventDefault();
        console.log(username, over21);
    })

})