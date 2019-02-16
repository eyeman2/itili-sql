$(document).ready(function () {
    // var good = $('#good');
    // var soso = $('.soso');
    // var bad = $(".bad");
    // var ratings;

    var url = window.location.search;
    ratedItems = $(".rated_items");
    var listGood = $("#listGood");
    var listBad = $("#listBad");
    var listSoSo = $("#listSoSo");
    var modal = $(".modal");
    var showList = $("#show-list");
    var rated = $(".rated");
    
    $(document).on("click", ".deleteBtn", handleDelete)
    // get the list of rated items
    getList();

    function setList(rating) {

        var ratingItem = $('<div>');
        ratingItem.addClass("rated_items");
        ratingItem.data("rating", rating);
        var name = $("<p>");
        var h5item = $(`<h5>ITEM: </h5>`);
        var brand = $("<p>");
        var h5brand = $("<h5>BRAND/LOC:  </h5>");
        var category = $("<p>");
        var h5cat = $("<h5>CATEGORY:</h5>");
        var score = $("<p>" + rating.rating.toUpperCase() + "</p>");
        // var h5score = $("<h5>SCORE:</h5>");
        var note = $("<p>" + rating.note + "</p>")
        var buttons = $("<div>");
        var editBtn = $("<button>");
        var iconEdit = $("<i>edit</i>");        
        var deleteBtn = $("<button>");
        var iconDelete = $("<i>delete_forever</i>");
        var edit = $("<p>Edit</p>");
        var remove = $("<p>Delete</p>");
        var itemDiv = $("<div>");
        var brandDiv = $("<div>");
        var catDiv = $("<div>");
        var scoreDiv = $("<div>");
        score.attr("id", "scoreP");
        buttons.addClass("eachItem-button");
        itemDiv.addClass("eachItem");
        brandDiv.addClass("eachItem");
        catDiv.addClass("eachItem");
        scoreDiv.addClass("eachItem");
        editBtn.addClass("editBtn");
        deleteBtn.addClass("deleteBtn");   
        buttons.append(editBtn);
        buttons.append(deleteBtn);  
        edit.addClass("hid-edit");
        remove.addClass("hid-delete");
        iconEdit.addClass("material-icons");
        editBtn.append(iconEdit);
        editBtn.prepend(edit);
        iconDelete.addClass("material-icons");
        deleteBtn.append(iconDelete);
        deleteBtn.prepend(remove);
        name.attr("href", "/api/" + rating.id);
        name.append(rating.item)
        itemDiv.append(h5item)
        itemDiv.append(name);   
        brand.append(rating.brand_location);
        brandDiv.append(h5brand);
        brandDiv.append(brand);
        category.append(rating.category)
        catDiv.append(h5cat);
        catDiv.append(category);
        // scoreDiv.append(h5score);
        scoreDiv.append(score);        
        ratingItem.append(scoreDiv);
        ratingItem.append(itemDiv);
        ratingItem.append(brandDiv);
        ratingItem.append(catDiv);
        ratingItem.append(note);        
        ratingItem.append(buttons);
       
        // rated_items.append(ratingItem);
        return ratingItem
    }

    function modalList(rating) {

        var modalBox = $("<div>");
        var brand = $("<p>" + rating.brand_location + "</p>");
        var category = $("<p>" + rating.category + "</p>");
        var note = $("<p>" + rating.note + "</p>");
        modalBox.append(brand);
        modalBox.append(category);
        modalBox.append(note);
        modal.append(modalBox);
        console.log("show rating details" +rating)
    }

    $("a").on("hover", function(){
        modalList()
    })
    
    $("#category").on("click", function() {
    $("#show-list").empty(),
        $.get("api/likes", function (data) {
            for (var i = 0; i < data.length; i++) {
                (handleCategoryList(data[i]))
                }
        })
    })
    $("#brand").on("click", function() {
        $("#show-list").empty(),
            $.get("api/likes", function (data) {
                for (var i = 0; i < data.length; i++) {
                    (handleBrandList(data[i]))
                    }
            })
        })
        $("#items").on("click", function() {
            $("#show-list").empty(),
                $.get("api/likes", function (data) {
                    for (var i = 0; i < data.length; i++) {
                        (handleItemsList(data[i]))
                        }
                })
            })
            
    function handleCategoryList(name){
        // var div = $("<div>");
        var listButton = $("<button type=button>" + name.category + "</button>");
        listButton.data("category", name);
        listButton.addClass("showButton");
        listButton.attr("id", name.id);
        showList.append(listButton);
    }

    function handleItemsList(name){
        // var div = $("<div>");
        var listButton = $("<button type=button>" + name.item + "</button>");
        listButton.data("category", name);
        listButton.addClass("showButton");
        listButton.attr("id", name.id);
        showList.append(listButton);
    }
    
    function handleBrandList(name){
        // var div = $("<div>");
        var listButton = $("<button type=button>" + name.brand_location + "</button>");
        listButton.data("category", name);
        listButton.addClass("showButton");
        listButton.attr("id", name.id);
        showList.append(listButton);
    }
   
    function handleShowList() {
        
    }
    function getList() {
        var itemRating = "/rating/?=" + itemRating;
        $.get("/api/likes", function(data){
            for (var i = 0; i < data.length; i++) {
                rated.append(setList(data[i]))
            }    
        })
    }

    function handleDelete() {
        var listItemData = $(this).parent("div").parent("div").data("rating");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/likes/" + id
        })
        .then(function() {
            location.reload(true)
        })
       }

       function handleEdit(){
           var updatePost = $(this).parent("div").parent("div").data("rating");
       }

})