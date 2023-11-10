import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CashFlow = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { date: 'August', value1: 8, value2: 8 },
      { date: 'September', value1: 6, value2: 8 },
      { date: 'October', value1: 8, value2: 8 },
      { date: 'November', value1: 5, value2: 9 },
      { date: 'December', value1: 6, value2: 9 },
      { date: 'January', value1: 7, value2: 9 }
    ];

    const margin = { top: 50, right: 10, bottom: 40, left: 10 }; // Decreased bottom margin
    const width = 500 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([0, width])
      .paddingInner(0.6)
      .paddingOuter(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value1 + d.value2)])
      .nice()
      .range([height, 0]);

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Bars
    data.forEach((d) => {
      svg
        .append('rect')
        .attr('x', x(d.date) + x.bandwidth() / 2) // Centering the bars
        .attr('y', y(d.value1 + d.value2))
        .attr('width', x.bandwidth())
        .attr('height', height - y(d.value1 + d.value2))
        .attr('rx', 5)
        .attr('fill', 'rgb(85,188,126)');

      svg
        .append('rect')
        .attr('x', x(d.date) + x.bandwidth() / 2) // Centering the bars
        .attr('y', y(d.value1))
        .attr('width', x.bandwidth())
        .attr('height', y(d.value2))
        .attr('rx', 7)
        .attr('fill', 'rgb(84,184,72)');
    });

    // X-axis
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height + 28})`) // Adjusted translation //months 
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .attr('x', x.bandwidth() / 2) // Centering the text
      .attr('transform', 'rotate(0)')
      .style('text-anchor', 'middle'); // Centering the text

    // Hide x-axis line using CSS
    svg.select('.x-axis path').style('display', 'none');

    // Y-axis (invisible)
    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y).tickSize(0))
      .style('opacity', 0);

    // Remove x-axis and y-axis lines
    svg.selectAll('.x-axis line').remove();
    svg.selectAll('.y-axis line').remove();
  }, []);

  return (
    <div className='third-div'>
      <div className='container'>
        <div>
          <span className='label'><b>Total Cash Flow</b></span>
        </div>
        <div className='transactions' style={{ display: 'flex' }}>
          <div style={{ background: 'rgb(85,188,126) ' }} className='checkbox'></div>
          <span className='label'>In</span>
          <div style={{ background: 'rgb(84,184,72)' }} className='checkbox'></div>
          <span className='label'>Out</span>
        </div>
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default CashFlow;
