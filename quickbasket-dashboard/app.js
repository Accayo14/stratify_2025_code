// Application Data
const dashboardData = {
  "summary_metrics": {
    "total_orders": 1117,
    "unique_customers": 381,
    "unique_products": 4857,
    "avg_basket_size": 9.8,
    "top_product": "Banana",
    "top_product_orders": 165
  },
  "top_products": [
    {"name": "Banana", "orders": 165},
    {"name": "Bag of Organic Bananas", "orders": 142},
    {"name": "Organic Baby Spinach", "orders": 91},
    {"name": "Organic Strawberries", "orders": 88},
    {"name": "Large Lemon", "orders": 70},
    {"name": "Organic Avocado", "orders": 64},
    {"name": "Organic Hass Avocado", "orders": 64},
    {"name": "Strawberries", "orders": 60},
    {"name": "Limes", "orders": 51},
    {"name": "Organic Baby Carrots", "orders": 39}
  ],
  "departments": [
    {"name": "Produce", "orders": 3315, "percentage": 30.1},
    {"name": "Dairy Eggs", "orders": 1808, "percentage": 16.4},
    {"name": "Beverages", "orders": 921, "percentage": 8.4},
    {"name": "Snacks", "orders": 903, "percentage": 8.2},
    {"name": "Frozen", "orders": 781, "percentage": 7.1},
    {"name": "Pantry", "orders": 613, "percentage": 5.6},
    {"name": "Bakery", "orders": 380, "percentage": 3.5},
    {"name": "Canned Goods", "orders": 362, "percentage": 3.3}
  ],
  "peak_hours": [
    {"hour": 11, "orders": 591},
    {"hour": 16, "orders": 589},
    {"hour": 12, "orders": 580},
    {"hour": 15, "orders": 580},
    {"hour": 13, "orders": 577},
    {"hour": 14, "orders": 543},
    {"hour": 17, "orders": 514},
    {"hour": 10, "orders": 497}
  ],
  "reorder_products": [
    {"name": "Orange Sparkling Water", "rate": 100.0},
    {"name": "Unsweetened Vanilla Almond Milk", "rate": 100.0},
    {"name": "Plain Bagels", "rate": 100.0},
    {"name": "Organic Whole Wheat Bread", "rate": 100.0},
    {"name": "Pure Coconut Water", "rate": 100.0},
    {"name": "Boneless Skinless Chicken Breasts", "rate": 94.1},
    {"name": "2% Reduced Fat Milk", "rate": 92.3},
    {"name": "Natural Spring Water", "rate": 90.9}
  ]
};

// Chart colors from design system
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// DOM Elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCharts();
    populateTables();
    initializeTableSorting();
    initializeImageFallbacks();
});

// Tab Navigation
function initializeTabs() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

function switchTab(activeTabId) {
    // Update button states
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === activeTabId) {
            btn.classList.add('active');
        }
    });

    // Update panel visibility
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === activeTabId) {
            panel.classList.add('active');
        }
    });
}

// Image Fallback Initialization
function initializeImageFallbacks() {
    // Check all chart images and create fallback charts if they fail to load
    const chartImages = document.querySelectorAll('.chart-image');
    
    chartImages.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const fallbackDiv = this.nextElementSibling;
            if (fallbackDiv && fallbackDiv.classList.contains('chart-fallback')) {
                fallbackDiv.style.display = 'block';
                
                // Check if this is a specific chart that needs a canvas fallback
                const canvas = fallbackDiv.querySelector('canvas');
                if (canvas) {
                    const canvasId = canvas.id;
                    if (canvasId === 'topProductsChart') {
                        createTopProductsChart();
                    } else if (canvasId === 'departmentChart') {
                        createDepartmentChart();
                    }
                }
            }
        });
        
        // Force error check for testing
        if (!img.complete) {
            img.addEventListener('load', function() {
                // Image loaded successfully
            });
        }
    });
}

// Chart Initialization
function initializeCharts() {
    createPeakHoursChart();
    createBasketSizeChart();
}

function createTopProductsChart() {
    const ctx = document.getElementById('topProductsChart');
    if (!ctx) return;

    const labels = dashboardData.top_products.map(p => p.name);
    const data = dashboardData.top_products.map(p => p.orders);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Orders',
                data: data,
                backgroundColor: chartColors.slice(0, data.length),
                borderColor: chartColors.slice(0, data.length),
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    cornerRadius: 6,
                    displayColors: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: '#626c71'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: '#626c71',
                        maxTicksLimit: 10
                    }
                }
            }
        }
    });
}

