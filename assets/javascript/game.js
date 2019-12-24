$(function(){ //doc ready opening tags

// *~*~*~*~*~*~*~ Choose a side *~*~*~*~*~*~*~

//if light
    //add visibility class to characters.light
//if dark
    //add visibility class to characters.dark

    $('#Jedi').on("click", function() {
        $('#jedi-characters').removeClass('hidden');
        $('#side').addClass('hidden');
    });

    $('#Sith').on("click", function() {
        $('#sith-characters').removeClass('hidden');
        $('#side').addClass('hidden');
    });

// *~*~*~*~*~*~*~ Choose a character *~*~*~*~*~*~*~

//jedi
$('#qui-gon').on("click", function() {
    $('.obi-wan').addClass('hidden');
    $('.luke').addClass('hidden');
    $('.rey').addClass('hidden');
    $('#jedi-opponents').removeClass('hidden');
    $('this').addClass('selected-character').detach('this').appendTo('#arena');
});

$('#obi-wan').on("click", function() {
    $('.qui-gon').addClass('hidden');
    $('.luke').addClass('hidden');
    $('.rey').addClass('hidden');
    $('#jedi-opponents').removeClass('hidden');
    $('this').addClass('selected-character').detach('this').appendTo('#arena');
});

$('#luke').on("click", function() {
    $('.obi-wan').addClass('hidden');
    $('.qui-gon').addClass('hidden');
    $('.rey').addClass('hidden');
    $('#jedi-opponents').removeClass('hidden');
    $('this').addClass('selected-character').detach('this').appendTo('#arena');
});

$('#rey').on("click", function() {
    $('.obi-wan').addClass('hidden');
    $('.luke').addClass('hidden');
    $('.qui-gon').addClass('hidden');
    $('#jedi-opponents').removeClass('hidden');
    $('this').addClass('selected-character').detach('this').appendTo('#arena');
});

//sith
$('#sidious').on("click", function() {
    $('.maul').addClass('hidden');
    $('.vader').addClass('hidden');
    $('.kylo').addClass('hidden');
    $('#sith-opponents').removeClass('hidden');
    $('this').addClass('selected-character').detach('this').appendTo('#arena');
});

$('#maul').on("click", function() {
    $('.sidious').addClass('hidden');
    $('.vader').addClass('hidden');
    $('.kylo').addClass('hidden');
    $('#sith-opponents').removeClass('hidden');
    $('this').addClass('selected-character').detach('this').appendTo('#arena');
});

$('#vader').on("click", function() {
    $('.maul').addClass('hidden');
    $('.sidious').addClass('hidden');
    $('.kylo').addClass('hidden');
    $('#sith-opponents').removeClass('hidden');
    $('this').addClass('selected-character').detach('this').appendTo('#arena');
});

$('#kylo').on("click", function() {
    $('.maul').addClass('hidden');
    $('.sidious').addClass('hidden');
    $('.vader').addClass('hidden');
    $('#sith-opponents').removeClass('hidden');
    $('this').addClass('selected-character').detach('this').appendTo('#arena');
});

// *~*~*~*~*~*~*~ Choose an opponent *~*~*~*~*~*~*~

//Jedi Opponents
$('#sidious2').on("click", function() {
    $('.maul2').addClass('hidden');
    $('.vader2').addClass('hidden');
    $('.kylo2').addClass('hidden');
    $('this').appendTo('#arena');
    $('jedi-opponents').addClass('hidden');
    $('jedi-characters').addClass('hidden');
    $('.arena').removeClass('hidden');
    // $('confirm-selections').removeClass('hidden').addClass('visible');
});

$('#maul2').on("click", function() {
    $('.sidious2').addClass('hidden');
    $('.vader2').addClass('hidden');
    $('.kylo2').addClass('hidden');
    $('this').addClass('selected-opponent').detach('this').appendTo('#arena');
    // $('confirm-selections').removeClass('hidden').addClass('visible');
});

$('#vader2').on("click", function() {
    $('.maul2').addClass('hidden');
    $('.sidious2').addClass('hidden');
    $('.kylo2').addClass('hidden');
    $('this').addClass('selected-opponent').detach('this').appendTo('#arena');
    // $('confirm-selections').removeClass('hidden').addClass('visible');
});

$('#kylo2').on("click", function() {
    $('.maul2').addClass('hidden');
    $('.sidious2').addClass('hidden');
    $('.vader2').addClass('hidden');
    $('this').addClass('selected-opponent');
    // $('confirm-selections').removeClass('hidden').addClass('visible');
});

//sith opponents
$('#qui-gon2').on("click", function() {
    $('.obi-wan2').addClass('hidden');
    $('.luke2').addClass('hidden');
    $('.rey2').addClass('hidden');
    $('this').addClass('selected-opponent').detach('this').appendTo('#arena');
    // $('confirm-selections').removeClass('hidden').addClass('visible');
});

$('#obi-wan2').on("click", function() {
    $('.qui-gon2').addClass('hidden');
    $('.luke2').addClass('hidden');
    $('.rey2').addClass('hidden');
    $('this').addClass('selected-opponent').detach('this').appendTo('#arena');
    // $('confirm-selections').removeClass('hidden').addClass('visible');
});

$('#luke2').on("click", function() {
    $('.obi-wan2').addClass('hidden');
    $('.qui-gon2').addClass('hidden');
    $('.rey2').addClass('hidden');
    $('this').addClass('selected-opponent').detach('this').appendTo('#arena');
    // $('confirm-selections').removeClass('hidden').addClass('visible');
});

$('#rey2').on("click", function() {
    $('.obi-wan2').addClass('hidden');
    $('.luke2').addClass('hidden');
    $('.qui-gon2').addClass('hidden');
    $('this').addClass('selected-opponent').detach('this').appendTo('#arena');
    // $('confirm-selections').removeClass('hidden').addClass('visible');
});









}); //doc ready closing tags