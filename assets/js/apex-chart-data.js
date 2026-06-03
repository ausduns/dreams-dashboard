'use strict';

document.addEventListener('DOMContentLoaded', function () {

	// Credit Payment
	if (document.getElementById('credit-chart')) {
		const options = {
			// Data values are now populated to avoid Syntax Errors
			series: [
				{ name: 'Credit', data: [90] },
				{ name: 'Remaining', data: [10] },
			],
			chart: {
				type: 'bar',
				height: 20,
				stacked: true,
				stackType: '100%',
				toolbar: { show: false },
				sparkline: { enabled: true }
			},
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '100%',
				}
			},
			colors: ['#9614EB', '#E5E7EB'],
			fill: {
				type: 'pattern',
				opacity: 1,
				pattern: {
					style: 'verticalLines',
					width: 6,
					strokeWidth: 4
				}
			},
			tooltip: { enabled: true },
			xaxis: { categories: ['Usage'] }
		};

		const chart = new ApexCharts(document.querySelector("#credit-chart"), options);
		chart.render();
	}

	// Simple Line
	if (document.getElementById('s-line')) {
		const sline = {
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false,
				},
				borderWidth: 1,
				borderColor: '#000',
			},
			colors: ['var(--color-primary)'],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'straight',
				width: 2,
			},
			series: [{
				name: "Desktops",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
			}],
			title: {
				text: 'Product Trends by Month',
				align: 'left',
				style: {
					color: 'var(--color-default)',
				},
			},
			grid: {
				borderColor: 'var(--color-border-color)',
				row: {

					opacity: 0.5
				},
				padding: {
					left: -5,
					right: 0,
				},
			},
			xaxis: {
				labels: {
					style: {
						colors: 'var(--color-default)',
					},
				},
				axisBorder: {
					color: ['var(--color-border-color)'],
				},
				axisTicks: {
					color: ['var(--color-border-color)'],
				},
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
			},
			yaxis: {
				labels: {
					offsetX: -15,
					style: {
						colors: 'var(--color-default)',
					},
				},
			},
		}

		const chart = new ApexCharts(
			document.querySelector("#s-line"),
			sline
		);

		chart.render();
	}

	// Simple Line Area
	if (document.getElementById('s-line-area')) {
		const sLineArea = {
			chart: {
				height: 350,
				type: 'area',
				toolbar: {
					show: false,
				}
			},
			colors: ['var(--color-primary)', 'var(--color-warning)'],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'straight',
				width: 1,
			},
			grid: {
				borderColor: 'var(--color-border-color)',
				padding: {
					left: -5,
					right: -15,
				},
			},
			series: [{
				name: 'Income',
				data: [40, 56, 28, 50, 42, 50, 60]
			}, {
				name: 'Expense',
				data: [20, 36, 20, 40, 25, 40, 30]
			}],

			xaxis: {
				labels: {
					style: {
						colors: 'var(--color-default)',
					},
				},
				axisBorder: {
					color: ['var(--color-border-color)'],
				},
				axisTicks: {
					color: ['var(--color-border-color)'],
				},
				type: 'datetime',
				categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T05:35:00"],
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
			yaxis: {
				min: 0,
				max: 60,
				labels: {
					offsetX: -15,
					style: {
						colors: 'var(--color-default)',
					},
				},
			},
			legend: {
				labels: {
					colors: 'var(--color-default)',
				}
			},
		}

		const chart = new ApexCharts(
			document.querySelector("#s-line-area"),
			sLineArea
		);

		chart.render();
	}

	if (document.getElementById('s-col')) {
		const sCol = {
			chart: {
				height: 290,
				type: 'bar',
				toolbar: {
					show: false,
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '50%',
					borderRadius: 5,
					endingShape: 'rounded', // This rounds the top edges of the bars
				},
			},
			colors: ['var(--color-primary-500)', 'var(--color-success-500)', 'var(--color-warning-500)'],
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},

			series: [{
				name: 'Inprogress',
				data: [19, 65, 19, 19, 19, 19, 19]
			}, {
				name: 'Active',
				data: [89, 45, 89, 46, 61, 25, 79]
			},
			{
				name: 'Completed',
				data: [39, 39, 39, 80, 48, 48, 48]
			}],
			xaxis: {
				categories: ['15 Jan', '16 Jan', '17 Jan', '18 Jan', '19 Jan', '20 Jan', '21 Jan'],
				labels: {
					style: {
						colors: 'var(--color-default)',
						fontSize: '12px',
					}
				},
				axisBorder: {
					color: ['var(--color-border-color)'],
				},
				axisTicks: {
					color: ['var(--color-border-color)'],
				},
			},
			yaxis: {
				labels: {
					offsetX: -15,
					style: {
						colors: 'var(--color-default)',
						fontSize: '14px',
					}
				}
			},
			grid: {
				borderColor: 'var(--color-border-color)',
				strokeDashArray: 5,
				padding: {
					left: -8,
					right: -15,
				},
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return "" + val + "%"
					}
				}
			},
			legend: {
				labels: {
					colors: 'var(--color-default)',
				}
			},
		}

		const chart = new ApexCharts(
			document.querySelector("#s-col"),
			sCol
		);

		chart.render();
	}

	// Simple Column Stacked
	if (document.getElementById('s-col-stacked')) {
		const sColStacked = {
			chart: {
				height: 290,
				type: 'bar',
				stacked: true,
				toolbar: {
					show: false,
				}
			},
			responsive: [{
				breakpoint: 480,
				options: {
					legend: {
						position: 'bottom',
						offsetX: -10,
						offsetY: 0
					}
				}
			}],
			plotOptions: {
				bar: {
					horizontal: false,
				},
			},
			grid: {
				borderColor: 'var(--color-border-color)',
				padding: {
					left: -5,
					right: -15,
				},
			},
			colors: ['var(--color-primary-500)', 'var(--color-success-500)', 'var(--color-warning-500)', 'var(--color-pink-500)'],
			series: [{
				name: 'Laptops',
				data: [44, 55, 41, 67, 22, 43]
			}, {
				name: 'Cosmetics',
				data: [13, 23, 20, 8, 13, 27]
			}, {
				name: 'Medical Devices',
				data: [11, 17, 15, 15, 21, 14]
			}, {
				name: 'Software',
				data: [21, 7, 25, 13, 22, 8]
			}],
			yaxis: {
				labels: {
					offsetX: -15,
					style: {
						colors: 'var(--color-default)',
					},
				},
			},
			xaxis: {
				labels: {
					style: {
						colors: 'var(--color-default)',
					},
				},
				axisBorder: {
					color: ['var(--color-border-color)'],
				},
				axisTicks: {
					color: ['var(--color-border-color)'],
				},
				type: 'datetime',
				categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
			},
			legend: {
				labels: {
					colors: 'var(--color-default)',
				},
			},
			fill: {
				opacity: 1
			},
		}

		const chart = new ApexCharts(
			document.querySelector("#s-col-stacked"),
			sColStacked
		);

		chart.render();
	}

	// Simple Bar
	if (document.getElementById('s-bar')) {
		const sBar = {
			chart: {
				height: 350,
				type: 'bar',
				toolbar: {
					show: false,
				}
			},
			colors: ['var(--color-primary-600)'],
			grid: {
				borderColor: 'var(--color-border-color)',
				padding: {
					left: 0,
					right: -15,
				},
			},
			plotOptions: {
				bar: {
					horizontal: true,
				}
			},
			dataLabels: {
				enabled: false
			},
			series: [{
				data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
			}],
			xaxis: {
				labels: {
					style: {
						colors: 'var(--color-default)',
					},
				},
				axisBorder: {
					color: ['var(--color-border-color)'],
				},
				axisTicks: {
					color: ['var(--color-border-color)'],
				},
				categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
			},
			yaxis: {
				labels: {
					offsetX: -10,
					style: {
						colors: 'var(--color-default)',
					},
				},
			},
		}

		const chart = new ApexCharts(
			document.querySelector("#s-bar"),
			sBar
		);

		chart.render();
	}

	// Mixed Chart
	if (document.getElementById('mixed-chart')) {
		const options = {
			chart: {
				height: 350,
				type: 'line',
				toolbar: {
					show: false,
				}
			},
			colors: ['var(--color-primary-600)', 'var(--color-success-600)'],
			series: [{
				name: 'Website Blog',
				type: 'column',
				data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
			}, {
				name: 'Social Media',
				type: 'line',
				data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
			}],
			stroke: {
				width: [0, 4]
			},
			grid: {
				borderColor: 'var(--color-border-color)',
				padding: {
					left: -5,
					right: -15,
				},
			},
			title: {
				text: 'Traffic Sources',
				style: {
					color: 'var(--color-default)',
				},
			},
			legend: {
				labels: {
					colors: 'var(--color-default)',
				}
			},
			labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
			xaxis: {
				type: 'datetime',
				labels: {
					style: {
						colors: 'var(--color-default)',
					},
				},
				axisBorder: {
					color: ['var(--color-border-color)'],
				},
				axisTicks: {
					color: ['var(--color-border-color)'],
				}
			},
			yaxis: [{
				title: {
					text: 'Website Blog',
				},
				labels: {
					offsetX: -15,
					style: {
						colors: 'var(--color-default)',
					},
				},

			}, {
				opposite: true,
				title: {
					text: 'Social Media'
				},
				labels: {
					offsetX: -15,
					style: {
						colors: 'var(--color-default)',
					},
				},
			}]

		}

		const chart = new ApexCharts(
			document.querySelector("#mixed-chart"),
			options
		);

		chart.render();
	}

	// Donut Chart
	if (document.getElementById('donut-chart')) {
		const donutChart = {
			chart: {
				height: 330,
				type: 'donut',
				toolbar: {
					show: false,
				}
			},
			legend: {
				position: 'bottom',
				labels: {
					colors: 'var(--color-default)',
				}
			},
			colors: ['var(--color-primary-600)', 'var(--color-success-600)', 'var(--color-warning-600)', 'var(--color-pink-600)'],
			labels: ['Laptops', 'Cosmetics', 'Medical Devices', 'Software'],
			series: [44, 55, 41, 17],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		}

		const donut = new ApexCharts(
			document.querySelector("#donut-chart"),
			donutChart
		);

		donut.render();
	}

	// Radial Chart
	if (document.getElementById('radial-chart')) {
		const radialChart = {
			chart: {
				height: 350,
				type: 'radialBar',
				toolbar: {
					show: false,
				}
			},
			colors: ['var(--color-primary-600)', 'var(--color-success-600)', 'var(--color-warning-600)', 'var(--color-pink-600)'],
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: '22px',
							color: 'var(--color-title)',
						},
						value: {
							fontSize: '16px',
							color: 'var(--color-default)',
						},
						total: {
							show: true,
							label: 'Total',
							color: 'var(--color-default)',
							formatter: function (w) {
								return 249
							}
						}
					}
				}
			},
			series: [44, 55, 67, 83],
			labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
		}

		const chart = new ApexCharts(
			document.querySelector("#radial-chart"),
			radialChart
		);

		chart.render();
	}

	// Performance Chart
	if (document.getElementById('analytics-chart')) {
		const options = {
			series: [{
				name: "Interaction",
				data: [8000, 28000, 18000, 39000, 32000, 38000, 18000, 27000, 20000, 34000]
			}, {
				name: "Resolved",
				data: [5000, 22000, 15000, 29000, 22000, 28000, 12000, 17000, 14000, 28000]
			}],
			chart: {
				height: 320, // Default height for smaller screens
				type: 'area',
				toolbar: { show: false },
				zoom: { enabled: false }
			},
			// --- RESPONSIVE SECTION START ---
			responsive: [{
				breakpoint: 3000, // Apply this to anything up to 3000px
				options: {
					chart: {
						height: 320 // Target height
					}
				}
			}, {
				breakpoint: 1400, // When screen is 1400px or less, go back to 320
				options: {
					chart: {
						height: 320
					}
				}
			}],
			// --- RESPONSIVE SECTION END ---
			colors: ['#10B981', '#A855F7'],
			dataLabels: { enabled: false },
			stroke: {
				curve: 'smooth',
				width: 2
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.2,
					opacityTo: 0.0,
					stops: [0, 90, 100]
				}
			},
			grid: {
				show: true,
				borderColor: '#E5E7EB',
				strokeDashArray: 4,
				position: 'back',
				xaxis: { lines: { show: false } },
				yaxis: { lines: { show: true } },
				padding: { left: 0, right: 0, bottom: -10 }
			},
			xaxis: {
				categories: ['Mon', '', 'Tue', '', 'Wed', '', 'Thu', '', 'Fri', '', 'Sat', '', 'Sun'],
				axisBorder: { show: false },
				axisTicks: { show: false },
				labels: {
					style: { colors: '#64748b', fontSize: '12px' },
					offsetX: -3
				}
			},
			yaxis: {
				min: 0,
				max: 40000,
				tickAmount: 4,
				labels: {
					style: { colors: '#64748b', fontSize: '12px' },
					formatter: (val) => val === 0 ? '0' : (val / 1000) + 'k',
					offsetX: -12
				}
			},
			tooltip: {
				shared: true,
				intersect: false,
				theme: 'dark',
				custom: function ({ series, seriesIndex, dataPointIndex, w }) {
					return '<div class="custom-tooltip" style="padding:10px;">' +
						'<div><span>Interaction: </span><strong>' + series[0][dataPointIndex] + '</strong></div>' +
						'<div><span>Resolved: </span><strong>' + series[1][dataPointIndex] + '</strong></div>' +
						'</div>';
				}
			},
			legend: { show: false }
		};

		const chart = new ApexCharts(document.querySelector("#analytics-chart"), options);
		chart.render();
	}

	// Employee
	if (document.getElementById('employee-distribution')) {
		const options = {
			series: [
				{
					name: 'GPT',
					data: [4000, 4000, 4000, 4000]
				},
				{
					name: 'Llama 3',
					data: [3100, 3100, 3100, 3100]
				},
				{
					name: 'Llama 3',
					data: [2400, 2400, 2400, 2400]
				}
			],

			chart: {
				type: 'bar',
				height: 260,
				toolbar: { show: false }
			},

			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '42%',        // ⭐ controls spacing
					borderRadius: 8,           // ⭐ rounded bars
					borderRadiusApplication: 'end',
					borderRadiusWhenStacked: 'last',
				}
			},

			dataLabels: {
				enabled: true,
				formatter: val => `${val / 1000}k`,
				style: {
					fontSize: '12px',
					colors: ['#fff']
				},
				offsetY: -6
			},

			fill: {
				type: 'pattern',
				pattern: {
					style: 'slantedLines',
					width: 6,
					height: 6,
					strokeWidth: 2
				}
			},

			colors: ['#8B5CF6', '#10B981', '#F59E0B'],

			xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu'],
				labels: {
					style: {
						fontSize: '13px'
					}
				}
			},

			yaxis: {
				labels: {
					formatter: val => `${val / 1000}k`
				}
			},

			grid: {
				show: false
			},

			legend: {
				show: false
			},

			tooltip: {
				custom: function ({ series, dataPointIndex }) {
					return `
            <div style="padding:10px">
              <strong>Thu</strong><br/>
              GPT : ${series[0][dataPointIndex] / 1000}K<br/>
              Llama 3 : ${series[1][dataPointIndex] / 1000}K<br/>
              Llama 3 : ${series[2][dataPointIndex] / 1000}K
            </div>
          `
				}
			}
		};

		const chart = new ApexCharts(
			document.querySelector("#employee-distribution"),
			options
		);

		chart.render();
	}

	// Credit Payment
	if (document.getElementById('request-chart')) {
		const options = {
			// Data values are now populated to avoid Syntax Errors
			series: [
				{ name: 'Request', data: [50] },
				{ name: 'Remaining', data: [50] },
			],
			chart: {
				type: 'bar',
				width: 106,
				height: 30,
				stacked: true,
				stackType: '100%',
				toolbar: { show: false },
				sparkline: { enabled: true }
			},
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '100%',
				}
			},
			colors: ['#7A13F0', '#E5E7EB'],
			fill: {
				type: 'pattern',
				opacity: 1,
				pattern: {
					style: 'verticalLines',
					width: 6,
					strokeWidth: 4
				}
			},
			tooltip: { enabled: true },
			xaxis: { categories: ['Last Month'] }
		};

		const chart = new ApexCharts(document.querySelector("#request-chart"), options);
		chart.render();
	}

	// Image Chart
	if (document.getElementById('image-chart')) {
		const totalBlocks = 17;
		const completionPercentage = 95; // Input your percentage here (e.g., 95%)

		// Calculate how many blocks need to be filled
		const filledBlocks = Math.round((completionPercentage / 100) * totalBlocks);

		const options = {
			series: [{
				data: Array(totalBlocks).fill(1)
			}],

			chart: {
				type: 'bar',
				height: 12, // FIXED HEIGHT: 16px
				width: '100%',
				toolbar: { show: false },
				sparkline: { enabled: true }
			},

			plotOptions: {
				bar: {
					distributed: true,
					// Adjusted to create a wider 12px gap between the 16px circles
					columnWidth: '50%',
					borderRadius: 6,     // 50% border-radius for perfect circles
					borderRadiusApplication: 'around',
				}
			},

			colors: [
				({ dataPointIndex }) =>
					dataPointIndex < filledBlocks
						? '#F26522' // Active Orange
						: '#E5E7EB' // Inactive Gray
			],

			dataLabels: { enabled: false },
			grid: { show: false },
			xaxis: {
				labels: { show: false },
				axisBorder: { show: false },
				axisTicks: { show: false }
			},
			yaxis: { show: false, max: 1 },
			tooltip: { enabled: false },

			states: {
				hover: { filter: { type: 'none' } },
				active: { filter: { type: 'none' } }
			}
		};

		new ApexCharts(document.querySelector("#image-chart"), options).render();
		document.querySelectorAll('#image-chart .apexcharts-series path').forEach(path => {
			// Example: add rounded caps using stroke-linecap
			path.setAttribute('stroke-linecap', 'round');
		});
	}

	// Accuracy Chart
	if (document.getElementById('accuracy-chart')) {
		const sCol = {
			chart: {
				width: 110,
				height: 54,
				type: 'bar',
				toolbar: { show: false },
				sparkline: { enabled: true }
			},
			dataLabels: { enabled: false },
			series: [{
				name: 'Accuracy',
				data: [20, 40, 30, 70, 60, 60, 60] // You can adjust these
			}],
			colors: ['#155DFC'],
			plotOptions: {
				bar: {
					borderRadius: 4,
					borderRadiusWhenStacked: 'all',
					borderRadiusApplication: 'around', // Ensures top-only rounding for vertical bars
					endingShape: 'around',
					colors: {
						backgroundBarOpacity: 0.5,
						backgroundBarRadius: 4,
						hover: {
							enabled: true,
							borderColor: '#F26522', // Color when hovering over the bar
						}
					}
				},
			},
			xaxis: {
				labels: { show: false },
				axisTicks: { show: false },
				axisBorder: { show: false }
			},
			yaxis: { show: false },
			grid: { show: false },
			tooltip: { enabled: true }
		};

		const chart = new ApexCharts(document.querySelector("#accuracy-chart"), sCol);
		chart.render();
	}

	// Project Dashboard Charts 
	function projectDashboardChart(){
		if (document.querySelector('#proj-progress-chart')) {
			new ApexCharts(document.querySelector('#proj-progress-chart'),{
				series:[{data:[85,65,92,45,78,55,70,88]}],chart:{type:'bar',height:300,toolbar:{show:false}},
				plotOptions:{bar:{horizontal:true,barHeight:'60%',borderRadius:4,distributed:true}},
				colors:['var(--color-success)','var(--color-primary)','var(--color-success)','var(--color-warning)','var(--color-primary)','var(--color-primary)','var(--color-primary)','var(--color-success)'],
				xaxis:{categories:['Website Redesign','Mobile App','API Gateway','Dashboard v2','Auth System','Payment Module','Analytics','CI/CD Pipeline']},
				dataLabels:{enabled:true,formatter:function(v){return v+'%'}},grid:{borderColor:'var(--color-border-color)'},legend:{show:false}
			}).render();
		}
		if (document.querySelector('#proj-tasks-chart')) {
			new ApexCharts(document.querySelector('#proj-tasks-chart'),{
				series:[24,32,15,22,7],chart:{type:'donut',height:320},
				labels:['To Do','In Progress','In Review','Done','Blocked'],
				colors:['#94a3b8','var(--color-primary)','var(--color-warning)','var(--color-success)','var(--color-danger)'],
				plotOptions:{pie:{donut:{size:'65%',labels:{show:true,total:{show:true,label:'Total Tasks',formatter:function(){return'847'}}}}}},legend:{position:'bottom'}
			}).render();
		}
		if (document.querySelector('#proj-timeline-chart')) {
			new ApexCharts(document.querySelector('#proj-timeline-chart'),{
				series:[{data:[{x:'Website',y:[new Date('2026-01-05').getTime(),new Date('2026-03-15').getTime()]},{x:'Mobile App',y:[new Date('2026-01-15').getTime(),new Date('2026-04-01').getTime()]},{x:'API Gateway',y:[new Date('2026-02-01').getTime(),new Date('2026-03-10').getTime()]},{x:'Dashboard',y:[new Date('2026-02-15').getTime(),new Date('2026-04-20').getTime()]},{x:'Auth System',y:[new Date('2026-01-20').getTime(),new Date('2026-03-25').getTime()]},{x:'CI/CD',y:[new Date('2026-02-10').getTime(),new Date('2026-03-08').getTime()]}]}],
				chart:{type:'rangeBar',height:300,toolbar:{show:false}},
				plotOptions:{bar:{horizontal:true,borderRadius:4,barHeight:'60%'}},
				colors:['var(--color-primary)'],
				xaxis:{type:'datetime'},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.querySelector('#proj-burndown-chart')) {
			new ApexCharts(document.querySelector('#proj-burndown-chart'),{
				series:[{name:'Ideal',data:[120,111,103,94,86,77,69,60,51,43,34,26,17,0]},{name:'Actual',data:[120,115,108,98,92,85,78,72,68,60,55,48,40,32]}],
				chart:{type:'area',height:325,toolbar:{show:false}},colors:['#94a3b8','var(--color-primary)'],
				fill:{type:'gradient',gradient:{shadeIntensity:1,opacityFrom:0.3,opacityTo:0.05}},stroke:{curve:'smooth',width:2,dashArray:[5,0]},
				xaxis:{categories:['D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13','D14']},
				yaxis:{title:{text:'Story Points'}},legend:{position:'top'},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.getElementById('proj-workload-chart')) {
			new Chart(document.getElementById('proj-workload-chart'),{
				type:'bar',data:{labels:['Alice','Bob','Carol','Dave','Eve','Frank','Grace','Henry'],
				datasets:[{label:'Assigned',data:[12,8,15,10,7,11,9,13],backgroundColor:'#6366f1'},
				{label:'Completed',data:[10,7,12,8,6,9,7,11],backgroundColor:'#10b981'},
				{label:'Overdue',data:[1,0,2,1,0,1,1,0],backgroundColor:'#ef4444'}]},
				options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:{position:'top'}},scales:{x:{stacked:true},y:{stacked:true}}}
			});
		}
	};
	projectDashboardChart();
	

	// CRM Dashboard Charts 
	function crmDashboardChart(){
		// Revenue Overview - Area Chart
		if (document.querySelector('#crm-revenue-chart')) {
			var options = {
				series: [{name:'Revenue',data:[180000,195000,210000,185000,240000,220000,260000,245000,280000,310000,295000,340000]},{name:'Target',data:[200000,200000,220000,220000,240000,240000,260000,260000,280000,280000,300000,300000]}],
				chart:{type:'area',height:320,toolbar:{show:false}},
				colors:['var(--color-primary)','var(--color-success)'],
				fill:{type:'gradient',gradient:{shadeIntensity:1,opacityFrom:0.4,opacityTo:0.1}},
				stroke:{curve:'smooth',width:2},
				xaxis:{categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']},
				yaxis:{labels:{formatter:function(v){return'$'+v/1000+'K'}}},
				tooltip:{y:{formatter:function(v){return'$'+v.toLocaleString()}}},
				legend:{position:'top'},
				grid:{borderColor:'var(--color-border-color)'}
			};
			new ApexCharts(document.querySelector('#crm-revenue-chart'),options).render();
		}
		// Lead Sources - Donut
		if (document.querySelector('#crm-source-chart')) {
			var options = {
				series:[35,25,20,12,8],
				chart:{type:'donut',height:320},
				labels:['Direct','Referral','Social','Email','Paid Ads'],
				colors:['var(--color-primary)','var(--color-success)','var(--color-info)','var(--color-warning)','var(--color-danger)'],
				plotOptions:{pie:{donut:{size:'65%',labels:{show:true,total:{show:true,label:'Total Leads',formatter:function(){return'1,847'}}}}}},
				legend:{position:'bottom'}
			};
			new ApexCharts(document.querySelector('#crm-source-chart'),options).render();
		}
		// Pipeline - Horizontal Bar
		if (document.querySelector('#crm-pipeline-chart')) {
			var options = {
				series:[{data:[450,280,164,89,52]}],
				chart:{type:'bar',height:280,toolbar:{show:false}},
				plotOptions:{bar:{horizontal:true,barHeight:'60%',borderRadius:4}},
				colors:['var(--color-primary)'],
				xaxis:{categories:['Lead','Qualified','Proposal','Negotiation','Closed Won']},
				grid:{borderColor:'var(--color-border-color)'},
				dataLabels:{enabled:true,formatter:function(v){return v+' deals'}}
			};
			new ApexCharts(document.querySelector('#crm-pipeline-chart'),options).render();
		}
		// Conversion by Channel - RadialBar
		if (document.querySelector('#crm-conversion-chart')) {
			var options = {
				series:[78,68,52,44],
				chart:{type:'radialBar',height:300},
				plotOptions:{radialBar:{hollow:{size:'30%'},dataLabels:{name:{fontSize:'14px'},value:{fontSize:'16px'},total:{show:true,label:'Avg Rate',formatter:function(){return'60.5%'}}}}},
				labels:['Referral','Website','Email','Social'],
				colors:['var(--color-success)','var(--color-primary)','var(--color-warning)','var(--color-info)']
			};
			new ApexCharts(document.querySelector('#crm-conversion-chart'),options).render();
		}
		// Team Activity - Chart.js Line
		if (document.getElementById('crm-activity-chart')) {
			new Chart(document.getElementById('crm-activity-chart'),{
				type:'line',
				data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[
					{label:'Calls',data:[45,52,38,65,48,22,15],borderColor:'#6366f1',backgroundColor:'rgba(99,102,241,0.1)',tension:0.4,fill:true},
					{label:'Emails',data:[120,98,145,110,132,45,30],borderColor:'#10b981',backgroundColor:'rgba(16,185,129,0.1)',tension:0.4,fill:true},
					{label:'Meetings',data:[12,18,15,22,19,5,3],borderColor:'#f59e0b',backgroundColor:'rgba(245,158,11,0.1)',tension:0.4,fill:true}
				]},
				options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top'}},scales:{y:{beginAtZero:true}}}
			});
		}
	};
	crmDashboardChart();

	
	// eCommerce Dashboard Charts 
	function ecomDashboardChart(){
		if (document.querySelector('#ecom-sales-chart')) {
			new ApexCharts(document.querySelector('#ecom-sales-chart'),{
				series:[{name:'This Year',data:[52000,58000,61000,55000,72000,68000,78000,82000,75000,88000,92000,84700]},{name:'Last Year',data:[42000,48000,52000,47000,58000,55000,62000,66000,60000,72000,76000,70000]}],
				chart:{type:'area',height:320,toolbar:{show:false}},colors:['var(--color-primary)','var(--color-success)'],
				fill:{type:'gradient',gradient:{shadeIntensity:1,opacityFrom:0.4,opacityTo:0.1}},stroke:{curve:'smooth',width:2},
				xaxis:{categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']},
				yaxis:{labels:{formatter:function(v){return'$'+v/1000+'K'}}},legend:{position:'top'},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.querySelector('#ecom-category-chart')) {
			new ApexCharts(document.querySelector('#ecom-category-chart'),{
				series:[35,25,18,12,10],chart:{type:'donut',height:320},
				labels:['Electronics','Clothing','Home & Garden','Sports','Beauty'],
				colors:['var(--color-primary)','var(--color-success)','var(--color-info)','var(--color-warning)','var(--color-danger)'],
				plotOptions:{pie:{donut:{size:'65%',labels:{show:true,total:{show:true,label:'Total Revenue',formatter:function(){return'$847K'}}}}}},legend:{position:'bottom'}
			}).render();
		}
		if (document.querySelector('#ecom-orders-chart')) {
			new ApexCharts(document.querySelector('#ecom-orders-chart'),{
				series:[{name:'Pending',data:[45,52,38,41,35,48,42]},{name:'Processing',data:[30,35,28,32,25,38,30]},{name:'Shipped',data:[65,72,58,68,55,75,62]},{name:'Delivered',data:[120,135,110,125,98,140,118]},{name:'Returned',data:[8,12,6,10,5,14,9]}],
				chart:{type:'bar',height:300,stacked:true,toolbar:{show:false}},
				colors:['var(--color-warning)','var(--color-info)','var(--color-primary)','var(--color-success)','var(--color-danger)'],
				plotOptions:{bar:{columnWidth:'50%',borderRadius:4}},xaxis:{categories:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']},
				legend:{position:'top'},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.querySelector('#ecom-product-chart')) {
			new ApexCharts(document.querySelector('#ecom-product-chart'),{
				series:[{data:[2450,1890,1560,1230,980]}],chart:{type:'bar',height:300,toolbar:{show:false}},
				plotOptions:{bar:{horizontal:true,barHeight:'60%',borderRadius:4}},colors:['var(--color-primary)'],
				xaxis:{categories:['Wireless Earbuds','Smart Watch','Laptop Stand','USB-C Hub','Phone Case']},
				dataLabels:{enabled:true,formatter:function(v){return v+' units'}},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.getElementById('ecom-customers-chart')) {
			new Chart(document.getElementById('ecom-customers-chart'),{
				type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
				datasets:[{label:'New',data:[420,480,510,450,580,540,620,680,640,720,760,700],borderColor:'#6366f1',backgroundColor:'rgba(99,102,241,0.1)',tension:0.4,fill:true},
				{label:'Returning',data:[680,720,750,710,790,760,830,890,860,940,980,920],borderColor:'#10b981',backgroundColor:'rgba(16,185,129,0.1)',tension:0.4,fill:true}]},
				options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top'}},scales:{y:{beginAtZero:true}}}
			});
		}
	};
	ecomDashboardChart();

	// Marketing Dashboard Charts 
	function mktDashboardChart(){
		if (document.querySelector('#mkt-campaign-chart')) {
			new ApexCharts(document.querySelector('#mkt-campaign-chart'),{
				series:[{name:'Impressions',data:[120000,135000,142000,128000,155000,148000,165000,172000,158000,180000,175000,192000]},{name:'Clicks',data:[4800,5400,5680,5120,6200,5920,6600,6880,6320,7200,7000,7680]},{name:'Conversions',data:[230,265,280,250,305,290,325,340,310,355,345,380]}],
				chart:{type:'area',height:320,toolbar:{show:false}},colors:['var(--color-primary)','var(--color-info)','var(--color-success)'],
				fill:{type:'gradient',gradient:{shadeIntensity:1,opacityFrom:0.4,opacityTo:0.1}},stroke:{curve:'smooth',width:2},
				xaxis:{categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']},
				legend:{position:'top'},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.querySelector('#mkt-channel-chart')) {
			new ApexCharts(document.querySelector('#mkt-channel-chart'),{
				series:[32,28,20,12,8],chart:{type:'donut',height:320},
				labels:['Organic','Paid Ads','Social','Email','Direct'],
				colors:['var(--color-success)','var(--color-primary)','var(--color-info)','var(--color-warning)','var(--color-teal)'],
				plotOptions:{pie:{donut:{size:'65%',labels:{show:true,total:{show:true,label:'Total Traffic',formatter:function(){return'4.7M'}}}}}},legend:{position:'bottom'}
			}).render();
		}
		if (document.querySelector('#mkt-roi-chart')) {
			new ApexCharts(document.querySelector('#mkt-roi-chart'),{
				series:[{data:[420,380,340,290,250,180]}],chart:{type:'bar',height:300,toolbar:{show:false}},
				plotOptions:{bar:{horizontal:true,barHeight:'60%',borderRadius:4}},colors:['var(--color-success)'],
				xaxis:{categories:['Summer Sale','Product Launch','Content Marketing','Email Series','Social Push','Influencer']},
				dataLabels:{enabled:true,formatter:function(v){return v+'%'}},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.querySelector('#mkt-funnel-chart')) {
			new ApexCharts(document.querySelector('#mkt-funnel-chart'),{
				series:[{data:[100000,45000,22000,12000,5800]}],chart:{type:'bar',height:300,toolbar:{show:false}},
				plotOptions:{bar:{horizontal:true,barHeight:'70%',borderRadius:4,distributed:true}},
				colors:['var(--color-primary)','var(--color-info)','var(--color-warning)','var(--color-success)','var(--color-teal)'],
				xaxis:{categories:['Awareness','Interest','Consideration','Intent','Purchase']},
				dataLabels:{enabled:true,formatter:function(v){return v>=1000?v/1000+'K':v}},grid:{borderColor:'var(--color-border-color)'},legend:{show:false}
			}).render();
		}
	};
	mktDashboardChart();

	
	// HRM Dashboard Charts 
	function hrmDashboardChart(){
		if (document.querySelector('#hrm-headcount-chart')) {
			new ApexCharts(document.querySelector('#hrm-headcount-chart'),{
				series:[{name:'Hires',data:[18,22,15,25,20,28,24,30,19,26,22,32]},{name:'Exits',data:[5,8,4,6,7,5,9,6,4,8,5,7]}],
				chart:{type:'area',height:320,toolbar:{show:false}},colors:['var(--color-success)','var(--color-danger)'],
				fill:{type:'gradient',gradient:{shadeIntensity:1,opacityFrom:0.4,opacityTo:0.1}},stroke:{curve:'smooth',width:2},
				xaxis:{categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']},
				legend:{position:'top'},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.querySelector('#hrm-department-chart')) {
			new ApexCharts(document.querySelector('#hrm-department-chart'),{
				series:[30,22,15,10,12,11],chart:{type:'donut',height:320},
				labels:['Engineering','Sales','Marketing','HR','Finance','Operations'],
				colors:['var(--color-primary)','var(--color-success)','var(--color-info)','var(--color-warning)','var(--color-teal)','var(--color-danger)'],
				plotOptions:{pie:{donut:{size:'65%',labels:{show:true,total:{show:true,label:'Total',formatter:function(){return'1,248'}}}}}},legend:{position:'bottom'}
			}).render();
		}
		if (document.querySelector('#hrm-attendance-chart')) {
			new ApexCharts(document.querySelector('#hrm-attendance-chart'),{
				series:[{name:'Present',data:[1180,1195,1172,1188,1165]},{name:'Absent',data:[28,22,35,25,42]},{name:'On Leave',data:[40,31,41,35,41]}],
				chart:{type:'bar',height:300,stacked:true,toolbar:{show:false}},
				colors:['var(--color-success)','var(--color-danger)','var(--color-warning)'],
				plotOptions:{bar:{columnWidth:'50%',borderRadius:4}},xaxis:{categories:['Mon','Tue','Wed','Thu','Fri']},
				legend:{position:'top'},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.querySelector('#hrm-recruitment-chart')) {
			new ApexCharts(document.querySelector('#hrm-recruitment-chart'),{
				series:[{data:[485,312,156,48,32]}],chart:{type:'bar',height:300,toolbar:{show:false}},
				plotOptions:{bar:{horizontal:true,barHeight:'60%',borderRadius:4}},colors:['var(--color-primary)'],
				xaxis:{categories:['Applied','Screened','Interviewed','Offered','Hired']},
				dataLabels:{enabled:true},grid:{borderColor:'var(--color-border-color)'}
			}).render();
		}
		if (document.querySelector('#hrm-satisfaction-chart')) {
			new ApexCharts(document.querySelector('#hrm-satisfaction-chart'),{
				series:[88,76,82,91,72],chart:{type:'radialBar',height:400},
				plotOptions:{radialBar:{hollow:{size:'25%'},dataLabels:{name:{fontSize:'13px'},value:{fontSize:'14px'},total:{show:true,label:'Average',formatter:function(){return'81.8%'}}}}},
				labels:['Engineering','Sales','Marketing','HR','Finance'],
				colors:['var(--color-primary)','var(--color-success)','var(--color-info)','var(--color-warning)','var(--color-teal)']
			}).render();
		}
	};
	hrmDashboardChart();

// Token Usage Chart
function tokenUsageChart() {

    const tokenChartEl = document.querySelector("#tokenUsageChart");

    // Prevent error if element not found
    if (!tokenChartEl) return;

    const tokenChart = new ApexCharts(tokenChartEl, {
        chart: {
            type: 'area',
            height: 420,
            toolbar: {
                show: false
            }
        },

        series: [
            {
                name: 'Input Tokens',
                data: [280, 310, 295, 340, 320, 380, 350, 290, 310, 365, 340, 395, 370, 310, 340, 380, 360, 420, 390, 350, 370, 410, 380, 340, 360, 400, 390, 420, 410, 380]
            },
            {
                name: 'Output Tokens',
                data: [120, 145, 130, 160, 150, 175, 165, 135, 140, 170, 155, 180, 170, 145, 155, 175, 165, 195, 180, 160, 170, 190, 175, 155, 165, 185, 180, 195, 190, 175]
            }
        ],

        colors: ['#3b82f6', '#7a13f0'],

        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.4,
                opacityTo: 0.05
            }
        },

        stroke: {
            curve: 'smooth',
            width: 2
        },

        xaxis: {
            categories: Array.from(
                { length: 30 },
                (_, i) => `Feb ${i + 1}`
            )
        },

        yaxis: {
            labels: {
                formatter: function (v) {
                    return v + '';
                }
            }
        },

        tooltip: {
            y: {
                formatter: function (v) {
                    return v.toLocaleString() + ' tokens';
                }
            }
        },

        legend: {
            position: 'top'
        }
    });

    tokenChart.render();
}

tokenUsageChart();


// Cost Breakdown Donut Chart
function costBreakdownChart() {

    const costChartEl = document.querySelector("#costBreakdownChart");

    // Prevent error if element not found
    if (!costChartEl) return;

    const costChart = new ApexCharts(costChartEl, {
        chart: {
            type: 'donut',
            height: 250
        },

        series: [1281, 854, 427, 199, 86],

        labels: ['GPT-4.1', 'Claude', 'Llama 3', 'Whisper', 'DALL-E'],

        colors: ['#7a13f0', '#8b5cf6', '#3b82f6', '#f59e0b', '#ec4899'],

        legend: {
            show: false
        },

        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function () {
                                return '$2,847';
                            }
                        }
                    }
                }
            }
        }
    });

    costChart.render();
}

costBreakdownChart();

	

});