import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Bargraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { date: '2023-01-01', value: 10 },
      { date: '2023-01-10', value: 25 },
      { date: '2023-01-15', value: 15 },
      { date: '2023-01-20', value: 8 },
      { date: '2023-01-25', value: 18 },
      { date: '2023-01-30', value: 12 }
    ];

    const margin = { top: 20, right: 30, bottom: 60, left: 50 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const parseDate = d3.timeParse('%Y-%m-%d');
    const formatDate = d3.timeFormat('%b %d-%y');

    const x = d3.scaleBand().range([0, width]).padding(0.6);
    const y = d3.scaleLinear().range([height, 0]);

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    data.forEach((d) => {
      d.date = parseDate(d.date);
      d.formattedDate = formatDate(d.date);
      d.value = +d.value;
    });

    x.domain(data.map((d) => d.formattedDate));
    y.domain([0, d3.max(data, (d) => d.value)]);

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.formattedDate))
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth() - 5) // Decreased bar width
      .attr('height', (d) => height - y(d.value))
      .attr('rx', 10)
      .attr('fill', 'green');
     

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');
      svg.select('.x-axis path').style('display', 'none');
     
    // svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y));

    svg.selectAll('.y-axis text').style('text-anchor', 'middle');
    svg.selectAll('.x-axis line').remove();
  }, []);

  return (
    <>
      <div className='second-bargraph'>
        <b>Invoices owed to you</b>
        <button>New Sales Invoice</button>
      </div><hr/>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default Bargraph;
