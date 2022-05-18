$(document).ready(function(){
    let url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'"
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: function(data){
            $.each(data.query.pages, function(index, value){
                console.log(value.title)
            })
        } 
    });
});