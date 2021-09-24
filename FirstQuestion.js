function treeConstructor(strArr) { 
    var arr = [], c= {};
    for (i=0;i < strArr.length;i++){
      arr.push(strArr[i].match(/[0-9]/g)[0]);
      arr.push(strArr[i].match(/[0-9]/g)[1]);
    }
    arr.forEach(function(x){c[x] = (c[x] || 0 ) + 1});
    for(j in c){
      if (c[j] >=4){
        return false;
      }
    }
    return true;
  }
  
  treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]); //True

  treeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]); //False