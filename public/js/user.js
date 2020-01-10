
$(document).ready(function () {

    $(document).on("click", "button.delete", deleteWhiskey);

    function deleteWhiskey(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        console.log(id);
        console.log(typeof id)
        $.ajax({
          method: "DELETE",
          url: "/api/Whiskeys/" + id
        }).then(function(){
            location.reload();
        })
      }

})