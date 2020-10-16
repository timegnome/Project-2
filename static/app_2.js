// Define the SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins 
var chartMargin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

// Define the dimensions of the chart area
var width = svgWidth - chartMargin.left - chartMargin.right;
var height = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
    // will need to include this id in the html file
    .select('#kj_dataviz')
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append a group to the SVG area and translate it to the right and down to adhere to the set margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load json file 
d3.json("/yeargamedata4").then(function(gameData, err) {
    if (err) throw err;

    // Print the mergedData
    console.log(gameData);
    
    // // Parse datetime
    // var parseTime = d3.timeFormat("%Y-%m3-%d")

    // Format the data
    gameData.forEach(function(data) {
        data.year = +data.year;
        // data.datetime = parseTime(data.datetime);
        // data.players = +data.players;
        data.twitch_users = +data.twitch_users
    });
    
    // * Create a filter that returns years > 2016
    function filterYear(recentDates) {
        return parseInt(recentDates.year) >= 2016;
    }
    
    // * Use filter() to pass the function as its argument
    var filteredYear = gameData.filter(filterYear);
    // console.log(filteredYear);

    // * Use map to return all the filtered Twitch users and genres
    var filteredGenres = filteredYear.map(recentDates => recentDates.genre);
    // console.log(filteredGenres);
    var filteredUsers = filteredYear.map(recentData => recentData.twitch_users);
    // console.log(filteredUsers);

    genres = new Set ()
    gameData.forEach(function(data) {
        genres.add(data.genre)
    })

    lineData = {}
    

    genres.forEach(g => {
        line = []
        gameData.forEach(d => {
            if (d.genre == g) {
                line.push([d.year, d.twitch_users])
            }
        })
        lineData[g] = line
        // userData[g] = gameData.filter(d => {
        //     if (d.Genre == g) {
        //         return d["Twitch Users"]
        //     }
        // })
    })
    console.log(genres)
    console.log(lineData)
    
// lineData = gameData.map(d => {return {x: +d.Year, y: +d["Twitch Users"]}})
    // Group the data: one array for each value of the x axis
    // var sumstat = d3.nest()
    //     .key(function(d) {
    //         return d.datetime;
    //     })
    //     .entries(allData);
    
    // Stack the data: each group will be represented on top of each other
    // var gameViews = allData.twitchviewers
    // var gameType = allData.genre
    // var stackedData = d3.stack()
        // .keys(gameType)
        // .value(function(d, key) {
        //     return d.values[key].n
        // })
        // (sumstat)
    
    // Create scales
    var xLinearScale = d3.scaleLinear()
        .domain(d3.extent(gameData, d => d.year))
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(gameData, d => d.twitch_users)])
        .range([height, 0]);

    // Create axes
    var xAxis = d3.axisBottom(xLinearScale).ticks(5);
    var yAxis = d3.axisLeft(yLinearScale);

    // Color palette
    var color = d3.scaleOrdinal()
        .domain(genres)
        .range(["#03fca5", "#037bfc", "#ba03fc", "#fc9d03", "#0341fc"])

    // append axes
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);
    
    chartGroup.append("g")
        .call(yAxis);
    
    var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([2, -1])
    .style("color", "white")
    .html(function(d) {
        return(`${d}`)
    })
    
    chartGroup.call(toolTip)
    gameGenres = [];
    // create legend
//    function gameLegend() {
//     var legend = d3.select('#kj_dataviz').selectAll(".legend")
//          .data(color.domain().slice().reverse())
//      .enter().append("g")
//          .attr("class", "legend")
//          .attr("transform", function(d, i) {
//             console.log(d) 
//             return "translate(0," + i *50 + ")";
//          });
//      legend.append("rect")
//          .attr("x", 475)
//          .attr("y", 9)
//          .attr("width", 18)
//          .attr("height", 18)
//          .attr("fill", color)
//          .append("text")
//          .style("text-anchor", "end")
//          .attr("fill", color)
//          .text(function(d) {
//              return d.charAt(0).toUpperCase()+d.slice(1);
//          });
    // }
    genres.forEach(g => {
        var line = d3.line()
            .x(d => xLinearScale(d[0]))
            .y(d => yLinearScale(d[1]));
        chartGroup.append("path")
            // .append("g", gameGenres)
            .style("stroke", color(g))
            .attr("fill", "none")
            // .attr("color", g)
            .attr("stroke-width", 3)
            .attr("d", line(lineData[g]))
            // console.log(g)
            .on("mouseover", function() {
              toolTip.show(g, this)
            })
              .on("mouseout", function() {
                toolTip.hide(g)
              })
        
    })
    // gameLegend(gameGenres);
   
    

    
    
    
    // Show the area
    // chartGroup.selectAll("mylayers")
    //     .data(gameData)
    //     .enter()
    //     .append("")
        // .append("path")
        //     .style("fill", function(d) {
        //         name = gameViews[d.key-1];
        //         return color(name);
        //     })
        //     .attr("d", d3.area()
        //         .x(function(d, i) {
        //             return x(d.data.key);
        //         })
        //         .y0(function(d) {
        //             return y(d[0]);
        //         })
        //         .y1(function(d) {
        //             return y(d[1]);
        //         })
        //     ) 

    

})