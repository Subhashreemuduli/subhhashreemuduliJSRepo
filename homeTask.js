class Twitter{
    #password = "4321"
    #tweets = []
    constructor(user ,password){
        this.user = user
        this.#password = password
    }
    checkPassword(password){
        return this.#password === password
    }
    getPassword(){
        return "****"
    }
    setPassword(oldPass,myNewPass)
    {
        if(this.checkPassword(oldPass)){
            this.#password = myNewPass
            console.log("password Changed Sucessfully");
        }
        else{
            console.log("Wrong old password");
        }
    }
    setTweet(tweet){
        this.#tweets.push(tweet)

    }
    getTweets(){

        console.log(this.#tweets);
    }
}
let twitter = new Twitter("ujjwal","1234")
console.log(twitter.checkPassword("1234")); 
twitter.setTweet("new tweet")
twitter.setTweet("ujjwal lade")
twitter.setTweet("new")
twitter.getTweets()
console.log("User : ",twitter.user);
console.log(twitter.password);
twitter.setPassword("134","6543")
console.log("Password : ",twitter.getPassword());