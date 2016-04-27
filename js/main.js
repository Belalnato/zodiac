var zodiac = [
  {
    sign: "toyota",
    fortune: " Say hello to the Toyota 86.It's got the power, gearing and suspension you need to rule your favorite winding road. A new, aggressive front end and LED lighting amp up the style. And once you get inside, the updated dash, steering wheel with audio controls and Granluxe interior accents ensure the driving experience is a premium one. It's how we continue to celebrate the sports car. Let's fire it up",
   
    image: "img/toyota.jpg"
    
    },
    {
    sign: "bmw",
    fortune: "The BMW i8. It's an icon of progress and an extraordinary evolution of The Ultimate Driving Machine. As a revolutionary plug in hybrid, this sports car uses eDrive technology to combine the efficiency of an all electric motor and the power of a TwinPower Turbo engine for an exhilarating driving experience that's every bit BMW.",
    image: "img/bmw.jpg"
  },
  {
    sign: "ford",
    fortune: "Put your hands on the wheel of a Mustang and you feel one thing above everything else: power. With four engines to choose from, the new Mustang is designed to overwhelm the senses with its pulse raising torque and legendary roar.The Mustang is engineered for pure exhilaration.",
    image: "img/ford.jpg"
  },
  {
    sign: "cadillac",
    fortune: "Introducing the 2016 ELR, the embodiment of our commitment to pairing sustainability with performance. It features a powerful electric drive system, an athletic chassis for an energetic drive and an optional sport package.Which make it a true driver's car",
    image: "img/cadillic.jpg"
  },
  {
    sign: "dodge",
    fortune: " the new 2016 dodge challenger RT. Comes with aluminum wheels,Blacktop Logo Floor Mats,Gloss Black Interior Accents,Performance Steering Wheel, Clear Coat Exterior Paint",
    image: "img/dodge.png"
  },
  {
    sign: "acura",
    fortune: "The  Acura NSX was engineered to be the perfect balance of power and handling, form and function, sport and luxury. The same innovations that went into the NSX can be found across the Acura lineup.",
    image: "img/acura.png"
  },
  {
    sign: "hyundai",
    fortune: " GENESIS 2016,Substantial horsepower and torque are just two of the many very satisfying qualities of this 3.8L V6 GDI engine. From track days to smoky burnouts, the smooth, linear way it generates power makes it a blast to drive and even a worthy rival to many luxury competitors",
    image: "img/genesis.png"
  },
  {
    sign: "mazda",
    fortune: " Mazda MX-5.There's more than one road to driving thrills. The MX-5 takes the route of light weight, rear-wheel drive,so responsive it almost feels like an extension of yourself.",
    image: "img/mazda.png"
  },
  {
    sign: "nissan",
    fortune: " GT-R,With a Twin Turbo V6 producing an earth-shaking 545 horsepower, it’s easy to overlook everything else GT-R has to offer—which is a lot.  that includes a new recalibrated suspension that reduces load fluctuation between the four wheels, and helps keep your wheels tight on the road for a smoother, more sophisticated ride",
    image: "img/nissan.png"
  },
  {
    sign: "subaru",
    fortune: " The WRX Subaru ,People love Subaru, even the unbiased experts. More and more each day. But don't just take our word for it. See what they have to say about Subaru and all of our models.",
    image: "img/subaru.png"
  },
  {
    sign: "mercedes",
    fortune: "  2016 MERCEDES AMG GT-S,The tautly drawn shape of the AMG GT S is sculpted to conquer wind and weight, and capture stares and hearts. Its proportions celebrate its rear-wheel-drive power and ideally balanced chassis. Every brilliant detail combines purpose with poise. The result is at once timeless and trendsetting, and a sports car that seduces your gaze to linger.",
    image: "img/Mercedes.png"

  },
  {
    sign: "audi",
    fortune: " Audi R8 all Leather Diamond Stitch Seats,Dynamic Steering,,Alcantara Headliner w/Diamond Stitching,Carbon Exterior Package,Diamond Stitch Leather Package,Full Leather Package,Carbon Sigma Sideblades",
    image: "img/audi.jpg"
  },
  {
    sign: "lamborghini ",
    fortune: "Lamborghini Huracan,Nothing on Earth can prepare you for the eyeball-melting performance of Lamborghini’s “entry-level” supercar, the Huracan. The angular design is severe yet elegant; the stealth fighter like cockpit is as luxurious as it is intense. ",
    image: "img/lamborghini.jpg"
    


  },
  {
    sign: "fiat",
    fortune: "Style is never in doubt when you are behind the wheel of a FIAT 124 Spider. The exterior turns heads with a seductive design that draws you in. Italian styling is evident in the interior with enticing touches that tempt the senses. The luxury here is purposeful. No unnecessary frills, just features that reignite your love affair with the open road.",
    image: "img/fiat-.png"
    


  },
  {
    sign: "vw",
    fortune: "2016 Volkswagen Eos,Convertible top has integrated moonroof,Intuitive controls,Brisk power,Comfortable ride,Quiet cabin.",
    image: "img/vw.jpg"
    


  },
  {
    sign: "gmc",
    fortune: "THE 2016 GMC ACADIA,featuring a 3.6L V6 and Sport Utility body style",
    image: "img/gmc.png"
    


  },
  {
    sign: "honda",
    fortune: "The CR-Z is an ambitious attempt at making a sporty hybrid, but its performance doesn’t match its adventurous styling. ",
    image: "img/honda.jpeg"
    


  },
  {
    sign: "porsche",
    fortune: "The new GT3 RS breaks new ground,An experience that we want to share with you,Porsche works driver Brendon Hartley takes the new 911 GT3 RS to its limits. Join him on his trip to the Nardo test track",
    image: "img/gt.png",
    url: "https://www.youtube.com/watch?v=2T6B_8wnLuw&list=PLvyX_84L7-lt04FFsyyEt9QTD04cjFcSs"
  },
  


]

function horoscope() {
  var sign = document.getElementById("sign").value.toLowerCase()

  for(i = 0; i < zodiac.length; i++) {
    if(sign === zodiac[i].sign) {
      document.getElementById("yourSign").innerHTML = zodiac[i].sign
      document.getElementById("icon").src = zodiac[i].image
      document.getElementById("yourHoroscope").innerHTML = " best sport model of 2016: " + zodiac[i].fortune
      document.getElementByID("bmw").setAttribute("href", zodiac[i].url)
      return
    } else {
      document.getElementById("yourSign").innerHTML = "sorry, Please Try again!"
      document.getElementById("yourHoroscope").innerHTML = ""
      document.getElementById("icon").src = ""
    }
  }
}