let orderByForks = {
  sort:function(obj){
    return obj.sort((a,b)=>b.forks - a.forks);
  }
}

module.exports = orderByForks;
