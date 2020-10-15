var margin = { top: 30, right: 10, bottom: 30, left: 300 },
    width = 700 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// Percent two area charts can overlap
var overlap = 0.6;

var formatTime = d3.timeFormat('%I %p');

var svg = d3.select('#graph').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var x = function(d) { return d.time; },
    xScale = d3.scaleTime().range([0, width]),
    xValue = function(d) { return xScale(x(d)); },
    xAxis = d3.axisBottom(xScale).tickFormat(formatTime);

var y = function(d) { return d.value; },
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

function parseTime(offset) {
    var date = new Date(2017, 0, 1); // chose an arbitrary day
    return d3.timeMinute.offset(date, offset);
}

function row(d) {
    return {
        activity: d.activity,
        time: parseTime(d.time),
        value: +d.p_smooth
    };
}
// d3.json("/alldata").then(function(allData, err){
//     if (err) throw err;
//     console.log(allData)
// })
d3.json("/alldata").then(function(allData, err){
    if (err) throw err;
    console.log(allData)
    // Sort by time
    allData.sort(function(a, b) { return a.time - b.time; });

    var data = d3.nest()
        .key(function(d) { return d.activity; })
        .entries(allData);
    
    // Sort activities by peak activity time
    function peakTime(d) {
        var i = d3.scan(d.values, function(a, b) { return y(b) - y(a); });
        return d.values[i].time;
    };
    data.sort(function(a, b) { return peakTime(b) - peakTime(a); });

    xScale.domain(d3.extent(allData, x));

    activityScale.domain(data.map(function(d) { return d.key; }));

    var areaChartHeight = (1 + overlap) * (height / activityScale.domain().length);

    yScale
        .domain(d3.extent(allData, y))
        .range([areaChartHeight, 0]);
    
    area.y0(yScale(0));

    svg.append('g').attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    svg.append('g').attr('class', 'axis axis--activity')
        .call(activityAxis);

    var gActivity = svg.append('g').attr('class', 'activities')
            .selectAll('.activity').data(data)
        .enter().append('g')
            .attr('class', function(d) { return 'activity activity--' + d.key; })
            .attr('transform', function(d) {
                var ty = activityValue(d) - activityScale.bandwidth() + 5;
                return 'translate(0,' + ty + ')';
            });

    gActivity.append('path').attr('class', 'area')
        .datum(function(d) { return d.values; })
        .attr('d', area);
    
    gActivity.append('path').attr('class', 'line')
        .datum(function(d) { return d.values; })
        .attr('d', line);
});