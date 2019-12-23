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
});

$('#obi-wan').on("click", function() {
    $('.qui-gon').addClass('hidden');
    $('.luke').addClass('hidden');
    $('.rey').addClass('hidden');
    $('#jedi-opponents').removeClass('hidden');
});

$('#luke').on("click", function() {
    $('.obi-wan').addClass('hidden');
    $('.qui-gon').addClass('hidden');
    $('.rey').addClass('hidden');
    $('#jedi-opponents').removeClass('hidden');
});

$('#rey').on("click", function() {
    $('.obi-wan').addClass('hidden');
    $('.luke').addClass('hidden');
    $('.qui-gon').addClass('hidden');
    $('#jedi-opponents').removeClass('hidden');
});

//sith
$('#sidious').on("click", function() {
    $('.maul').addClass('hidden');
    $('.vader').addClass('hidden');
    $('.kylo').addClass('hidden');
    $('#sith-opponents').removeClass('hidden');
});

$('#maul').on("click", function() {
    $('.sidious').addClass('hidden');
    $('.vader').addClass('hidden');
    $('.kylo').addClass('hidden');
    $('#sith-opponents').removeClass('hidden');
});

$('#vader').on("click", function() {
    $('.maul').addClass('hidden');
    $('.sidious').addClass('hidden');
    $('.kylo').addClass('hidden');
    $('#sith-opponents').removeClass('hidden');
});

$('#kylo').on("click", function() {
    $('.maul').addClass('hidden');
    $('.sidious').addClass('hidden');
    $('.vader').addClass('hidden');
    $('#sith-opponents').removeClass('hidden');
});
















}); //doc ready closing tags