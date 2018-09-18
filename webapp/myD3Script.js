

var dataset = [-94,20];

var rssi;
var temperature;

function callServer() {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function() {

         if (this.readyState == 4 && this.status == 200) {

           var jsonResponse = JSON.parse(this.responseText);

           dataset[0] = jsonResponse["rssi"];
           dataset[1] = jsonResponse["temperature"];
           console.log(dataset);
         }
    };
    xmlHttp.open("GET", "http://localhost:5000/data", true);
    xmlHttp.send( null );

}

setInterval(function(){
  callServer();
}, 10000);



var l0 = d3.select('#l0')
.attr("width", 960) //减是变窄了
.attr("height", 500);

//tooltip+circle
l0.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", 620)
   .attr("cy", 210)
   .attr("r",10)
   .attr("fill", "red")
   .on("mouseover", function(d){
     tooltip.html("Status: Active" +"<br/>"+"rssi: " + dataset[0] + "<br/>" + 'Temperature: '+ dataset[1] + " °C")
     .style("left", d3.event.pageX - 70 + "px")
 .style("top", d3.event.pageY - 90 + "px")
 .style("opacity", 0.8)
 d3.select(this).transition()
       .duration(150)
})
.on("mouseout", function(){
d3.select(this).transition()
         .duration(150)
tooltip.style("opacity", 0)
});


    var tooltip = d3.select("body")
                      .append("div")
                      .attr("class", "tooltip")
                      .style("opacity", 0)



//for 1st:
  var dataset1 = [-102,21];

  var l1 = d3.select('#l1')
  .attr("width", 960) //减是变窄了
  .attr("height", 500);

  //tooltip+circle
  l1.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("cx", 450)
     .attr("cy", 240)
     .attr("r",10)
     .attr("fill", "red")
     .on("mouseover", function(d){
       tooltip.html("Status: Active" +"<br/>"+"rssi: " + dataset1[0] + "<br/>" + 'Temperature: '+ dataset1[1] + " °C")
       .style("left", d3.event.pageX - 70 + "px")
   .style("top", d3.event.pageY - 90 + "px")
   .style("opacity", 0.8)
   d3.select(this).transition()
         .duration(150)
  })
  .on("mouseout", function(){
  d3.select(this).transition()
           .duration(150)
  tooltip.style("opacity", 0)
  });



//for 2nd:
  var dataset2 = [-94,20];

  var l2 = d3.select('#l2')
  .attr("width", 960) //减是变窄了
  .attr("height", 500);

  //tooltip+circle
  l2.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("cx", 150)
     .attr("cy", 340)
     .attr("r",10)
     .attr("fill", "red")
     .on("mouseover", function(d){
       tooltip.html("Status: Active" +"<br/>"+"rssi: " + dataset2[0] + "<br/>" + 'Temperature: '+ dataset2[1]+ " °C")
       .style("left", d3.event.pageX - 70 + "px")
   .style("top", d3.event.pageY - 90 + "px")
   .style("opacity", 0.8)
   d3.select(this).transition()
         .duration(150)
  })
  .on("mouseout", function(){
  d3.select(this).transition()
           .duration(150)
  tooltip.style("opacity", 0)
  });
