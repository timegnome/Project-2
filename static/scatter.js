var svgWidth = 960;
var svgHeight = 600;

var margin = {
  top: 20,
  right: 40,
  bottom: 140,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;



// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenXAxis = "datetime";
var chosenYAxis = "players";
var chosenGenre = "fps"


// function used for updating x-scale var upon click on genre/axis label
function xScale(mergedData, chosenXAxis, chosenGenre) {
    
    // filter data according to new genre
    var filteredData = Object.values(mergedData).filter(data => data.genre == chosenGenre);

    // create scales
    var xTimeScale = d3.scaleTime()
        .domain(d3.extent(filteredData, d => d[chosenXAxis]))
        .range([0, width]);

    return xTimeScale;

}

// function used for updating y-scale var upon click on genre/axis label
function yScale(mergedData, chosenYAxis, chosenGenre) {
    
    // filter data according to new genre
    var filteredData = Object.values(mergedData).filter(data => data.genre == chosenGenre);
    // create scales
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(filteredData, d => d[chosenYAxis]) * 0.8,
            d3.max(filteredData, d => d[chosenYAxis]) * 1.2
        ])
        .range([height, 0]);
  
    return yLinearScale;
  
}

// function used for updating xAxis var upon click on axis label
function renderXAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale).tickFormat(d3.timeFormat("%y-%m-%d"));

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// function used for updating yAxis var upon click on axis label
function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
  
    yAxis.transition()
      .duration(1000)
      .call(leftAxis);
  
    return yAxis;
}

// function used for updating circles group with a transition to
// new circles
function renderCircles(circlesGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]))
    .attr("cy", d => newYScale(d[chosenYAxis]));

  return circlesGroup;
}

// function renderText(textGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

//   textGroup.transition()
//         .duration(1000)
//         .attr("x", d => newXScale(d[chosenXAxis]))
//         .attr("y", d => newYScale(d[chosenYAxis]));

//   return textGroup;
// }

// function used for updating circles group with new tooltip
// function updateToolTip(chosenXAxis, chosenYAxis, chosenGenre, circlesGroup) {

//   var xLabel = "Date:";

//   var yLabel = "";

//     if (chosenYAxis === "players") {
//          yLabel = "Active Players:"
//     }
//     else {
//          yLabel = "Twtich Viewers:"
//     }

//   var toolTip = d3.tip()
//     .attr("class", "d3-tip")
//     .offset([80, -60])
//     .html(function(d) {
//       return (`${chosenGenre}<br>${xLabel} ${d[chosenXAxis]}<br>${yLabel} ${d[chosenYAxis]}`);
//     });

//   circlesGroup.call(toolTip);

//   circlesGroup.on("mouseover", function(data) {
//     toolTip.show(data, this);
//   })
//     // onmouseout event
//     .on("mouseout", function(data, index) {
//       toolTip.hide(data, this);
//     });

//   return circlesGroup;
// }


// Retrieve data from the CSV file and execute everything below
d3.json("http://127.0.0.1:5000/supertable").then(function(mergedData, err) {
  if (err) throw err;
    
  var filteredData = Object.values(mergedData).filter(data => data.genre == chosenGenre);
  var xTimeScale = xScale(mergedData, chosenXAxis, chosenGenre);
  var yLinearScale = yScale(mergedData, chosenYAxis, chosenGenre);
  
  console.log(typeof(filteredData));

  // Create initial axis functions
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // append x axis
  var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // append y axis
  var yAxis = chartGroup.append("g")
    .classed("y-axis", true)
    .call(leftAxis);

  // append initial circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(filteredData)
    .enter()
    .append("circle")
    .attr("cx", d => xTimeScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d[chosenYAxis]))
    .attr("r", 1)
    .classed("stateCircle", true)

  // Create group for five genre labels
  var genreLabelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

  var fpsLabel = genreLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "fps") // value to grab for event listener
    .classed("aText", true)
    .classed("active", true)
    .text("First Person Shooter Games");

  var platformerLabel = genreLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "platformer") // value to grab for event listener
    .classed("aText", true)
    .classed("inactive", true)
    .text("Platformer Games");

  var rpgLabel = genreLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 60)
    .attr("value", "rpg") // value to grab for event listener
    .classed("aText", true)
    .classed("inactive", true)
    .text("Role-Playing Games");

  var sportsLabel = genreLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 80)
    .attr("value", "sports") // value to grab for event listener
    .classed("aText", true)
    .classed("inactive", true)
    .text("Sports Games");  
  
  var strategyLabel = genreLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 100)
    .attr("value", "strategy") // value to grab for event listener
    .classed("aText", true)
    .classed("inactive", true)
    .text("Strategy Games");  