function createDepartmentChart() {
    const ctx = document.getElementById('departmentChart');
    if (!ctx) return;

    const labels = dashboardData.departments.map(d => d.name);
    const data = dashboardData.departments.map(d => d.orders);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: chartColors,
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        color: '#626c71'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    cornerRadius: 6,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            const percentage = ((context.parsed / context.dataset.data.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} orders (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function createPeakHoursChart() {
    const ctx = document.getElementById('peakHoursChart');
    if (!ctx) return;

    // Sort peak hours data by hour
    const sortedHours = dashboardData.peak_hours.sort((a, b) => a.hour - b.hour);
    
    const labels = sortedHours.map(item => {
        const hour = item.hour;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour}:00 ${ampm}`;
    });
    
    const data = sortedHours.map(item => item.orders);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Orders',
                data: data,
                borderColor: chartColors[0],
                backgroundColor: chartColors[0] + '20',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors[0],
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    cornerRadius: 6,
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            return tooltipItems[0].label;
                        },
                        label: function(context) {
                            return `${context.parsed.y} orders`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: '#626c71'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: '#626c71'
                    }
                }
            }
        }
    });
}

function createBasketSizeChart() {
    const ctx = document.getElementById('basketSizeChart');
    if (!ctx) return;

    // Generate basket size distribution data (simulated based on average of 9.8)
    const basketSizes = [];
    const frequencies = [];
    
    for (let i = 1; i <= 25; i++) {
        basketSizes.push(i);
        // Generate frequency based on normal distribution around 9.8
        const normalizedValue = Math.exp(-Math.pow(i - 9.8, 2) / (2 * Math.pow(3, 2)));
        frequencies.push(Math.round(normalizedValue * 150));
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: basketSizes,
            datasets: [{
                label: 'Number of Orders',
                data: frequencies,
                backgroundColor: chartColors[1],
                borderColor: chartColors[1],
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    cornerRadius: 6,
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            return `${tooltipItems[0].label} items`;
                        },
                        label: function(context) {
                            return `${context.parsed.y} orders`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Basket Size (Number of Items)',
                        color: '#626c71'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: '#626c71'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Orders',
                        color: '#626c71'
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: '#626c71'
                    }
                }
            }
        }
    });
}

// Table Population
function populateTables() {
    populateTopProductsTable();
    populateReorderTable();
}

function populateTopProductsTable() {
    const tbody = document.getElementById('topProductsBody');
    if (!tbody) return;

    const totalOrders = dashboardData.summary_metrics.total_orders;
    
    tbody.innerHTML = dashboardData.top_products.map(product => {
        const percentage = ((product.orders / totalOrders) * 100).toFixed(1);
        return `
            <tr>
                <td>${product.name}</td>
                <td>${product.orders}</td>
                <td>${percentage}%</td>
            </tr>
        `;
    }).join('');
}

function populateReorderTable() {
    const tbody = document.getElementById('reorderBody');
    if (!tbody) return;

    tbody.innerHTML = dashboardData.reorder_products.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>${product.rate}%</td>
        </tr>
    `).join('');
}

// Table Sorting
function initializeTableSorting() {
    const sortableHeaders = document.querySelectorAll('th[data-sort]');
    
    sortableHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const table = header.closest('table');
            const sortKey = header.getAttribute('data-sort');
            const currentSort = header.classList.contains('sort-asc') ? 'asc' : 
                              header.classList.contains('sort-desc') ? 'desc' : 'none';
            
            // Clear all sort classes from headers
            table.querySelectorAll('th').forEach(th => {
                th.classList.remove('sort-asc', 'sort-desc');
            });
            
            let newSort;
            if (currentSort === 'none' || currentSort === 'desc') {
                newSort = 'asc';
                header.classList.add('sort-asc');
            } else {
                newSort = 'desc';
                header.classList.add('sort-desc');
            }
            
            sortTable(table, sortKey, newSort);
        });
    });
}

function sortTable(table, sortKey, direction) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        let aValue, bValue;
        
        if (sortKey === 'name') {
            aValue = a.cells[0].textContent.trim();
            bValue = b.cells[0].textContent.trim();
            return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else if (sortKey === 'orders') {
            aValue = parseInt(a.cells[1].textContent);
            bValue = parseInt(b.cells[1].textContent);
        } else if (sortKey === 'percentage') {
            aValue = parseFloat(a.cells[2].textContent);
            bValue = parseFloat(b.cells[2].textContent);
        }
        
        if (direction === 'asc') {
            return aValue - bValue;
        } else {
            return bValue - aValue;
        }
    });
    
    // Clear and repopulate tbody
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

// Add hover effects and animations
function addInteractiveEffects() {
    // Add smooth scroll for tab changes
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.tab-content').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    });

    // Add loading states for dynamic content
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Animate in with staggered delay
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize interactive effects after DOM load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addInteractiveEffects, 100);
});

// Utility function for number formatting
function formatNumber(num) {
    return num.toLocaleString();
}

// Utility function for percentage formatting
function formatPercentage(num, decimals = 1) {
    return `${num.toFixed(decimals)}%`;
}

// Export functions for testing
window.dashboardApp = {
    switchTab,
    sortTable,
    formatNumber,
    formatPercentage,
    createTopProductsChart,
    createDepartmentChart
};