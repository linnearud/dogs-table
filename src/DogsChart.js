import React, { Component } from 'react';
import './App.css'; 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell} from 'recharts';

class DogsChart extends Component {
  render() {
    function groupBy(arr, prop) {
      return arr.reduce(function(groups, item) {
        const val = item[prop]
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
      }, {})
    }

    let dogsArr = this.props.data || []
    let groupedDogs = groupBy(dogsArr, 'Breed')
    let barChart = []
    Object.keys(groupedDogs).map(function(key, index) {
      barChart.push({x: key, y:groupedDogs[key].length})
    });
    barChart = barChart.sort(function(a, b){return b.y-a.y});
    barChart = barChart.slice(0,10);

    const COLORS = ['#6cbfcc', '#9fcc80', '#ffb57c', '#d17fac', '#7e8ed1', '#7ed1c8', '#8f84b2', '#e2bebe', '#bee2d1', '#a05182'];
    return (
      <div className="dogs-chart">
        <div className="chart-title">Top ten breeds year {this.props.year}</div>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={barChart }>
            <XAxis dataKey="x" angle={-45} textAnchor="end" interval={0}/>
            <YAxis />
            <Bar dataKey="y" fill="#8884d8">
              {
              barChart.map((entry, index) => {
                const color = COLORS[index]
                return <Cell fill={color} />;
              })
            }
            </Bar>
          </BarChart>
        </ResponsiveContainer >
      </div>
    );
  }
}

export default DogsChart;
