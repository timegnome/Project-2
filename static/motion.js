function gameBandWidth(){
var margin = { top: 30, right: 10, bottom: 50, left: 300 },
    width = 1000 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

// Percent two area charts can overlap
var overlap = 0.2;

var formatTime = d3.timeFormat('%m/%e/%Y');

var svg = d3.select('#graph').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var x = function(d) { return d.datetime; },
    xScale = d3.scaleTime().range([0, width]),
    xValue = function(d) { return xScale(x(d)); },
    xAxis = d3.axisBottom(xScale).tickFormat(formatTime);

var y = function(d) {return +d.twitchviewers + +d.players; },
    yScale = d3.scaleLinear(),
    yValue = function(d) { return yScale(y(d)); };

var activity = function(d) { return d.key; },
    activityScale = d3.scaleBand().range([0, height]),
    activityValue = function(d) { return activityScale(activity(d)); },
    activityAxis = d3.axisLeft(activityScale);

var area = d3.area()
    .x(xValue)
    .y1(yValue);

var line = area.lineY1();
var parseTime = d3.timeParse("%Y-%b-%d")

// function row(d) {
//     return {
//         genre: d.genre,
//         time: parseTime(d.datetime),
//         activity: +d.twitchviewers + +d.players
//     };
// }

// d3.json("/alldata").then(function(allData, err){
// d3.json("/alldata",row, function(err,allData){
d3.json("/truncdat").then(function(allData, err){
    if (err) throw err;
    
    // Sort by time
    allData.sort(function(a, b) { return a.datetime - b.datetime; });
    var data = d3.nest()
        .key(function(d) { return d.genre; })
        .entries(allData);
    // console.log(data)
    // Sort activities by peak activity time
    function peakTime(d) {
        
        var i = d3.scan(d.values, function(a, b) { return y(b) - y(a); });
        // console.log(i)
        return d.values[i].datetime;
    };
    data.sort(function(a, b) { return peakTime(b) - peakTime(a); });

    xScale.domain(d3.extent(allData, x));

    activityScale.domain(data.map(function(d) { return d.key; }));

    var areaChartHeight = (1) * (height / activityScale.domain().length+20);

    yScale
        .domain(d3.extent(allData, y))
        .range([areaChartHeight, 0]);
    
    area.y0(yScale(0));

    svg.append('g').attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .selectAll("text")
        .attr("text-anchor", "start")
        .attr('transform','rotate(45)');

    svg.append('g').attr('class', 'axis axis--activity')
        .call(activityAxis);

    svg.append("text")
        .attr('x',width/2)
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px") 
        .text("Video Game Activity With covid")
    var gActivity = svg.append('g')
            .attr('class', 'activities')
            .selectAll('.activity')
            .data(data)
            .enter()
            .append('g')
            .attr('class', function(d) { return 'activity activity--' + d.key; })
            .color(data.key)
            .attr('transform', function(d) {
                var ty = activityValue(d) - activityScale.bandwidth() + 25;
                return 'translate(0,' + ty + ')';
            });

    gActivity.append('path').attr('class', 'area')
        .datum(function(d) { return d.values; })
        .attr('d', area);
    
    // gActivity.append('path').attr('class', 'line')
    //     .datum(function(d) { return d.values; })
    //     .attr('d', line);
});
}