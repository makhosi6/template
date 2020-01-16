//Array.from()
//slice(0,1)
//join('')
//#minimalist


let mnth = Array.from(Date());
let d = mnth.slice(4, 21).join('');
document.querySelector('.date').innerHTML = "Posted on  " + d;