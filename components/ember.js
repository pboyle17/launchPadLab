let ember = {
  url:"https://api.github.com/repos/emberjs/ember.js",
  logo:'images/emberLogo.png',
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        this.description = x.description;
        resolve(x);
      });
    });
  }
}

module.exports = ember;
