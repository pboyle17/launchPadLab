let angular = {
  url:"https://api.github.com/repos/angular/angular.js",
  logo:'images/angularLogo.png',
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        resolve(x);
      });
    });
  }
}

module.exports = angular;
