$(document).ready(function () {
    var modal = document.querySelector('.modal');
    var add = document.querySelector('.fa-plus');
    // var backdrop = document.querySelector('.backdrop');
    var closeButton = document.querySelector('.fa-times');
    // var input = document.querySelector('#request').onkey;
    var addButton = document.querySelector('.add');

    $('.modal-send').on('click', function(event) {
        event.preventDefault();
  
        var newItem = {
            category: $('#category').val().trim().toUpperCase(),
            item: $('#item').val().trim().toUpperCase(),
            brand_location: $('#brand').val().trim().toUpperCase(),
            rating: $('#rating').val().toUpperCase(),
            note: $('#notes').val().trim().toUpperCase(),
        };

        if (!newItem.category || !newItem.item || !newItem.brand_location || !newItem.rating) {
            return
        }  
        $.post("/api/likes", newItem, function() {
            window.location.href = "/list";
        })
        
    })
})
  
       