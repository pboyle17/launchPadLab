let orderByForks = require('./orderByForks');
let orderByWatchers = require('./orderByWatchers');
let orderByIssues = require('./orderByIssues');


let recommendation = {
  recommend:function(frameWorksArr){
    frameWorksArr.forEach(frameWork=>frameWork.points=0);
    let forks = orderByForks.sort(frameWorksArr);
    let issues = orderByIssues.sort(frameWorksArr);
    let watchers = orderByWatchers.sort(frameWorksArr);

    for(let y = 0 ; y < forks.length ; y++){
      forks[y].points += y;
    }
    for(let x = 0 ; x < issues.length ; x++){
      issues[x].points += x;
    }
    for(let z = 0 ; z < watchers.length ; z++){
      watchers[z].points += z;
    }

    return frameWorksArr.sort((a,b)=>a.points-b.points)[0];
  }
}

module.exports = recommendation
