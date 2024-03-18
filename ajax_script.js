function getSize()
{
    // alert("hfj");
    $.ajax({
        url: "ActiveState.html",
        type: "GET",
        success: function(response) {
            // alert("monika");
          $("#cart_page").html(response); 
        },
        error: function(xhr, status, error) {
            // alert("monika");
          console.error("Error loading page:", error);
          
        }
        
      });
}

