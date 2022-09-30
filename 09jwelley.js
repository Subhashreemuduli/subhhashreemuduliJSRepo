function mostExpensive(jewelries){
  expensiveOne = Number.MIN_VALUE;
  var jewelry;

      for(jewelry in jewelries){
           if(expensiveOne < jewelries[jewelry]){
              expensiveOne = jewelries[jewelry]
           }
      }

  console.log(`The most expensive one is the ${jewelry}`);
}


mostExpensive ({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
})


mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
}) 
