let obj1 = {
    name: 'John',
    age: 16,
};

function checkSpeciedPoperty(exampleObj,propertyName)
{
   return exampleObj.hasOwnProperty(propertyName);
}

console.log(checkSpeciedPoperty(obj1,"name"));