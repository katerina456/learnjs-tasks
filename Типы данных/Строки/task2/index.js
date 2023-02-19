console.log(checkSpam('buy ViAgRA now')) // true
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam("innocent rabbit"))// false

function checkSpam(str) {
    if (str.toLowerCase().includes('xxx') || 
        str.toLowerCase().includes('viagra')) return true;
    
    return false;
}