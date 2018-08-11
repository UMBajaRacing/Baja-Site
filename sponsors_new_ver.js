/*$(function () {
    var ogWidthSilver = $('.silver_company').width();
    var ogHeightSilver = $('.silver_company').height();
    var ogWidthBronze = $('.bronze_company').width();
    var ogHeightBronze = $('.bronze_company').height();
    var hovered = false;
    $(".bronze_company").hover(function () {
        if (!hovered) {
            $(this).stop().animate({ height: $('.bronze_company').height() + 40, width: $('.bronze_company').width() + 40 }, 200);
        }
        hovered = true;
    }
        , function () {
            if (hovered) {
                $(this).stop().animate({ height: ogHeightBronze, width: ogWidthBronze }, 200);
            }
            hovered = false;
        }
    );
    $(".silver_company").hover(function () {
        $(this).stop().animate({ height: $('.silver_company').height() + 40, width: $('.silver_company').width() + 40 }, 200);
    }
        , function () {
            $(this).stop().animate({ height: ogHeightSilver, width: ogWidthSilver }, 200);
        }
    );
}); */


function openSponsor(evt, sponsorLevel) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(sponsorLevel).style.display = "block";
    evt.currentTarget.className += " active";
}
