//isPalindrome

export default function isPalindrome([str]) {
  for(var i = str.length; i >= 0; i--) {

    var revstr = str[i]
    return revstr;
  }

  if (str === revstr) {
    return true;
  } else {
    return false;
  }
 }
// isPalindrome('radar')
// => true

//isPalindrome('bananas')
// => false

//isPalindrome('A man, a plan, a canal: Panama')
// => true
