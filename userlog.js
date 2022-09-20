// For brouser
let userName=prompt('What is your login?', '');
let result;
if (userName==='admin') {
    let pass=prompt('What is your password?', '');
    if (pass==='password') {
        result=('You are identifie\n hello mr. Admin')
    } else if (pass==='' || pass===null) {
        result=('You are not undentifie\n You closed undentifie data');
    } else {
        result=('You are not undentifie\n You have wrong password, try again');
    }
} else if (userName==='' || userName===null) {
    result=('You are not undefitie\n You closed undefitie data -.-');
} else {
    result=('You are not undentifie\n You are not in the databas');
}
alert(result);
console.log(result);
