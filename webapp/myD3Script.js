$(document).on('scroll', function() {
    if ($(document).scrollTop() > 0) {
        $('.nav').addClass('nav--shrink');
    } else {
        $('.nav').removeClass('nav--shrink');
    }
});

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
   .attr("fill", "#CD5C5C")
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



// for bar chart:
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
        var w = 400;
  			var h = 250;

var xScale = d3.scaleBand()
        .domain(d3.range(dataset.length))
        .rangeRound([0, w])
        .paddingInner(0.05);

var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, h]);


var bar = d3.select('#bar')
     .append("svg")
     .attr("width", w)
     .attr("height", h);

bar.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
       return xScale(i);
    })
    .attr("y", function(d) {
       return h - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) {
       return yScale(d);
    })
    .attr("fill", function(d) {
     return "rgb(0, 0, " + Math.round(d * 10) + ")";
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
     .attr("cx", 350)
     .attr("cy", 260)
     .attr("r",10)
     .attr("fill", "#FF6347")
     .attr("fill-opacity", 0.7)
     .attr("stroke", "#FFB6C1")
     .attr("stroke-width", 12)
     .attr("stroke-opacity", 0.5)
     .on("click", openNav)
     .on("mouseover", function(d){
       d3.select(this).style("cursor", "pointer");
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

/*navigation*/

  function openNav() {
    document.getElementById("mySidenav").style.width = "650px";
    document.getElementById("main").style.marginRight = "550px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
}
