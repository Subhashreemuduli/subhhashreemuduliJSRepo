//2.     Write a class called Name and create the following attributes given a first name and last name
//  (as fname and lname):An attribute called fullname which returns the first and last names.An attribute 
//  called initials which returns the first letters of the first and last name. Put a . between the two 
//  letters.Remember to allow the attributes fname and lname to be accessed individually as well.


class Name
    {
    constructor(fname,lname)
        {
         this.fname=fname[0].toUpperCase()+fname.slice(1).toLowerCase();
         this.lname=lname[0].toUpperCase()+lname.slice(1).toLowerCase();
        }
       getFullName()
       {
          return `${this.fname} ${this.lname}`;
       }
       getInitials()
       {
         return `${this.fname[0]}.${this.lname[0]}`;
       }

    }
    let name=new Name("jon","tom");
    console.log(name.fname);
    console.log(name.lname);
    console.log(name.getFullName());
    console.log(name.getInitials());