import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Data() {
  const [histogramData, setHistogramData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();
    const words = text.trim().split(/\s+/);
    const wordCountMap = {};
    for (const word of words) {
      wordCountMap[word] = (wordCountMap[word] || 0) + 1;
    }
    const sortedWords = Object.keys(wordCountMap).sort(
      (a, b) => wordCountMap[b] - wordCountMap[a]
    );
    const data = {
      labels: sortedWords.slice(0, 20),
      datasets: [
        {
          label: "Word Count",
          data: sortedWords.slice(0, 20).map((word) => wordCountMap[word]),
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1,
        },
      ],
    };
    setHistogramData(data);
  };

  const handleExportData = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      histogramData.labels.join(",") +
      "\n" +
      histogramData.datasets[0].data.join(",");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "histogram.csv");
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {
    if (Chart.defaults) {
      Chart.defaults.font.size = 16;
    }
  }, []);

  return (
    <div className="container">
      <button className="export-button" onClick={handleExportData}>
        Export CSV
      </button>
      <div className="chart-container">
        <h2>Top 20 Words</h2>
        {histogramData && <Bar data={histogramData} />}
      </div>
    </div>
  );
}

export default Data;
