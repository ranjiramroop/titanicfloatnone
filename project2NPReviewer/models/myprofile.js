var count = 2;
var userName = userImput;
var Password = userImput;

function validate()
{
    var un = document.login.username.value;
    var pw = document.login.password.vaule;
    var valid = false;
    var userNameArray = ["John","bob"];
    var passwordArray = [userImput];
    for(var i = 0; i < userNameArray.length; i++);
}
    if ((un== userNameArray[i]) && (pw == passwordArray[i]));
    {
        valid = true;
        break;
    }
        if (valid)
    {
        alert("Login was Successful");
        window.location = "";
        return false;
    }
    var again = "tries";
    if (count == 1)
    {
        again = " try "
    }
    if(count >= 1)
    {
        alert(" Wrong Password or Username")
        count --;
    }
    else
    {
        alert (" Incorrect Password or Username, You are now locked out.");
        document.login.username.value = "You are now Locked out";
        document.login.password.value = ""
        document.login.username.disabled = true;
        document.login.username.disabled = true;
        return false;
    }
