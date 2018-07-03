import React, { Component } from "react";
import {HorizontalBar} from 'react-chartjs-2';
import ReturnConcepts from "./conceptData.js";

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      testData: [
  {
    content: "food", references: [0, 2, 4, 6, 7, 9, 11, 12, 13, 15, 16, 17, 18, 19]
  },
  { content: "place", references: [0, 7, 10, 11, 16, 18, 19] },
  { content: "atmosphere", references: [0, 2, 11, 16] },
  { content: "service", references: [0, 2, 3, 4, 10, 12, 16, 17, 19] },
  { content: "shrimp", references: [0, 3, 6] },
  { content: "chicken", references: [0, 1, 4, 5, 6, 17] },
  { content: "painting", references: [0, 11] },
  { content: "friendly", references: [1, 3, 4, 19] },
  { content: "staff", references: [1, 3, 17] },
  {
    content: "Thai",
    references: [1, 3, 4, 5, 6, 7, 9, 10, 12, 14, 16, 17, 18]
  },
  { content: "tea", references: [1, 3, 7, 14] },
  { content: "sangria", references: [1, 8, 11, 19] },
  { content: "pad thai", references: [1, 7, 8] },
  { content: "cocktail", references: [2, 10, 19] },
  { content: "beverage", references: [2, 6, 12, 19] },
  { content: "beef", references: [3, 5, 6, 7, 9, 14, 17] },
  { content: "coconut", references: [3, 6, 7, 11, 12, 13] },
  { content: "snack", references: [3, 6, 13, 14] },
  { content: "ice", references: [3, 7] },
  { content: "people", references: [3, 4, 14] },
  { content: "lunch", references: [3, 9, 12] },
  { content: "dinner", references: [4, 6, 7, 8, 12, 13, 14, 15, 19] },
  { content: "restaurant", references: [4, 6, 7, 9, 14, 15, 16, 17, 18, 19] },
  { content: "line", references: [4, 6, 7, 12, 13, 14] },
  { content: "caramel", references: [4, 7] },
  { content: "candy", references: [4, 7] },
  { content: "sweet", references: [4, 7] },
  { content: "peanut", references: [4, 6] },
  { content: "sauce", references: [5, 6, 7, 10, 14] },
  { content: "holy", references: [5] },
  { content: "basil", references: [5, 9] },
  { content: "rice", references: [5, 6, 7, 12, 13, 14, 16, 18] },
  { content: "egg", references: [5, 6, 9, 10, 14] },
  { content: "oyster", references: [5] },
  { content: "fish", references: [5] },
  { content: "garlic", references: [5, 7] },
  { content: "mojito", references: [6] },
  { content: "tree", references: [6, 11, 18] },
  { content: "spice", references: [6, 12] },
  { content: "area", references: [6, 7, 10] },
  { content: "dollar", references: [6] },
  { content: "$", references: [6] },
  { content: "bag", references: [6] },
  { content: "ground", references: [6] },
  { content: "floor", references: [6] },
  { content: "green", references: [6, 7, 12, 13] },
  { content: "favorite", references: [6] },
  { content: "chip", references: [6] },
  { content: "chassis", references: [6, 18] },
  { content: "wing", references: [6, 18] },
  { content: "meat", references: [6, 14, 17] },
  { content: "fried", references: [6, 9, 10, 11, 14] },
  { content: "star", references: [6, 10, 14] },
  { content: "city", references: [7, 9, 11, 12] },
  { content: "side", references: [7, 16] },
  { content: "balance", references: [7] },
  { content: "heat", references: [7, 8, 10] },
  { content: "meal", references: [7, 14] },
  { content: "bud", references: [7] },
  { content: "master", references: [7, 17] },
  { content: "fatty", references: [7] },
  { content: "mustard", references: [7] },
  { content: "average", references: [7, 17] },
  { content: "noodle", references: [7, 16, 17] },
  { content: "chef", references: [7] },
  { content: "jurisdiction", references: [7] },
  { content: "classic", references: [7] },
  { content: "left", references: [7, 12, 14] },
  { content: "music", references: [7, 17] },
  { content: "jug", references: [8, 19] },
  { content: "alcohol", references: [8] },
  { content: "stomach", references: [9] },
  { content: "papaya", references: [9] },
  { content: "salad", references: [9, 14] },
  { content: "prawn", references: [9] },
  { content: "depth", references: [9] },
  { content: "bomb", references: [9] },
  { content: "gang", references: [10] },
  { content: "band", references: [10] },
  { content: "mushroom", references: [10] },
  { content: "mule", references: [10] },
  { content: "ale", references: [10] },
  { content: "tavern", references: [10, 12, 18, 19] },
  { content: "compass", references: [10, 12, 18, 19] },
  { content: "pumpkin", references: [11] },
  { content: "inflation", references: [11] },
  { content: "husband", references: [11] },
  { content: "fruit", references: [11] },
  { content: "space", references: [11] },
  { content: "spot", references: [11, 12] },
  { content: "advertisement", references: [11, 12] },
  { content: "street", references: [11, 14] },
  { content: "bill", references: [12] },
  { content: "bartender", references: [12] },
  { content: "complaint", references: [12] },
  { content: "medium", references: [12] },
  { content: "ping", references: [12] },
  { content: "sausage", references: [14] },
  { content: "interior", references: [14, 15] },
  { content: "solid", references: [14] },
  { content: "brother", references: [14] },
  { content: "recommended", references: [14] },
  { content: "patron", references: [14] },
  { content: "famous", references: [14] },
  { content: "bias", references: [14] },
  { content: "Vietnamese", references: [14] },
  { content: "bed", references: [14] },
  { content: "kick", references: [14] },
  { content: "high", references: [14] },
  { content: "market", references: [15] },
  { content: "design", references: [15] },
  { content: "owner", references: [16] },
  { content: "soup", references: [16, 18] },
  { content: "runner", references: [17] },
  { content: "couple", references: [17] },
  { content: "messenger", references: [17] },
  { content: "short", references: [17] },
  { content: "shorts", references: [17] },
  { content: "boatload", references: [17] },
  { content: "garment", references: [17] },
  { content: "Summer", references: [17, 19] },
  { content: "basement", references: [17] },
  { content: "establishment", references: [17] },
  { content: "simile", references: [18] },
  { content: "neighborhood", references: [18, 19] },
  { content: "ethnic", references: [18] },
  { content: "hobby", references: [18] },
  { content: "red wine", references: [19] },
  { content: "dog", references: [19] },
  { content: "theater", references: [19] },
  { content: "wine", references: [19] },
  { content: "group", references: [19] },
  { content: "drinker", references: [19] },
  { content: "white", references: [19] }
],
      data: {
      labels: [],
      datasets: [{
        label: 'Keyword Frequency',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: []
      }]
    }
  }
}

componentDidMount() {
var getChartData = () => {
var sortedArray = this.state.testData.sort(function(a, b) {
    return b.references.length - a.references.length
  });
var topSeven = sortedArray.slice(0,6)
var label = []
var data = []
topSeven.forEach(function(concept) {
  data.push(concept.references.length)
  label.push(concept.content)
});
this.setState({ ...this.state.data.labels = label, ...this.state.data.datasets[0].data = data})
}
getChartData()
  }
//   console.log("this is my sorted array", sortedArray)

//   var label = []
//   var data = []
// topSeven.forEach(function(concept) {
//   data.push(concept.references.length)
//   label.push(concept.content)
//   // console.log(label);
//   // console.log(data);
// });
// console.log(label);
// console.log(data);

// }


// // this.state.testData.forEach(function(concept) {
// //   console.log(concept.content, concept.references.length);
// });
// console.log("return concepts", this.state.testData[0])

  render() {


        return (
            <div className="pie-chart">
            <h1>Keyword Frequency</h1>
              <HorizontalBar data={this.state.data} />
            </div>
        );
    }

}
 export default KeywordBarChart;