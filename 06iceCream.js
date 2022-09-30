// Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest ice cream.
// Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:


    var iceCream={
        
     Plain: 0,
        Vanilla: 5,
        ChocolateChip: 5,
        Strawberry: 10,
        Chocolate: 10
    };
    class IceCream{
        constructor(flavour, numSprinkles){
            this.flavour = flavour
            this.numSprinkles = numSprinkles
        }
    }
    
    let ice1 = new IceCream("chocolate",13)
    let ice2 = new IceCream("Vanilla", 0)       	
    let ice3 = new IceCream("Strawberry", 7)    	
    let ice4 = new IceCream("Plain", 18)         	
    let ice5 = new IceCream("ChocolateChip", 3)  	
    
    
    let Icecreams = [ice1, ice2, ice3, ice4, ice5]
    
    
    function sweetestIcecream(...IceCreams){
         let sweet = [];
         for(var ice of IceCreams)
             {
                if(ice.flavour === "chocolate" || ice.flavour ==="Strawberry"){
                    sweet.push(10+ice.numSprinkles)
                }
                else if(ice.flavour === "ChocolateChip" || ice.flavour ==="Vanilla"){
                    sweet.push(5+ice.numSprinkles)
                }else{
                    sweet.push(ice.numSprinkles)
                }
             }
        return Math.max(...sweet)
    }
    
    console.log(sweetestIcecream(ice1,ice2,ice3,ice4,ice5));
    console.log(sweetestIcecream(ice1,ice3))
    console.log(sweetestIcecream(ice3,ice5))