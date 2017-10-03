import React from 'react';
import ReactDOM from 'react-dom';
import {Axis,Grid,ToolTip,Dots,LineChart} from './charts/LineChart.jsx';
// init


class  Visitors extends React.Component{
    render (){
        return (
            <div>
                <h3>Visitors to your site</h3>
                <div className="bottom-right-svg">
                    <LineChart/>
                </div>
            </div>
        )
    }
}

// ReactDOM.render(<Browser/>,document.getElementById("browser"));
// ReactDOM.render(<RetVisitors/>,document.getElementById("ret_visitors"));
ReactDOM.render(<Visitors/>,document.getElementById('top-line-chart'));
