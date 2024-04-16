import React, { Component } from 'react';
import { Chart, registerables } from 'chart.js';

// Register necessary chart components
Chart.register(...registerables);

class Graphs extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        // Use Chart.js here to create your charts
        const ctx = this.chartRef.current.getContext('2d');
        // Check if there's an existing chart instance and destroy it
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }
        // Dynamically create chart based on the type prop
        this.chartInstance = new Chart(ctx, {
            type: this.props.type,
            data: {
                labels: this.props.labels,
                datasets: [{
                    label: this.props.datasetLabel,
                    data: this.props.data,
                    backgroundColor: this.props.backgroundColor,
                    borderColor: this.props.borderColor,
                    borderWidth: 1
                }]
            },
            options: this.props.options || {}
        });
    }

    render() {
        return (
            <div>
                {/* Your chart canvas element */}
                <canvas ref={this.chartRef} width="400" height="400"></canvas>
            </div>
        );
    }
}

export default Graphs;
