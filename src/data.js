export const months = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', ],
    datasets: [
        {
            label: 'Value',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(58,56,64,0.55)',
            hoverBorderColor: 'rgb(0,0,0)',
            data: [65, 59, 80, 81, 56, 55],
        }
    ]
}

export const monthsLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', ],
    datasets: [
        {
            label: 'Value',
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55],
        }
    ]
}
