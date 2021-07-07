// HTML Variables
var checkbox = $("input[name=checkbox]"); // Grabs all of the checkboxes
var submitBtn = $("#buttonTest"); // Detects when submit is clicked

var filters = []; // 

checkbox.click('change', function() {
if (this.checked) {
    $(this).parent().css('background', '#E88C31');
    console.log($(this).val());

    if($.inArray($(this).val(), filters) == -1)
    {
        filters.push($(this).val());
        console.log(filters);
        console.log($.inArray($(this).val(), filters));
    }

    else
    {
        console.log("Already In!");
    }
    
} 
else {
    filters.splice(filters.indexOf($.inArray($(this).val(), filters)), 1);
    console.log(filters);
    $(this).parent().css('background', '#225B94');
}
});

submitBtn.click(function ()
{
    console.log(filters.toString());
})