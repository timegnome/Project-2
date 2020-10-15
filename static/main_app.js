d3.selectAll("#Scatter").on("click", updatePlotly);
d3.selectAll("#Area").on("click", updatePlotly);
d3.selectAll("#Motion").on("click", updatePlotly);
d3.selectAll("#StackedBar").on("click", updatePlotly);
d3.selectAll("#PreditionModel").on("click", updatePlotly);
d3.select("svg").remove();