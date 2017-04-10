var people = [  
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    }
]

function combineUsers(user) {
//take an array of objects in 
//loop through the array
// check if each property in each object is the same. if it is, i can combine them (if they are numbers). if it is a string, return the same string.
//return the new array with the edited objects.

for(var i = 0; i < user.length; i++){
    if (user[i].name === user[i+1].name && user[i].email === user[i+1].email) {
        user[i].numFriends = user[i+1].numFriends + user[i].numFriends;
        user.splice(i+1, 1);
    } return user;
    
} 
}

console.log(combineUsers(people));