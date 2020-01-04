
$(function() {
  //doc ready opening tags
 
  function attackChar(
    attackerName,
    attackerSide,
    attackerHealth,
    attackerBaseAttack,
    attackerDefense
  ) {
    this.name = attackerName;
    this.side = attackerSide;
    this.health = attackerHealth;
    this.attack = attackerBaseAttack;
    this.defense = attackerDefense;
  }

  function defendChar(
    defenderName,
    defenderSide,
    defenderHealth,
    defenderBaseAttack,
    defenderDefense
  ) {
    this.name = defenderName;
    this.side = defenderSide;
    this.health = defenderHealth;
    this.attack = defenderBaseAttack;
    this.defense = defenderDefense;
  }

  var quigon = new attackChar("Qui-gon Jinn", "Jedi", 150, 16, 15);
  var obiwan = new attackChar("Obi-Wan Kenobi", "Jedi", 120, 8, 22);
  var luke = new attackChar("Luke Skywalker", "Jedi", 100, 13, 5);
  var rey = new attackChar("Rey", "Jedi", 130, 18, 10);
  var sidious = new attackChar("Darth Sidious", "Sith", 160, 20, 8);
  var maul = new attackChar("Darth Maul", "Sith", 125, 15, 20);
  var vader = new attackChar("Darth Vader", "Sith", 100, 16, 18);
  var kylo = new attackChar("Kylo Ren", "Sith", 95, 13, 16);

  var quigon2 = new defendChar("Qui-gon Jinn", "Jedi", 150, 16, 15);
  var obiwan2 = new defendChar("Obi-Wan Kenobi", "Jedi", 120, 8, 22);
  var luke2 = new defendChar("Luke Skywalker", "Jedi", 100, 13, 5);
  var rey2 = new defendChar("Rey", "Jedi", 130, 18, 10);
  var sidious2 = new defendChar("Darth Sidious", "Sith", 160, 20, 8);
  var maul2 = new defendChar("Darth Maul", "Sith", 125, 15, 20);
  var vader2 = new defendChar("Darth Vader", "Sith", 100, 16, 18);
  var kylo2 = new defendChar("Kylo Ren", "Sith", 95, 13, 16);

  var attacker = {};
  var defender = {};
  var remainingJediOpponents = [1, 2, 3, 4];
  var remainingSithOpponents = [1, 2, 3, 4];
  var attackCount = 1;

  function selectOpponent(){
      $("#myModal3").modal({backdrop: "static"});
      $("#myModal3").modal('show');
  }

  function attackerStats() {
    $('.attacker-stats').text("Health: " + attacker.health);
    console.log("attacker stats check");
  }

  function defenderStats () {
    $('.defender-stats').text("Health: " + defender.health);
    console.log("defender stats check");
  }

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
    $('.attackButton').removeClass('hidden');
    $("#jedi-characters").addClass("hidden");
    $("#jedi-opponents").removeClass("hidden");
    Object.assign(attacker, quigon);
    attackerStats();
    console.log(attacker);
  });

  $("#obi-wan").on("click", function() {
    $(".obi-wan")
      .appendTo("#attacker-jedi")
      .addClass("attacker");
    $("#obi-wan").addClass("hidden");
    $('.attackButton').removeClass('hidden');
    $("#jedi-characters").addClass("hidden");
    $("#jedi-opponents").removeClass("hidden");
    Object.assign(attacker, obiwan);
    attackerStats();
    console.log(attacker);
  });

  $("#luke").on("click", function() {
    $(".luke")
      .appendTo("#attacker-jedi")
      .addClass("attacker");
    $("#luke").addClass("hidden");
    $('.attackButton').removeClass('hidden');
    $("#jedi-characters").addClass("hidden");
    $("#jedi-opponents").removeClass("hidden");
    Object.assign(attacker, luke);
    attackerStats();
    console.log(attacker);
  });

  $("#rey").on("click", function() {
    $(".rey")
      .appendTo("#attacker-jedi")
      .addClass("attacker");
    $("#rey").addClass("hidden");
    $('.attackButton').removeClass('hidden');
    $("#jedi-characters").addClass("hidden");
    $("#jedi-opponents").removeClass("hidden");
    Object.assign(attacker, rey);
    attackerStats();
    console.log(attacker);
  });

  //sith
  $("#sidious").on("click", function() {
    $(".sidious")
      .appendTo("#attacker-sith")
      .addClass("attacker");
    $("#sidious").addClass("hidden");
    $('.attackButton').removeClass('hidden');
    $("#sith-characters").addClass("hidden");
    $("#sith-opponents").removeClass("hidden");
    Object.assign(attacker, sidious);
    attackerStats();
    console.log(attacker);
  });

  $("#maul").on("click", function() {
    $(".maul")
      .appendTo("#attacker-sith")
      .addClass("attacker");
    $("#maul").addClass("hidden");
    $('.attackButton').removeClass('hidden');
    $("#sith-characters").addClass("hidden");
    $("#sith-opponents").removeClass("hidden");
    Object.assign(attacker, maul);
    attackerStats();
    console.log(attacker);
  });

  $("#vader").on("click", function() {
    $(".vader")
      .appendTo("#attacker-sith")
      .addClass("attacker");
    $("#vader").addClass("hidden");
    $('.attackButton').removeClass('hidden');
    $("#sith-characters").addClass("hidden");
    $("#sith-opponents").removeClass("hidden");
    Object.assign(attacker, vader);
    attackerStats();
    console.log(attacker);
  });

  $("#kylo").on("click", function() {
    $(".kylo")
      .appendTo("#attacker-sith")
      .addClass("attacker");
    $("#kylo").addClass("hidden");
    $('.attackButton').removeClass('hidden');
    $("#sith-characters").addClass("hidden");
    $("#sith-opponents").removeClass("hidden");
    Object.assign(attacker, kylo);
    attackerStats();
    console.log(attacker);
  });

  // *~*~*~*~*~*~*~ Choose an opponent *~*~*~*~*~*~*~

  //Jedi Opponents
  $("#sidious2").on("click", function() {
    $(".sidious2")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#sidious2").remove();
    $("#jedi-opponents")
      .contents()
      .appendTo("#remaining-opponents");
    $(".maul2")
      .removeClass("maul2")
      .addClass("maul3");
    $(".vader2")
      .removeClass("vader2")
      .addClass("vader3");
    $(".kylo2")
      .removeClass("kylo2")
      .addClass("kylo3");
    $("#jedi-opponents").addClass("hidden");
    $('h2').remove('.opponents');
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
    $("#jedi-opponents")
      .contents()
      .appendTo("#remaining-opponents");
    $(".sidious2")
      .removeClass("maul2")
      .addClass("sidious3");
    $(".vader2")
      .removeClass("vader2")
      .addClass("vader3");
    $(".kylo2")
      .removeClass("kylo2")
      .addClass("kylo3");
    $("#jedi-opponents").addClass("hidden");
    $('h2').remove('.opponents');
    $(".arena").removeClass("hidden");
    $("#attacker-sith").addClass("hidden");
    $("#defender-jedi").addClass("hidden");
    Object.assign(defender, maul2);
    defenderStats();
    console.log(defender);
  });

  $("#vader2").on("click", function() {
    $(".vader2")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#vader2").remove();
    $("#jedi-opponents")
      .contents()
      .appendTo("#remaining-opponents");
    $(".maul2")
      .removeClass("maul2")
      .addClass("maul3");
    $(".sidious2")
      .removeClass("sidious2")
      .addClass("sidious3");
    $(".kylo2")
      .removeClass("kylo2")
      .addClass("kylo3");
    $("#jedi-opponents").addClass("hidden");
    $('h2').remove('.opponents');
    $(".arena").removeClass("hidden");
    $("#attacker-sith").addClass("hidden");
    $("#defender-jedi").addClass("hidden");
    Object.assign(defender, vader2);
    defenderStats();
    console.log(defender);
  });

  $("#kylo2").on("click", function() {
    $(".kylo2")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#kylo2").remove();
    $("#jedi-opponents")
      .contents()
      .appendTo("#remaining-opponents");
    $(".maul2")
      .removeClass("maul2")
      .addClass("maul3");
    $(".vader2")
      .removeClass("vader2")
      .addClass("vader3");
    $(".sidious2")
      .removeClass("sidious2")
      .addClass("sidious3");
    $("#jedi-opponents").addClass("hidden");
    $('h2').remove('#opponents');
    $(".arena").removeClass("hidden");
    $("#attacker-sith").addClass("hidden");
    $("#defender-jedi").addClass("hidden");
    Object.assign(defender, kylo2);
    defenderStats();
    console.log(defender);
  });

  //sith opponents
  $("#qui-gon2").on("click", function() {
    $(".qui-gon2")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#qui-gon2").remove();
    $("#sith-opponents")
      .contents()
      .appendTo("#remaining-opponents");
    $(".obi-wan2")
      .removeClass("obi-wan2")
      .addClass("obi-wan3");
    $(".luke2")
      .removeClass("luke2")
      .addClass("luke3");
    $(".rey2")
      .removeClass("rey2")
      .addClass("rey3");
    $("#sith-opponents").addClass("hidden");
    $('h2').remove('#opponents');
    $(".arena").removeClass("hidden");
    $("#defender-sith").addClass("hidden");
    $("#attacker-jedi").addClass("hidden");
    Object.assign(defender, quigon2);
    defenderStats();
    console.log(defender);
  });

  $("#obi-wan2").on("click", function() {
    $(".obi-wan2")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#obi-wan2").remove();
    $("#sith-opponents")
      .contents()
      .appendTo("#remaining-opponents");
    $(".qui-gon2")
      .removeClass("qui-gon2")
      .addClass("qui-gon3");
    $(".luke2")
      .removeClass("luke2")
      .addClass("luke3");
    $(".rey2")
      .removeClass("rey2")
      .addClass("rey3");
    $("#sith-opponents").addClass("hidden");
    $('h2').remove('#opponents');
    $(".arena").removeClass("hidden");
    $("#defender-sith").addClass("hidden");
    $("#attacker-jedi").addClass("hidden");
    Object.assign(defender, obiwan2);
    defenderStats();
    console.log(defender);
  });

  $("#luke2").on("click", function() {
    $(".luke2")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#luke2").remove();
    $("#sith-opponents")
      .contents()
      .appendTo("#remaining-opponents");
    $(".obi-wan2")
      .removeClass("obi-wan2")
      .addClass("obi-wan3");
    $(".qui-gon2")
      .removeClass("qui-gon2")
      .addClass("qui-gon3");
    $(".rey2")
      .removeClass("rey2")
      .addClass("rey3");
    $("#sith-opponents").addClass("hidden");
    $('h2').remove('#opponents');
    $(".arena").removeClass("hidden");
    $("#defender-sith").addClass("hidden");
    $("#attacker-jedi").addClass("hidden");
    Object.assign(defender, luke2);
    defenderStats();
    console.log(defender);
  });

  $("#rey2").on("click", function() {
    $(".rey2")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#rey2").remove();
    $("#sith-opponents")
      .contents()
      .appendTo("#remaining-opponents");
    $(".obi-wan2")
      .removeClass("obi-wan2")
      .addClass("obi-wan3");
    $(".luke2")
      .removeClass("luke2")
      .addClass("luke3");
    $(".qui-gon2")
      .removeClass("qui-gon2")
      .addClass("qui-gon3");
    $("#sith-opponents").addClass("hidden");
    $('h2').remove('#opponents');
    $(".arena").removeClass("hidden");
    $("#defender-sith").addClass("hidden");
    $("#attacker-jedi").addClass("hidden");
    Object.assign(defender, rey2);
    defenderStats();
    console.log(defender);
  });

  // *~*~*~*~*~*~*~ Remaining Opponents *~*~*~*~*~*~*~

  $("#sidious2").on("click", function() {
    $(".sidious3")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#sidious2").remove();
    $("#myModal3").modal('hide');
    $(".arena").removeClass("hidden");
    remainingJediOpponents.pop();
    Object.assign(defender, sidious2);
    defenderStats();
    // console.log(defender);
  });

  $("#maul2").on("click", function() {
    $(".maul3")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#maul2").remove();
    $("#myModal3").modal('hide');
    $(".arena").removeClass("hidden");
    remainingJediOpponents.pop();
    Object.assign(defender, maul2);
    defenderStats();
    // console.log(defender);
  });

  $("#vader2").on("click", function() {
    $(".vader3")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#vader2").remove();
    $("#myModal3").modal('hide');
    $(".arena").removeClass("hidden");
    remainingJediOpponents.pop();
    Object.assign(defender, vader2);
    defenderStats();
    // console.log(defender);
  });

  $("#kylo2").on("click", function() {
    $(".kylo3")
      .appendTo("#defender-sith")
      .addClass("defender");
    $("#kylo2").remove();
    $("#myModal3").modal('hide');
    $(".arena").removeClass("hidden");
    remainingJediOpponents.pop();
    Object.assign(defender, kylo2);
    defenderStats();
    // console.log(defender);
  });

  $("#qui-gon2").on("click", function() {
    $(".qui-gon3")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#qui-gon2").remove();
    $("#myModal3").modal('hide');
    $(".arena").removeClass("hidden");
    remainingSithOpponents.pop();
    Object.assign(defender, quigon2);
    defenderStats();
    // console.log(defender);
  });

  $("#obi-wan2").on("click", function() {
    $(".obi-wan3")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#obi-wan2").remove();
    $("#myModal3").modal('hide');
    $(".arena").removeClass("hidden");
    remainingSithOpponents.pop();
    Object.assign(defender, obiwan2);
    defenderStats();
    // console.log(defender);
  });

  $("#luke2").on("click", function() {
    $(".luke3")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#luke2").remove();
    $("#myModal3").modal('hide');
    $(".arena").removeClass("hidden");
    remainingSithOpponents.pop();
    Object.assign(defender, luke2);
    defenderStats();
    // console.log(defender);
  });

  $("#rey2").on("click", function() {
    $(".rey3")
      .appendTo("#defender-jedi")
      .addClass("defender");
    $("#rey2").remove();
    $("#myModal3").modal('hide');
    $(".arena").removeClass("hidden");
    remainingSithOpponents.pop();
    Object.assign(defender, rey2);
    defenderStats();
    // console.log(defender);
  });
  // *~*~*~*~*~*~*~ Fight, Fight, Fight *~*~*~*~*~*~*~

  // Check if attacker is alive
  //if no, player loses and game ends
  //if yes, game continues
  //Check if defender is alive
  //if yes, continue with current opponent
  //if no, check remaining opponent array for remaining opponents
  //if remaining opponents, prompt player to choose new opponent
  //function to display array, slice to remove selected opponent, assign object to defender
  //new opponent moves to arena
  //if no remaining opponents, player wins

  

  $(".attackButton").on("click", function attack() {
    console.log("Attack.");

    if (attacker.health > 0) {
      defender.health -= attacker.attack * attackCount;
      attacker.health -= defender.defense;
      attackCount++;
      attackerStats();
      defenderStats();
    } else {
      alert("You lose.");
    }
    if (defender.health <= 0) {
      console.log("check defender");
      // console.log(remainingOpponents);
      $(".defender").remove();
      selectOpponent();
      $("#remaining-opponents").removeClass("hidden");
      $(".arena").addClass("hidden");
      if (
        remainingJediOpponents.length === 0 ||
        remainingSithOpponents.length === 0
      ) {
        alert("You win!");
      }
    }

    console.log(attacker);
    console.log(defender);
    console.log(attackCount);
    console.log(attacker.health);
    console.log(defender.health);
    // console.log(remainingOpponents);
  });
}); //doc ready closing tags
