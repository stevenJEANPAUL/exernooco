import React from "react";
import "./App.css";
import {Bar, Doughnut} from "react-chartjs-2";
import Chart from 'chart.js/auto';


const data = {
  labels:["Levis501", "Levis511", "GapSlim", "GapSkinny", "DieselSkinny", "DieselSlim"],
  datasets: [
    {
      label:"Mes Articles",
      data: ["99", "119", "99", "119", "129", "139"],
      backgroundColor: ["#00ffff", "#7fffd4", "Red", "Violet", "Orange", "Yellow"],
    },
  ],
}






const options = {
  maintainAspectRatio: false,
}

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="card2">
        <Bar data={data} options={options} />
      </div>
      <div className="card">
        <Doughnut data={data} options={options} />
      </div>
      </div>
    </div>
  );
}

export default App;
