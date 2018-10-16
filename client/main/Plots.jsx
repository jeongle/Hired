import React from "react";
import { defaults, Doughnut, Bar } from "react-chartjs-2";

defaults.global.defaultFontFamily = "lato";

const Plots = (props) => {
  let doughnutData = {
    labels: ['To Do', 'In Progress', 'Completed'],
    datasets: [{
      data: props.applications.map(section => section.length),
      backgroundColor: [
        'rgba(255,105,145,0.6)',
        'rgba(155,100,210,0.6)',
        'rgba(90,178,255,0.6)',
      ]
    }]
  };

  return (
    <div>
      <Doughnut
        data={doughnutData}
        width={500}
        height={500}
        options={{
          maintainAspectRatio: false
        }} />
    </div>
  )
}

export default Plots;