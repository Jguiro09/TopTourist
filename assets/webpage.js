// HTML Variables
var checkbox = $("input[name=checkbox]"); // Grabs all of the checkboxes
var submitBtn = $(".submitStyle"); // Detects when submit is clicked
var title = $("#title"); // Grabs the title of the page
var aside2 = $('.aside2');
var aside3 = $('.aside3');

var filters = []; // An array for the filters to be put in to

aside2.slideUp(0);

// if(title.children().text() == "FOOD") // Checks if the 
// {
//     localStorage.setItem("check", 0);
// }

// else
// {
//     localStorage.setItem("check", 1);
//     console.log("good luck");
// }

// checkbox.click('change', function() {
// if (this.checked) {
//     $(this).parent().css('background', '#E88C31');
//     console.log($(this).val());

//     if($.inArray($(this).val(), filters) == -1)
//     {
//         filters.push($(this).val());
//         console.log(filters);
//         console.log($.inArray($(this).val(), filters));
//     }

//     else
//     {
//         console.log("Already In!");
//     }
    
// } 

// else {
//     filters.splice(filters.indexOf($.inArray($(this).val(), filters)), 1);
//     console.log(filters);
//     $(this).parent().css('background', '#225B94');
// }
// });



submitBtn.click(function ()
{
    aside2.slideDown();
    // localStorage.setItem("filters", filters.toString());
    // console.log(filters.toString());
})

