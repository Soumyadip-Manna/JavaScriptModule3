let obj1 = {
    a:1,
    b:2,
    c:3,
    d:4,
};
function checkProp (param) {
    let noOfProp = Object.keys(param).length;
   console.log(`No of Properties is ${noOfProp}`);
}

checkProp(obj1);