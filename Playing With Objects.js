var users = [{name: "Michael", age:37},{name: "John", age:30}, {name:"David", age:27}];
console.log(users[1].age)
console.log(users[0].name)

function userNames (){
var text = "";
for (var i = 0; i <=2; i++) {
    var name = users[i].name;
    var age = users[i].age;
    text+= name + " - " + age + " ";
    }
    return text;
}
console.log(userNames())
