function IsNumberValid (begin, end) {
return Begin<0 ||Begin>1000||end<0|| end>1000;
}
function IsSmallOrEqual(begin,end){
return begin<end;
}
function createMultiplyTable(begin,end,IsNumberValid,IsSmallOrEqual){
if(IsNumberValid==false){
return null;
breake;
}
if(IsSmallOrEqual==false){
return "outofbound" ;
break;
}
var message="";
for(var i=begin;i<end;i++){
for(var j=begin;j<end;j++){
message+="i*j="+i*j+" "
if(i==j){
message+="<br/>"
}
}
}
console.log(message);
return message;
}
function createTest(begin,end){
return createMultiplyTable(begin,end);
}
module.exports = {
IsNumberValid,
IsSmallOrEqual,
createMultiplyTable,
createTest
}