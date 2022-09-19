const myConst=('global');
function myFun() {
    const myConst=('local');
    console.log('local result is:', myConst);
    return myConst;
}
myFun();
console.log('global result is:', myConst);