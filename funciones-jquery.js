console.log("We're using JQuery!");
//17 jQuery effects Methods (19 done):
// .click        : DONE
// .hide         : DONE
// .show         : DONE
// .toggle       : DONE
// .slideDown    : DONE
// .slideUp      : DONE
// .slideToggle  : DONE
// .fadeIn       : DONE
// .fadeOut      : DONE
// .addClass     : DONE
// .removeClass  : DONE
// .before       : DONE
// .after        : DONE
// .append       : DONE
// .html         : DONE
// .css          : DONE
// .attr         : DONE
// .val          : DONE
// .text         : DONE

var imgCats = {
    0: "images/adventure-cat.png",
    1: "images/aidorucat.png",
    2: "images/catandninja.png",
    3: "images/chellocat.jpg",
    4: "images/cherry.jpg",
    5: "images/coder2.jpg",
    6: "images/codercat.jpg",
    7: "images/cooler.png",
    8: "images/daftpunk.gif",
    9: "images/defunktocat.png",
    10: "images/dojocat.jpg",
    11: "images/domo-cat.png",
    12: "images/github.jpg",
    13: "images/heisencat.png",
    14: "images/ironcat.png",
    15: "images/jean-luc-picat.jpg",
    16: "images/kantana.jpg",
    17: "images/linkcat.png",
    18: "images/mario.png",
    19: "images/octobiwan.jpg",
    20: "images/oktobercat.png",
    21: "images/riddlocat.png",
    22: "images/stormtroopocat.png",
    23: "images/visionary.jpg",
}

function randomBetweenMinMax(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let i = 0;
$(document).ready(function() {
    $('img.toggleImages').hide();

    $('#btn-cambiarClase').click(cambiarClase);
    $('#btn-removerClase').click(removerClase);

    $('.Slidetoggle button').click(function(){
        $('.Slidetoggle img').slideToggle("slow");
    });
    $('.toggle button').click(function(){
        $('.toggle img').toggle();
    });
    $('#btn1-append-text').click(appendParrafos);
    $('#btn2-append-list-item').click(appendListItem);

    $(".btn1").click(function(){
        $("#paragraphShowHiden").hide();
    });
    $(".btn2").click(function(){
        $("#paragraphShowHiden").show();
    });
    $("#btn-mostrar").click(mostrarParrafos);
    $("#flip").click(slideUpPanel);
    $('#btn-after').click(mostrarDespuesDeP);
    $('#btn-before').click(mostrarGatosAntesDeImg);
    $('#btn-Attr').click(AgregarAtributoAlGato);
    $("#btn-add-val").click(agregarValorAlInput);
    $("#btn-text-update").click(actualizarTexto);
    $("#btn-html-update").click(AgregarUnGato);
    $("#btn-css-update").click(actualizarBackgroundColor);
});
function cambiarClase() {
    $('.AddClass p').addClass("red");
    console.log("we changed the class");
}
function removerClase() {
    $('.AddClass p').removeClass("red");
    console.log("we removed the class");
}
function appendParrafos(){
    i++;
    $('.Append p').append("<b>  "+i+") Click the button to append a new paragraph!</b>");
}
function appendListItem(){
    $(".Append ol").append("<li>Appended item</li>");
}
function mostrarParrafos(){
    if ($('.FadeOutIn p').is(":visible")) {
        $('.FadeOutIn p').fadeOut();
    } else {
        $('.FadeOutIn p').fadeIn();
    }
}
function slideUpPanel() {
    if ($("#panel").is(":visible")) {
        $("#panel").slideUp("slow");
    } else {
        $("#panel").slideDown("slow");
    }
}
function mostrarDespuesDeP() {
    $(".After p").after("<span>Hello world!</span>");
}
function mostrarGatosAntesDeImg() {
    $(".Before p").before("<img class='gato' src='"+imgCats[randomBetweenMinMax(0,23)]+"'>");
}

function AgregarAtributoAlGato() {
    $("img#gato-daftpunk").attr({"width": "500px", "height": "500px"});
}
function AgregarUnGato() {
    $(".HTML img.gato-IronCat").before("<img class='nuevo-gato' src='"+imgCats[randomBetweenMinMax(0,23)]+"'>");
}
function actualizarBackgroundColor() {
    $(".CSS p").css("background-color", "yellow");
}

function agregarValorAlInput() {
    $("input:text").val("Alan Brito Delgado");
}

function actualizarTexto() {
    $(".Text p").text("This is the new paragraph!");
}