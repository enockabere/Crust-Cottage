$(document).ready(function(){
    $("#cards").show(function(){
        $("#cards").animate({
            width: "100%",
            opacity: 1,
            left: "50px",
            speed:"slow"
        }, 4000);
    });
});
//scroll top
var scrollbut = document.getElementById("myBtn"); //get button to scroll up

//when user scrolls down up to 20px show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction (){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollbut.style.display = "block";
    }else {
        scrollbut.style.display = "none";
    }
}

//when user clicks on the button it scrolls to top
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*----------make order javascript
starts here-------------*/

var crustPrice, price, dPrice;
var total,newTotal;

//constructor
function Pizaa(delicacy,size,crust,top,total){
  this.Delicacy = delicacy;
  this.Size = size;
  this.Crust = crust;
  this.Top = top;
}

//Constructor
function Delivery (name,number,address){
  this.Name = name;
  this.Number = number;
  this.Address = address;
}

Pizaa.prototype.YourChoice = function() {
  return this.Delicacy + " " + this.Size + " " + this.Crust + " " + this.Top;
};

Delivery.prototype.Customer = function (){
  return this.Name + " " + this.Number + " " + this.Address;
}
//submit button function
$(document).ready(function(){
  $("#submit").click(function(event){

    //show display onclick submit button
    $("#results").show();

    event.preventDefault();

    //get customer Pizza preference
    var pickDelicacy = $("#delicacys option:selected").val();
    var pickSize = $("#size option:selected").val();
    var pickCrust = $("#crust option:selected").val();
    var pickTop = $("#tops option:selected").val();
    var x = $("input#nums").val();

    //initialize price
    switch (pickSize) {
      case "Large" :
        price = 1500;
        console.log(price);
      break;
      case "Medium":
        price = 1000;
        console.log(price);
      break;
      case "Small" :
        price = 700;
        console.log(prce);
      break;
      default:
        console.log("error");

    }
    switch (pickCrust) {
      case "Crispy":
        crustPrice = 300;
        console.log(crustPrice);
      break;
      case "Stuffed":
        crustPrice = 350;
        console.log(crustPrice);
      break;
      case "Gluten-Free":
        crustPrice = 400;
        console.log(crustPrice);
      break;
      default:
        console.log("Crust Price Error!!");
    }

    //calculate total price of one pizza
    total = price + crustPrice;

    var newPizza = new Pizaa(pickDelicacy,pickSize,pickCrust,pickTop);

    //price of more than one pizza
    if (x<=0 || x>=100) {
      alert("invalid Entry! Your order cant be more than 100 or less or equal to 0")
    }else {
      newTotal = x*total;
    }
    console.log(newTotal);

      $("td#dname").append(newPizza.Delicacy);
      $("td#sname").append(newPizza.Size);
      $("td#cname").append(newPizza.Crust);
      $("td#tname").append(newPizza.Top);
      $("td#charge").append(total);

    //clear fields

    $("select#delicacys").val("");
    $("select#size").val("");
    $("select#crust").val("");
    $("select#tops").val("");
    $("input#nums").val("");


  });
  $("#del").click(function () {
    $("#delivs").hide();
    $("#finish").show();
    $("p#finish").append(total);
  });
});

//function to calculate delivery fee

$(document).ready(function(){
  $("button#proceed").click(function(event){
    event.preventDefault();

    var names = $("input#name").val();
    var tels = $("input#tel").val();
    var adds = $("input#address").val();

    console.log(names);
    console.log(tels);
    console.log(adds);
    $("span#nem").append(names);
    $("span#place").append(adds);
    $("span#last").append(del());

        //clear fields

    $("input#name").val("");
    $("input#tel").val("");
    $("input#address").val("");
  });
});

$(document).ready(function(){
  $("button#delivs").click(function(event){
    event.preventDefault();
    $("#finishtwo").show();
  
  });
});

function del() {
  dPrice = newTotal + 400;
  return dPrice;
}
del();