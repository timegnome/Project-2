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
    .attr("transform", `translate${chartMargin.left}, ${chartMargin.top}`);

// Load json file 
d3.json("alldata").then(function(allData, err) {
    if (err) throw err;

    // Print the mergedData
    console.log(allData);
    
    // Parse datetime
    var parseTime = d3.timeFormat("%Y-%m3-%d")

    // Format the data
    allData.forEach(function(data) {
        data.datetime = parseTime(data.datetime);
        // data.players = +data.players;
        data.twitchviewers = +data.twitchviewers
    });

    // Group the data: one array for each value of the x axis
    var sumstat = d3.nest()
        .key(function(d) {
            return d.datetime;
        })
        .entries(allData);
    
    // Stack the data: each group will be represented on top of each other
    var gameViews = allData.twitchviewers
    var gameType = allData.genre
    // var stackedData = d3.stack()
        // .keys(gameType)
        // .value(function(d, key) {
        //     return d.values[key].n
        // })
        // (sumstat)
    
    // Create scales
    var xLinearScale = d3.scaleLinear()
        .domain(d3.extent(allData, d => d.datetime))
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(allData, d => d.twitchviewers)])
        .range([height, 0]);

    // Create axes
    var xAxis = d3.axisBottom(xLinearScale).ticks(5);
    var yAxis = d3.axisLeft(yLinearScale);

    // Color palette
    var color = d3.scaleOrdinal()
        .domain(gameViews)
        .range(["#03fca5", "#037bfc", "#ba03fc", "#fc9d03", "#0341fc"])

    // append axes
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);
    
    chartGroup.append("g")
        .call(yAxis);
    
    var line = d3.area()
        .x(d => xTimeScale(d.datetime))
        .y(d => yLinearScale(d.twitchviewers));
    
    // Show the area
    chartGroup.selectAll("mylayers")
        .data([allData])
        .enter()
        .append("path")
            .style("fill", function(d) {
                name = gameViews[d.key-1];
                return color(name);
            })
            .attr("d", d3.area()
                .x(function(d, i) {
                    return x(d.data.key);
                })
                .y0(function(d) {
                    return y(d[0]);
                })
                .y1(function(d) {
                    return y(d[1]);
                })
            ) 
})