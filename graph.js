const labels = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];
const data = {
  labels: labels,
  datasets: [
    {
      tension: 0.4,
      label: "",

      borderColor: "rgb(255, 99, 132)",
      data: [
        3000, 5000, 2000, 3000, 5000, 4000, 5000, 6000, 3000, 2000, 3000, 4000,
      ],
    },
    {
      tension: 0.4,
      label: "",

      borderColor: "rgb(0,128,0)",
      data: [
        2000, 3000, 2000, 4000, 1000, 4000, 5000, 3000, 4000, 2000, 6000, 3000,
      ],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const mychart = new Chart(document.getElementById("mychart"), config);
