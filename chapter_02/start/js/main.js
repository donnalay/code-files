const svg = d3
  .select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  //add border to svg container
  .style("border", "1px solid black");

d3.csv("..datadata.csv", (d) => {
  console.log(d);
});
