$(function() {
  //doc ready opening tags

  function attackChar (attackerName, attackerSide, attackerHealth, attackerBaseAttack, attackerDefense) {
    this.name = attackerName;
    this.side = attackerSide;
    this.health = attackerHealth;
    this.attack = attackerBaseAttack;
    this.defense = attackerDefense;
  }

  function defendChar (defenderName, defenderSide, defenderHealth, defenderBaseAttack, defenderDefense) {
    this.name = defenderName;
    this.side = defenderSide;
    this.health = defenderHealth;
    this.attack = defenderBaseAttack;
    this.defense = defenderDefense;
  }

  var quigon = new attackChar ("Qui-gon Jinn", "Jedi", 150, 16, 15);
  var obiwan = new attackChar ("Obi-Wan Kenobi", "Jedi", 120, 8, 22);
  var luke = new attackChar ("Luke Skywalker", "Jedi", 100, 13, 5);
  var rey = new attackChar ("Rey", "Jedi", 130, 18, 10);
  var sidious = new attackChar ("Darth Sidious", "Sith", 160, 20, 8);
  var maul = new attackChar ("Darth Maul", "Sith", 125, 15, 20);
  var vader = new attackChar ("Darth Vader", "Sith", 100, 16, 18);
  var kylo = new attackChar ("Kylo Ren", "Sith", 95, 13, 16);

  var quigon2 = new defendChar ("Qui-gon Jinn", "Jedi", 150, 16, 15);
  var obiwan2 = new defendChar ("Obi-Wan Kenobi", "Jedi", 120, 8, 22);
  var luke2 = new defendChar ("Luke Skywalker", "Jedi", 100, 13, 5);
  var rey2 = new defendChar ("Rey", "Jedi", 130, 18, 10);
  var sidious2 = new defendChar ("Darth Sidious", "Sith", 160, 20, 8);
  var maul2 = new defendChar ("Darth Maul", "Sith", 125, 15, 20);
  var vader2 = new defendChar ("Darth Vader", "Sith", 100, 16, 18);
  var kylo2 = new defendChar ("Kylo Ren", "Sith", 95, 13, 16);

  var attacker = {};
  var defender = {};

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
    Object.assign(defender, sidious2);
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
    Object.assign(defender, maul2);
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
    Object.assign(defender, vader2);
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
    Object.assign(defender, kylo2);
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
    Object.assign(defender, quigon2);
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
    Object.assign(defender, obiwan2);
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
    Object.assign(defender, luke2);
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
    Object.assign(defender, rey2);
    console.log(defender);
  });

  // *~*~*~*~*~*~*~ Fight, Fight, Fight *~*~*~*~*~*~*~
  
// Check if attacker is alive
  //if no, player loses and game ends
  //if yes, game continues
//Check if defender is alive
  //if yes, continue with current opponent
  //if no, check remaining opponent array for remaining opponents 
      //if remaining opponents, prompt player to choose new opponent
      //if no remaining opponents, player wins


  

  var { attackerName, attackerSide, attackerHealth, attackerBaseAttack, attackerDefense } = attacker;
  var { defenderName, defenderSide, defenderHealth, defenderAttack, defenderDefense } = defender;
  var attackCount = 1;
  var attackerAttack = attackCount * attackerBaseAttack;
  var currentAttackerHealth = attackerHealth - defenderDefense;
  var currentDefenderHealth = defenderHealth - attackerAttack; 

 
      $('#attackButton').on("click", function attack() {
        console.log("Attack.");
        console.log(attacker);
        console.log(defender);
        console.log(attackCount);
        
  

      });

      
    
 









}); //doc ready closing tags