// Create group for two y-axis labels
  var yLabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${0 - margin.left/4}, ${(height/2)})`);

  var playerLabel = yLabelsGroup.append("text")
        .classed("aText", true)
        .classed("active", true)
        .attr("x", 0)
        .attr("y", 0 - 20)
        .attr("dy", "1em")
        .attr("transform", "rotate(-90)")
        .attr("value", "players") // value to grab for event listener
        .text("Active Players");

  var twitchLabel = yLabelsGroup.append("text")
        .classed("aText", true)
        .classed("inactive", true)
        .attr("x", 0)
        .attr("y", 0 - 40)
        .attr("dy", "1em")
        .attr("transform", "rotate(-90)")
        .attr("value", "twitchviewers") // value to grab for event listener
        .text("Twitch Viewers");

  // updateToolTip function above csv import
  // circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

  // genre labels event listener
  genreLabelsGroup.selectAll("text")
    .on("click", function() {
      // get value of selection
      var value = d3.select(this).attr("value");
      if (value !== chosenGenre) {

        // replaces chosenXAxis with value
        chosenGenre = value;

        console.log(chosenGenre)

        // functions here found above csv import

        // updates x scale for new data
        xTimeScale = xScale(mergedData, chosenXAxis, chosenGenre);

        // updates x axis with transition
        xAxis = renderXAxes(xTimeScale, xAxis);
        
        // updates y scale for new data
        yLinearScale = yScale(mergedData, chosenYAxis);

        // updates y axis with transition
        yAxis = renderYAxes(yLinearScale, yAxis);


        // updates circles with new values
        circlesGroup = renderCircles(circlesGroup, xTimeScale, chosenXAxis, yLinearScale, chosenYAxis);
        
        // updates tooltips with new info
        // circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, chosenGenre, circlesGroup);

        // changes classes to change bold text
        if (chosenGenre === "fps") {
            fpsLabel
                .classed("active", true)
                .classed("inactive", false);
            platformerLabel
                .classed("active", false)
                .classed("inactive", true);
            rpgLabel
                .classed("active", false)
                .classed("inactive", true);
            sportsLabel
                .classed("active", false)
                .classed("inactive", true);
            strategyLabel
                .classed("active", false)
                .classed("inactive", true);       
        }
        else if (chosenGenre === "platformer") {
            fpsLabel
                .classed("active", false)
                .classed("inactive", true);
            platformerLabel
                .classed("active", true)
                .classed("inactive", false);
            rpgLabel
                .classed("active", false)
                .classed("inactive", true);
            sportsLabel
                .classed("active", false)
                .classed("inactive", true);
            strategyLabel
                .classed("active", false)
                .classed("inactive", true);  
        }
        else if (chosenGenre === "rpg") {
            fpsLabel
                .classed("active", false)
                .classed("inactive", true);
            platformerLabel
                .classed("active", false)
                .classed("inactive", true);
            rpgLabel
                .classed("active", true)
                .classed("inactive", false);
            sportsLabel
                .classed("active", false)
                .classed("inactive", true);
            strategyLabel
                .classed("active", false)
                .classed("inactive", true);
        }
        else if (chosenGenre === "sports") {
            fpsLabel
                .classed("active", false)
                .classed("inactive", true);
            platformerLabel
                .classed("active", false)
                .classed("inactive", true);
            rpgLabel
                .classed("active", false)
                .classed("inactive", true);
            sportsLabel
                .classed("active", true)
                .classed("inactive", false);
            strategyLabel
                .classed("active", false)
                .classed("inactive", true);
        }
        else {
            fpsLabel
                .classed("active", false)
                .classed("inactive", true);
            platformerLabel
                .classed("active", false)
                .classed("inactive", true);
            rpgLabel
                .classed("active", false)
                .classed("inactive", true);
            sportsLabel
                .classed("active", false)
                .classed("inactive", true);
            strategyLabel
                .classed("active", true)
                .classed("inactive", false); 
        }
      }
    });

    // y-axis labels event listener
  yLabelsGroup.selectAll("text")
    .on("click", function() {
        //get value of selection
        let value = d3.select(this).attr("value");

        //check if value is same as current axis
        if (value != chosenYAxis) {

            // replace chosenYAxis with value
            chosenYAxis = value;
            console.log(chosenYAxis)

            // updates x scale for new data
            xTimeScale = xScale(mergedData, chosenXAxis, chosenGenre);

            // updates x axis with transition
            xAxis = renderXAxes(xTimeScale, xAxis);

            // updates y scale for new data
            yLinearScale = yScale(mergedData, chosenYAxis, chosenGenre);

            // updates y axis with transition
            yAxis = renderYAxes(yLinearScale, yAxis);

            // updates circles with new values
            circlesGroup = renderCircles(circlesGroup, xTimeScale, chosenXAxis, yLinearScale, chosenYAxis);

            // updates tooltips with new info
            // circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, chosenGenre, circlesGroup);

            //change classes to change bold text
            if (chosenYAxis === "twitchviewers") {
                playerLabel
                  .classed("active", false)
                  .classed("inactive", true);
                twitchLabel
                  .classed("active", true)
                  .classed("inactive", false);
            }
            else {
                playerLabel
                    .classed("active", true)
                    .classed("inactive", false);
                twitchLabel
                    .classed("active", false)
                    .classed("inactive", true);
            }
        }
    });
}).catch(function(error) {
  console.log(error);
});
