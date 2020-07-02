// Load the Visualization API and the controls package.
google.charts.load('current', {
    'packages': ['corechart', 'controls']
});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(getData1);
google.charts.setOnLoadCallback(getData2);
google.charts.setOnLoadCallback(getData3);
google.charts.setOnLoadCallback(getData4);
google.charts.setOnLoadCallback(getData5);
google.charts.setOnLoadCallback(getData6);

function getData1() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1V8PO4BdZbR3tNM04JJWf_afLrX8Vm2MbU-Sa6eKcIrw/edit#gid=496119454');
    query.send(handleDataResponse1);
}
function handleDataResponse1(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var dashboard = new google.visualization.Dashboard(document.getElementById('programmatic_dashboard_div_1'));
    var regionFilter = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'control_filter_1',
        'options': {
            'filterColumnLabel': 'Region'
            },
        'state': {'selectedValues' : [1]}
        });
    var IMTActivityByTypeChart  = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'dynamic_chart_1',
        'options': {
            title: 'IMT: Activity By Type',
            width: 1200,
            height: 500,
            dataTable: data,
            isStacked: true}
            });
    IMTActivityByTypeChart.setView({'columns':[0,1,2,3,4,5,6,7,8]})
    dashboard.bind(regionFilter, IMTActivityByTypeChart);
    dashboard.draw(data);
}
function getData2() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1V8PO4BdZbR3tNM04JJWf_afLrX8Vm2MbU-Sa6eKcIrw/gviz/tq?sheet=traffic_signal_maintenance');
    query.setQuery('SELECT A, B, C')
    query.send(handleDataResponse2);
}
function handleDataResponse2(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var dashboard = new google.visualization.Dashboard(document.getElementById('programmatic_dashboard_div_2'));
    var regionFilter = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'control_filter_2',
        'options': {
            'filterColumnLabel': 'Region'
            },
        'state': {'selectedValues' : [1]}
        });
      var PercentOperationalDevicesChart  = new google.visualization.ChartWrapper({
        'chartType' : 'LineChart',
        'containerId': 'dynamic_chart_2',
        'options': {
            title: 'ITS: Percent Of Devices Operational',
            width: 1200,
            height: 500,
            dataTable: data
            }
        });
    PercentOperationalDevicesChart.setView({'columns':[0,2]})
    dashboard.bind(regionFilter, PercentOperationalDevicesChart);
    dashboard.draw(data);
}
function getData3() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1V8PO4BdZbR3tNM04JJWf_afLrX8Vm2MbU-Sa6eKcIrw/gviz/tq?sheet=traffic_signals_by_region');
    query.setQuery('SELECT A, B, C, D, E')
    query.send(handleDataResponse3);
}
function handleDataResponse3(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var dashboard = new google.visualization.Dashboard(document.getElementById('programmatic_dashboard_div_3'));
    var regionFilter = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'control_filter_3',
        'options': {
            'filterColumnLabel': 'Region'
            },
        'state': {'selectedValues' : [1]}
        });
    var MaintenanceTrafficSignalsChart  = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'dynamic_chart_3',
        'options': {
            title: 'Maintenance: Number of Devices Operational / Non-Operational',
            width: 1200,
            height: 500,
            dataTable: data,
            isStacked: true}
            });
    MaintenanceTrafficSignalsChart.setView({'columns':[0,1,2]})
    dashboard.bind(regionFilter, MaintenanceTrafficSignalsChart);
    dashboard.draw(data);
}
function getData4() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1V8PO4BdZbR3tNM04JJWf_afLrX8Vm2MbU-Sa6eKcIrw/gviz/tq?sheet=udot_traffic_downloads');
    query.setQuery('SELECT A, B, C')
    query.send(handleDataResponse4);
}
function handleDataResponse4(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var dashboard = new google.visualization.Dashboard(document.getElementById('programmatic_dashboard_div_4'));
    var dateFilter = new google.visualization.ControlWrapper({
        'controlType': 'DateRangeFilter',
        'containerId': 'control_filter_4',
        'options': {
            'filterColumnLabel': 'Date'
            }
        });
    var MaintenanceTrafficSignalsChart  = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'dynamic_chart_4',
        'options': {
            title: 'UDOT Traffic App: Cummulative Downloads By Type	',
            width: 1200,
            height: 500,
            isStacked: true}
            });
    dashboard.bind(dateFilter, MaintenanceTrafficSignalsChart);
    dashboard.draw(data);
}
function getData5() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1V8PO4BdZbR3tNM04JJWf_afLrX8Vm2MbU-Sa6eKcIrw/gviz/tq?sheet=customer_service_maintenance');
    query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J, K, L, M')
    query.send(handleDataResponse5);
}
function handleDataResponse5(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var columnsTable = new google.visualization.DataTable();
    columnsTable.addColumn('number', 'colIndex');
    columnsTable.addColumn('string', 'colLabel');
    var initState= {selectedValues: []};
    // put the columns into this data table (skip column 0)
    for (var i = 1; i < data.getNumberOfColumns(); i++) {
        columnsTable.addRow([i, data.getColumnLabel(i)]);
    }
    initState.selectedValues.push(data.getColumnLabel(7));
    var NewWorkOrdersChart  = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'dynamic_chart_5',
        'dataTable' : data,
        'options': {
            title: 'Maintenance: New Work Orders By Work Group',
            width: 1200,
            height: 500,
            isStacked: true}
            });
    var columnFilter = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'control_filter_5',
        dataTable: columnsTable,
        options: {
            filterColumnLabel: 'colLabel',
            ui: {
                label: 'Work Group',
                allowMultiple: true,
                allowTyping: false
            }
        },
        state: initState
    });
    function setChartView() {
        var state = columnFilter.getState();
        var row;
        var columnIndices = [0];
        for (var i = 0; i < state.selectedValues.length; i++) {
            row = columnsTable.getFilteredRows([{column: 1, value: state.selectedValues[i]}])[0];
            columnIndices.push(columnsTable.getValue(row, 0));
        }
        // sort the indices into their original order
        columnIndices.sort(function (a, b) {
            return (a - b);
        });
        NewWorkOrdersChart.setView({columns: columnIndices});
        NewWorkOrdersChart.draw();
    };
    google.visualization.events.addListener(columnFilter, 'statechange', setChartView);
    setChartView();
    columnFilter.draw();
}
function getData6() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1V8PO4BdZbR3tNM04JJWf_afLrX8Vm2MbU-Sa6eKcIrw/gviz/tq?sheet=work_order_average_time');
    query.setQuery('SELECT A, B, C, D, E, F')
    query.send(handleDataResponse6);
}
function handleDataResponse6(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var columnsTable = new google.visualization.DataTable();
    columnsTable.addColumn('number', 'colIndex');
    columnsTable.addColumn('string', 'colLabel');
    var initState= {selectedValues: []};
    // put the columns into this data table (skip column 0)
    for (var i = 1; i < data.getNumberOfColumns(); i++) {
        columnsTable.addRow([i, data.getColumnLabel(i)]);
        initState.selectedValues.push(data.getColumnLabel(i));
    }
    var NewWorkOrdersChart  = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'dynamic_chart_6',
        'dataTable' : data,
        'options': {
            title: 'Maintenance: Average Days To Close Work Orders By Work Group',
            width: 1200,
            height: 500,
            isStacked: true}
            });
    var columnFilter = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'control_filter_6',
        dataTable: columnsTable,
        options: {
            filterColumnLabel: 'colLabel',
            ui: {
                label: 'Work Group',
                allowMultiple: true,
                allowTyping: false
            }
        },
        state: initState
    });
    function setChartView() {
        var state = columnFilter.getState();
        var row;
        var columnIndices = [0];
        for (var i = 0; i < state.selectedValues.length; i++) {
            row = columnsTable.getFilteredRows([{column: 1, value: state.selectedValues[i]}])[0];
            columnIndices.push(columnsTable.getValue(row, 0));
        }
        // sort the indices into their original order
        columnIndices.sort(function (a, b) {
            return (a - b);
        });
        NewWorkOrdersChart.setView({columns: columnIndices});
        NewWorkOrdersChart.draw();
    };
    google.visualization.events.addListener(columnFilter, 'statechange', setChartView);
    setChartView();
    columnFilter.draw();
}