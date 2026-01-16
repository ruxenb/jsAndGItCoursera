let userRole = "admin";
let accessLevel;

if(userRole == "admin"){
    accessLevel = "Full access granted";

}else if(userRole == "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

//==================================

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    } 
} else {
    userMessage = "Please log in to access the system.";
}
 
console.log(userMessage);


//=================================


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Administrator";
        break;
    case "subscriber":
            userCategory = "Administrator";
            break;
        
    default:
        userCategory = "Unknown";
}

console.log(userCategory);


//===================================

let isAuthenticated = true;
let authenticatedStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication status: ", authenticatedStatus)