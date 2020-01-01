$(function() {
  //doc ready opening tags

  function Char (name, side, health, attack, defense) {
    this.name = name;
    this.side = side;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  var quigon = new Char ("Qui-gon Jinn", "Jedi", 150, 16, 15);
  var obiwan = new Char ("Obi-Wan Kenobi", "Jedi", 120, 8, 22);
  var luke = new Char ("Luke Skywalker", "Jedi", 100, 13, 5);
  var rey = new Char ("Rey", "Jedi", 130, 18, 10);
  var sidious = new Char ("Darth Sidious", "Sith", 160, 20, 8);
  var maul = new Char ("Darth Maul", "Sith", 125, 15, 20);
  var vader = new Char ("Darth Vader", "Sith", 100, 16, 18);
  var kylo = new Char ("Kylo Ren", "Sith", 95, 13, 16);

  var attacker = {};
  var defender = {};


  var attackerHealth = attacker[2];
  var attackerBaseAttack = attacker[3];
  var attackCount = 1;
  var attackerAttack = attackCount * attackerBaseAttack;
  var defenderHealth = defender[2];
  var defenderDefense = defender[4];
  var currentAttackerHealth = attackerHealth - defenderDefense;
  var currentDefenderHealth = defenderHealth - attackerAttack; 

  
    

  // *~*~*~*~*~*~*~ Choose a side *~*~*~*~*~*~*~

  $("#Jedi").on("click", function() {
    $("#jedi-characters").removeClass("hidden");
    $("#side").addClass("hidden");
  });

  $("#Sith").on("click", function() {
    $("#sith-characters").removeClass("hidden");
    $("#side").addClass("hidden");
  });

  // *~*~*~*~*~*~*~ Choose a character *~*~*~*~*~*~*~

  //jedi
  $("#qui-gon").on("click", function() {
    $(".qui-gon")
      .appendTo("#attacker-jedi")
      .addClass("attacker");
    $("#qui-gon").addClass("hidden");
    $('#attackButton').removeClass('hidden')
    Object.assign(attacker, quigon);
    console.log(attacker);
    console.log(attacker.length);
    $("#jedi-characters").addClass("hidden");
    $("#jedi-opponents").removeClass("hidden");
  });

  $("#obi-wan").on("click", function() {
    $(".obi-wan")
      .appendTo("#attacker-jedi")
      .addClass("attacker");
    $("#obi-wan").addClass("hidden");
    var attackButton = document.createElement("button");
    document.getElementById("obi-wan-card").appendChild(attackButton);
    $(attackButton)
      .text("Attack")
      .addClass("btn btn-success")
      .attr("id", "attack");
    $("#jedi-characters").addClass("hidden");
    $("#jedi-opponents").removeClass("hidden");
    Object.assign(attacker, obiwan);
    console.log(attacker);
  });

  $("#luke").on("click", function() {
    $(".luke")
      .appendTo("#attacker-jedi")
      .addClass("attacker");
    $("#luke").addClass("hidden");
    var attackButton = document.createElement("button");
    document.getElementById("luke-card").appendChild(attackButton);
    $(attackButton)
      .text("Attack")
      .addClass("btn btn-success")
      .attr("id", "attack");
    $("#jedi-characters").addClass("hidden");
    $("#jedi-opponents").removeClass("hidden");
    Object.assign(attacker, luke);
    console.log(attacker);
  });

  $("#rey").on("click", function() {
    $(".rey")
      .appendTo("#attacker-jedi")
      .addClass("attacker");
    $("#rey").addClass("hidden");
    var attackButton = document.createElement("button");
    document.getElementById("rey-card").appendChild(attackButton);
    $(attackButton)
      .text("Attack")
      .addClass("btn btn-success")
      .attr("id", "attack");
    $("#jedi-characters").addClass("hidden");
    $("#jedi-opponents").removeClass("hidden");
    Object.assign(attacker, rey);
    console.log(attacker);
  });

  //sith
  $("#sidious").on("click", function() {
    $(".sidious")
      .appendTo("#attacker-sith")
      .addClass("attacker");
    $("#sidious").addClass("hidden");
    var attackButton = document.createElement("button");
    document.getElementById("sidious-card").appendChild(attackButton);
    $(attackButton)
      .text("Attack")
      .addClass("btn btn-danger")
      .attr("id", "attack");
    $("#sith-characters").addClass("hidden");
    $("#sith-opponents").removeClass("hidden");
    Object.assign(attacker, sidious);
    console.log(attacker);
  });

  $("#maul").on("click", function() {
    $(".maul")
      .appendTo("#attacker-sith")
      .addClass("attacker");
    $("#maul").addClass("hidden");
    var attackButton = document.createElement("button");
    document.getElementById("maul-card").appendChild(attackButton);
    $(attackButton)
      .text("Attack")
      .addClass("btn btn-danger")
      .attr("id", "attack");
    $("#sith-characters").addClass("hidden");
    $("#sith-opponents").removeClass("hidden");
    Object.assign(attacker, maul);
    console.log(attacker);
  });

  $("#vader").on("click", function() {
    $(".vader")
      .appendTo("#attacker-sith")
      .addClass("attacker");
    $("#vader").addClass("hidden");
    var attackButton = document.createElement("button");
    document.getElementById("vader-card").appendChild(attackButton);
    $(attackButton)
      .text("Attack")
      .addClass("btn btn-danger")
      .attr("id", "attack");
    $("#sith-characters").addClass("hidden");
    $("#sith-opponents").removeClass("hidden");
    Object.assign(attacker, vader);
    console.log(attacker);
  });

  $("#kylo").on("click", function() {
    $(".kylo")
      .appendTo("#attacker-sith")
      .addClass("attacker");
    $("#kylo").addClass("hidden");
    var attackButton = document.createElement("button");
    document.getElementById("kylo-card").appendChild(attackButton);
    $(attackButton)
      .text("Attack")
      .addClass("btn btn-danger")
      .attr("id", "attack");
    $("#sith-characters").addClass("hidden");
    $("#sith-opponents").removeClass("hidden");
    Object.assign(attacker, kylo);
    console.log(attacker);
  });

  // *~*~*~*~*~*~*~ Choose an opponent *~*~*~*~*~*~*~

  //Jedi Opponents
  $("#sidious2").on("click", function() {
    $(".sidious2")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#sidious2").remove();
    $('.maul2', '.vader2', '.kylo2').appendTo('#remaining-opponents');
    $("#jedi-opponents").addClass("hidden");
    $(".arena").removeClass("hidden");
    $("#attacker-sith").addClass("hidden");
    $("#defender-jedi").addClass("hidden");
    Object.assign(defender, sidious);
    console.log(defender);
  });

  $("#maul2").on("click", function() {
    $(".maul2")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#maul2").remove();
    $('.sidious2', '.vader2', '.kylo2').appendTo('#remaining-opponents');
    $("#jedi-opponents").addClass("hidden");
    $(".arena").removeClass("hidden");
    $("#attacker-sith").addClass("hidden");
    $("#defender-jedi").addClass("hidden");
    Object.assign(defender, maul);
    console.log(defender);
  });

  $("#vader2").on("click", function() {
    $(".vader2")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#vader2").remove();
    $('.maul2', '.sidious2', '.kylo2').appendTo('#remaining-opponents');
    $("#jedi-opponents").addClass("hidden");
    $(".arena").removeClass("hidden");
    $("#attacker-sith").addClass("hidden");
    $("#defender-jedi").addClass("hidden");
    Object.assign(defender, vader);
    console.log(defender);
  });

  $("#kylo2").on("click", function() {
    $(".kylo2")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#kylo2").remove();
    $('.maul2', '.vader2', '.sidious2').appendTo('#remaining-opponents');
    $("#jedi-opponents").addClass("hidden");
    $(".arena").removeClass("hidden");
    $("#attacker-sith").addClass("hidden");
    $("#defender-jedi").addClass("hidden");
    Object.assign(defender, kylo);
    console.log(defender);
  });

  //sith opponents
  $("#qui-gon2").on("click", function() {
    $(".qui-gon2")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#qui-gon2").remove();
    $('.obi-wan2', '.luke2', '.rey2').appendTo('#remaining-opponents');
    $("#sith-opponents").addClass("hidden");
    $(".arena").removeClass("hidden");
    $("#defender-sith").addClass("hidden");
    $("#attacker-jedi").addClass("hidden");
    Object.assign(defender, quigon);
    console.log(defender);
  });

  $("#obi-wan2").on("click", function() {
    $(".obi-wan2")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#obi-wan2").remove();
    $('.qui-gon2', '.luke2', '.rey2').appendTo('#remaining-opponents');
    $("#sith-opponents").addClass("hidden");
    $(".arena").removeClass("hidden");
    $("#defender-sith").addClass("hidden");
    $("#attacker-jedi").addClass("hidden");
    Object.assign(defender, obiwan);
    console.log(defender);
  });

  $("#luke2").on("click", function() {
    $(".luke2")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#luke2").remove();
    $('.obi-wan2', '.qui-gon2', '.rey2').appendTo('#remaining-opponents');
    $("#sith-opponents").addClass("hidden");
    $(".arena").removeClass("hidden");
    $("#defender-sith").addClass("hidden");
    $("#attacker-jedi").addClass("hidden");
    Object.assign(defender, luke);
    console.log(defender);
  });

  $("#rey2").on("click", function() {
    $(".rey2")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#rey2").remove();
    $('.obi-wan2', '.luke2', '.qui-gon2').appendTo('#remaining-opponents');
    $("#sith-opponents").addClass("hidden");
    $(".arena").removeClass("hidden");
    $("#defender-sith").addClass("hidden");
    $("#attacker-jedi").addClass("hidden");
    Object.assign(defender, rey);
    console.log(defender);
  });

  // *~*~*~*~*~*~*~ Fight, Fight, Fight *~*~*~*~*~*~*~
  



// Check if attacker is alive
  //if no, game ends
  //if yes, game continues
//Check if defender is alive
  //if no, replace with new opponent
  //if yes, game continues

 
    
    
 









}); //doc ready closing tags
