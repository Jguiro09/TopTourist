// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

$(document).ready(function(){
    $('.modal-trigger').leanModal();
    $('.datepicker').datepicker();
    $(".myVenue").slideUp(0);
});

$('select').material_select();

$(".modal").modal({
    onCloseEnd: function()
    {
        $('input[type=checkbox]').prop('checked',false);
    }
})

$(".mySearchButton").click(function ()
{
    $(".myVenue").slideDown();
})