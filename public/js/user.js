
$(document).ready(function () {

    let username = $('#username');
    let over21;

    $(document).on('submit', '#adduser-form', function (event) {
        event.preventDefault();
        // console.log('submit on form')
        // console.log(username.val());
        // console.log($('#over21').find(':selected').val());
        over21 = $('#over21').find(':selected').val();

        if (!username.val().trim().trim()) {
            return;
        }

        createUser({
            name: username.val().trim(),
            over21: over21

        })
    })

    function createUser(userData) {
        $.post("/api/addUser", userData)
        console.log(userData)

    }

})