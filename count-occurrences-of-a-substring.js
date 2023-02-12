function countSubstring(str, subStr,index = 0,counter = 0) {
    
    index = str.indexOf(subStr,index);
    if(index>=0)
    {return countSubstring(str,subStr,index+subStr.length,++counter)}
    return counter
}