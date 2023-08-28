let backToTop = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function toTheTop() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}