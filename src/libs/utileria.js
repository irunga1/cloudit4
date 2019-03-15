function utilery(){
    console.log('utilery');
}
utilery.prototype.removeLastString = function(varString){
    
    var temp = varString.split("/");
    var ntemp = "";
    for(i=0;i<temp.length-1;i++){
        if(temp.length !=i){
            ntemp+=temp[i]+"/";
        }
        else{
            ntemp+=temp[i];
        }
        
    }
    return ntemp;    
    
  
    
}

module.exports = utilery;