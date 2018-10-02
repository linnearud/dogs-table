import React, { Component } from 'react';
import './App.css'; 
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class DogsList extends Component {
  groupBy = (arr, prop) => {
    return arr.reduce(function(groups, item) {
      const val = item[prop];
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    }, {});
  }

  render() {
    let groupedDogs = this.groupBy(this.props.data || [], 'DogName');
    let dogList = [];
    Object.keys(groupedDogs).forEach(function(key) {
      dogList.push({x: key, y:groupedDogs[key].length});
    });
    dogList = dogList.sort(function(a, b){return b.y-a.y});

    return (
      <div className="dogs-list">
        <div className="chart-title"> Top 10 names year {this.props.year} </div>
        <ListGroup>
          <ListGroupItem>1. {dogList[0].x}</ListGroupItem>
          <ListGroupItem>2. {dogList[1].x}</ListGroupItem>
          <ListGroupItem>3. {dogList[2].x}</ListGroupItem>
          <ListGroupItem>4. {dogList[3].x}</ListGroupItem>
          <ListGroupItem>5. {dogList[4].x}</ListGroupItem>
          <ListGroupItem>6. {dogList[5].x}</ListGroupItem>
          <ListGroupItem>7. {dogList[6].x}</ListGroupItem>
          <ListGroupItem>8. {dogList[7].x}</ListGroupItem>
          <ListGroupItem>9. {dogList[8].x}</ListGroupItem>
          <ListGroupItem>10. {dogList[9].x}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default DogsList;
