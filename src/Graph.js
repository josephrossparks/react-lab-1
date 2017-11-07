import React, { Component } from 'react';

import GraphBar from './GraphBar.js';

class Graph extends Component {

    render() {
        
        return (
        	<div className="Graph">
        		<GraphBar name="Vanilla" height={this.state.vanillaCount} />
            	<GraphBar name="Chocolate" height={this.state.chocolateCount} />
            	<GraphBar name="Strawberry" height={this.state.strawberryCount} />
            </div>
        );
    }
}

export default Graph;