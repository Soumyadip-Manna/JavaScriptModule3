let userMap = new Map();
// console.log(userInfo);
// userInfo.set("Name","SoumyadipManna");
// userInfo.set("Age" , 15);
// userInfo.set("Email","abc@gmail.com");
// console.log(userInfo);

function adding (name,age,email)
{
    const userInfo = { age, email };
    userMap.set(name,userInfo);

}
adding("Sou",13,"a@gmail.com");
adding("Bob", 25, "bob@example.com");
// console.log(userMap);

function update(name,age,email)
{
    if(userMap.has(name))
    {
        const userInfo = userMap.get(name);
        userInfo.age = age;
        userInfo.email = email;
    }
}
update("Sou",13,"a@gmail.com");
// console.log(userMap);

function del(name)
{
    userMap.delete(name);
}
del("sou");
console.log(userMap);
