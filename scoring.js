const score = (games) => {
  let team1 = 0;
  let team2 = 0;
  for( let game of games ) {
    let scores = game.split(':');
    if( scores[0] > scores[1] ) {
      team1 += 3;
    }
    else if( scores[0] < scores[1] ) {
      team2 += 3;
    }
    else {
      team1 += 1;
      team2 += 1;
    }
  }
    // In the example on notion only returns team one's score
    return team1
}

console.log(score(['3:1', '2:2', '1:3'])); //ex) ["3:1", "2:2", "1:3"] -> 4
