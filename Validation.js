function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uemail = document.registration.email;

if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(ValidateEmail(uemail))
{ 
}
}
}
}
return false;
}
function userid_validation(uid,x,y)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= y || uid_len < x)
{
alert("User Id should not be empty / length be between "+x+" to "+y);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,x,y)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= y || passid_len < x)
{
alert("Password should not be empty / length be between "+x+" to "+y);
passid.focus();
return false;
}
return true;
}function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
