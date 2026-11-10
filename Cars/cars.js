// Define the actions of the Car object, method
function printCar() 
{
    var make_line = "<td>" + this.make + "</td>";
    var model_line = "<td>" + this.model + "</td>";
    var year_line = "<td>" + this.year + "</td>";
    var color_line = "<td>" + this.color + "</td>";
    var engine_line = "<td>" + this.engine + "</td>"; 
    var price_line = "<td>$" + this.price + "</td>";
    
    var row = "<tr>" + make_line + model_line + year_line + color_line + engine_line + price_line + "</tr>";
    document.write(row);
}

// Define an object using constructor function
function Car(make, model, year, color, engine, price) 
{
    // List of attributes for this object
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.engine = engine; // Added engine attribute
    this.price = price;

    // Assign method to the car object
    this.printCar = printCar;
}

// Create car objects with engine specs included
var car1 = new Car("Nissan", "Z", "2026", "Silver", "3.0L Twin Turbo V6 (420HP)", "68,585");
var car2 = new Car("Chevrolet", "Camaro (ZL1)", "2023", "Black", "6.2L V8 Supercharged (650HP)", "72,100");
var car3 = new Car("Subaru", "WRX STI S209", "2019", "Blue", "2.5L H4 Turbocharged (341HP)", "63,995");
var car4 = new Car("Honda", "Civic Type R", "2025", "Silver/Grey", "2.0L I4 Turbocharged (315HP)", "47,045");
var car5 = new Car("Bugatti", "Chiron (Super Sport)", "2024", "Black", "8.0L W16 Quad-turbocharged (1,578HP)", "3.9 Million");

// Create an array of 5 car objects
var carArray = [car1, car2, car3, car4, car5];

// Loop through the array to display the car information
for(var counter = 0; counter < carArray.length; counter++) 
{
    carArray[counter].printCar();
}

