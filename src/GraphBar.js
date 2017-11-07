import React, { Component } from 'react';

class GraphBar extends Component {

    render() {
        
        return (
        	<div className="GraphBarContainer">
        		<h2>{this.props.name}</h2>
            	<div className="GraphBar" id={this.props.name+"Graph"} style={{width:this.props.height*10+"px"}}></div>
            	<p>{this.props.height}</p>
            </div>
        );
    }
}

export default GraphBar;