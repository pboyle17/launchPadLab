let orderByIssues = {
  sort:function(obj){
    return obj.sort((a,b)=>b.issues-a.issues).reverse();
  }
}

module.exports = orderByIssues;
