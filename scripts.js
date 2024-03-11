
var revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [{
        label: "Earnings ($)",
        borderColor: '#27ae60', 
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        data: [1000, 1500, 1200, 1800, 2000, 2500, 2200, 2800, 3000, 3500, 3200],
    }]
};

var revenueSourcesData = {
    labels: ["Direct", "Social", "Referral"],
    datasets: [{
        data: [40, 30, 30],
        backgroundColor: ["#27ae60", "#ff6b6b", "#ffb347"], 
    }]
};


var ctxRevenue = document.getElementById('revenueGraph').getContext('2d');
var revenueChart = new Chart(ctxRevenue, {
    type: 'line',
    data: revenueData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
});


var ctxRevenueSources = document.getElementById('revenueSourcesPieChart').getContext('2d');
var revenueSourcesChart = new Chart(ctxRevenueSources, {
    type: 'pie',
    data: revenueSourcesData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
