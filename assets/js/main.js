window.onload = function () {
    lax.init()

    const container = document.querySelector('#section-four .container')

    lax.addDriver('containerScrollX', function () {
        return container.scrollLeft
    })

    lax.addElements(".bg", {
        containerScrollX: {
            "opacity": [
                ["screenWidth * (index-1)", "screenWidth * index", "screenWidth * (index+1)"],
                [0, 1, 0],
            ],
        }
    })

    const imageAnimationMap = ["elCenterX-elWidth", "elCenterX", "elCenterX+elWidth"]
    const textAnimationMap = ["elCenterX-(elWidth/3)", "elCenterX", "elCenterX+(elWidth/3)"]

    lax.addElements(".page h1", {
        containerScrollX: {
            translateY: [
                textAnimationMap,
                [200, 0, 200],
                {
                    easing: 'easeInOutQuad',
                }
            ],
            opacity: [
                textAnimationMap,
                [0, 1, 0],
            ],
        }
    })

    lax.addElements(".page p", {
        containerScrollX: {
            translateY: [
                textAnimationMap,
                [500, 0, 500],
                {
                    easing: 'easeInOutQuad',
                }
            ],
            opacity: [
                textAnimationMap,
                [0, 1, 0],
            ],
        }
    })

    lax.addElements(".page .image", {
        containerScrollX: {
            translateY: [
                imageAnimationMap,
                [-100, 0, -100],
                {
                    easing: 'easeInOutQuad',
                }
            ],
            scale: [
                imageAnimationMap,
                [0.8, 1, 0.8],
                {
                    easing: 'easeInOutQuad',
                }
            ],
        }
    })
}

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function scrollFunction() {
    let el = document.querySelector("#cc");
    if (el.scrollTop > vh(99)) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}

// 漢堡選單    透過 on 隨時監聽
$(document).ready(function () {
    $('#cc').scroll(scrollFunction);
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    })
    //第二層第三層menu
    $(".linkBtn").click(function(){
        $(".secondNav").slideToggle();
    });
    $(".storymapBtn").click(function(){
        $(".thirdNav").slideToggle();
    });

    $('.card01').hover(function () {
        $('#dot1').show();
    }, function () {
        $('#dot1').hide();
    });
    $('.card01').click(function () {
        window.location.href = "./information01.html";
    })
    $('.card02').hover(function () {
        $('#dot2').show();
    }, function () {
        $('#dot2').hide();
    });
    $('.card02').click(function () {
        window.location.href = "./information02.html";
    })
    $('.card03').hover(function () {
        $('#dot3').show();
    }, function () {
        $('#dot3').hide();
    });
    $('.card03').click(function () {
        window.location.href = "./information03.html";
    })
    $('.card04').hover(function () {
        $('#dot4').show();
    }, function () {
        $('#dot4').hide();
    });
    $('.card04').click(function () {
        window.location.href = "./information04.html";
    })
    $('.card05').hover(function () {
        $('#dot5').show();
    }, function () {
        $('#dot5').hide();
    });
    $('.card05').click(function () {
        window.location.href = "./information05.html";
    })
    $('.card06').hover(function () {
        $('#dot6').show();
    }, function () {
        $('#dot6').hide();
    });
    $('.card06').click(function () {
        window.location.href = "./information06.html";
    })
    $('.card07').hover(function () {
        $('#dot7').show();
    }, function () {
        $('#dot7').hide();
    });
    $('.card07').click(function () {
        window.location.href = "./information07.html";
    })
    $('.card08').hover(function () {
        $('#dot8').show();
    }, function () {
        $('#dot8').hide();
    });
    $('.card08').click(function () {
        window.location.href = "./information08.html";
    })
    $('.card09').hover(function () {
        $('#dot9').show();
    }, function () {
        $('#dot9').hide();
    });
    $('.card09').click(function () {
        window.location.href = "./information09.html";
    })
    $('.card10').hover(function () {
        $('#dot10').show();
    }, function () {
        $('#dot10').hide();
    });
    $('.card10').click(function () {
        window.location.href = "./information10.html";
    })
    $("#left").click(function () {
        let c = document.querySelector("#section-four .container");
        let current = c.scrollLeft;
        c.scroll({
            left: current - 1000,
            behavior: "smooth"
        });

    });
    $("#right").click(function () {
        let c = document.querySelector("#section-four .container");
        let current = c.scrollLeft;
        c.scroll({
            left: current + 1000,
            behavior: "smooth"
        });
    });

    $(".tab").each(function (index) {
        $(this).click(function (e) {
            triggletab();
            triigletabcontent();
            $(this).toggleClass("active");
            $(".tab-c")
                .eq(index)
                .toggleClass("active");
        });
    });



    $("#timeline01").click(function () {
        window.open("timeline01.html", '_blank');
        //window.location.href = "timeline01.html"
    });

    $("#timeline02").click(function () {
        window.open("timeline02.html", '_blank');
    });

    $("#timeline03").click(function () {
        window.open("timeline03.html", '_blank');
    });

    $("#timeline04").click(function () {
        window.open("timeline04.html", '_blank');
    });

    //to remove all tab headers
    function triggletab() {
        $(".tab").each(function () {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent() {
        $(".tab-c").each(function () {
            $(this).removeClass("active");
        });
    }
})

var el1 = document.querySelector('.obj1');
el1.addEventListener("mouseover", () => {
    el1.classList.add('animate__bounce');
    elt = document.querySelector('.obj1Text');
    elt.classList.add('textpopup1');
}, false);
el1.addEventListener("mouseleave", () => {
    el1.classList.remove('animate__bounce')
    elt = document.querySelector('.obj1Text');
    elt.classList.remove('textpopup1');
}, false);
el1.addEventListener("click", () => {
    window.location.href = "#section-three";
}, false);
var el2 = document.querySelector('.obj2');
el2.addEventListener("mouseover", () => {
    el2.classList.add('animate__bounce');
}, false);
el2.addEventListener("mouseleave", () => {
    el2.classList.remove('animate__bounce');
}, false);
el2.addEventListener("click", () => {
    window.location.href = "#section-six";
}, false);
var el3 = document.querySelector('.obj3');
el3.addEventListener("mouseover", () => {
    el3.classList.add('animate__bounce');
    elt = document.querySelector('.obj2Text');
    elt.classList.add('textpopup2');
}, false);
el3.addEventListener("mouseleave", () => {
    el3.classList.remove('animate__bounce');
    elt = document.querySelector('.obj2Text');
    elt.classList.remove('textpopup2');
}, false);
el3.addEventListener("click", () => {
    window.location.href = "#section-five";
}, false);
var el4 = document.querySelector('.obj4');
el4.addEventListener("mouseover", () => {
    el4.classList.add('animate__bounce');
    elt = document.querySelector('.obj3Text');
    elt.classList.add('textpopup3');
}, false);
el4.addEventListener("mouseleave", () => {
    el4.classList.remove('animate__bounce');
    elt = document.querySelector('.obj3Text');
    elt.classList.remove('textpopup3');
}, false);
el4.addEventListener("click", () => {
    window.location.href = "#section-four";
}, false);

var elcs = document.querySelectorAll(".card");
for (let i = 0; i < elcs.length; i++) {
    let elc = elcs[i];
    elc.addEventListener("mouseover", () => {
        let overlay = document.querySelector("#overlay");
        overlay.classList.add("show");
    });
    elc.addEventListener("mouseleave", () => {
        let overlay = document.querySelector("#overlay");
        overlay.classList.remove("show");
    });
}