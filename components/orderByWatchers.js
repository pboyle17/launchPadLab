let orderByWatchers = {
  sort:function(obj){
    return obj.sort((a,b)=>b.watchers-a.watchers);
  }
}

module.exports = orderByWatchers;
