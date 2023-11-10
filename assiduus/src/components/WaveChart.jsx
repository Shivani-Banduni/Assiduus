import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Box, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WaveChart = () => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const [selectedMonth, setSelectedMonth] = useState('January');
  const [anchorEl, setAnchorEl] = useState(null);
  const chartRef = useRef(null);
  const waveRef = useRef(null);


  const svgWidth = 500;
  const svgHeight = 250;
  const margin = { top: 50, right: 20, bottom: 30, left: 40 };
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;
  const amplitude = 100;
  const frequency = 2 * Math.PI / 30;
  const minValue = 0;
  const maxValue = 100;


  const xScale = d3.scaleLinear()
  .domain([minValue, maxValue])
  .range([0, width]);

const yScale = d3.scaleLinear()
  .domain([-amplitude, amplitude])
  .range([0, -height]);

  useEffect(() => {
   

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top + height})`);
   

    const lineGenerator = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveCardinal);

    const waveData = d3.range(minValue, maxValue + 3, 1).map((x) => {
      return {
        x,
        y: amplitude * Math.sin(frequency * x)
      };
    });

    svg.append('path')
      .datum(waveData)
      .attr('d', lineGenerator)
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    svg.append('g').call(d3.axisBottom(xScale));

    waveRef.current = svg;
  }, []);

  const handleMonthClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMonthMenuItemClick = (month) => {
    setSelectedMonth(month);
    setAnchorEl(null);
    // Update the existing wave chart with fluctuating data
    const amplitude = 30;
    const frequency =  Math.PI /15;
    const minValue = 0;
    const maxValue = 100;

    const updatedWaveData = d3.range(minValue, maxValue + 2, 1).map((x) => {
      return {
        x,
        y: amplitude * Math.sin(frequency * x) * (Math.random() + 0.8)
      };
    });

    waveRef.current.selectAll('path').remove(); // Clear previous wave path

    const lineGenerator = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveCardinal);

    waveRef.current.append('path')
      .datum(updatedWaveData)
      .attr('d', lineGenerator)
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    waveRef.current.append('g').call(d3.axisBottom(xScale));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{border:'2px solid white', borderRadius:'3%', background:'white',marginLeft:'9vh'}}>
      <div className='wavechart-div' >
        <div style={{  width: '170px', textAlign: 'center' }}>
          <b>Checking account</b>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">Manage</Typography>
            <IconButton
              aria-controls="manage-menu"
              aria-haspopup="true"
              onClick={() => {} /* Add your logic for managing options */}
              size="small"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>

          <div style={{ marginLeft: '10px' }}>
            <Box display="flex" alignItems="center">
              <Typography variant="body1">{selectedMonth}</Typography>
              <IconButton
                aria-controls="month-menu"
                aria-haspopup="true"
                onClick={handleMonthClick}
                size="small"
              >
                <ArrowDropDownIcon />
              </IconButton>
              <Menu
                id="month-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {months.map((month) => (
                  <MenuItem key={month} onClick={() => handleMonthMenuItemClick(month)}>
                    {month}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
        </div>
      </div><hr/>

      <div className='wavegraph-div2' ref={chartRef}></div>
    </div>
  );
};

export default WaveChart;
