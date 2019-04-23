import React, { Component } from 'react';
import './App.css';
import {ChartJSBarWrapper} from "./components/ChartJS/ChartJSBarWrapper";
import {ChartJSPieWrapper} from "./components/ChartJS/ChartJSPieWrapper";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import styled from 'styled-components';
import {ChartJSLineWrapper} from "./components/ChartJS/ChartJSLineWrapper";
import {ChartJSLineWithoutAxisWrapper} from "./components/ChartJS/ChartJSLineWithoutAxisWrapper";
import {HighchartPieWrapper} from "./components/Highchart/HighchartPieWrapper";
import {HighchartBarWrapper} from "./components/Highchart/HighchartBarWrapper";
import {HighchartLineWrapper} from "./components/Highchart/HighchartLineWrapper";
import {HighchartWithoutLineWrapper} from "./components/Highchart/HighchartJSLineWithoutAxisWrapper";

const MenuItem = styled.div`
    display: inline-block;
    width: 25%;
    margin-top: 10px
`

const Wrapper = styled.div`
    max-width: 70vw;
    margin: 0 auto;
`

const MenuHeader = styled.h4`
    text-align: center
`

const urls = {
    chartjs: {
        pie: "/chartjs/pie/",
        bar: "/chartjs/bar/",
        line: "/chartjs/line/",
        lineNoAxis: "/chartjs/line-wo-axis/"
    },
    highcharts: {
        pie: "/highcharts/pie/",
        bar: "/highcharts/bar/",
        line: "/highcharts/line/",
        lineNoAxis: "/highcharts/line-wo-axis/"
    }
}

class App extends Component {
  render() {
    return (
     <Router>
         <Wrapper>
             <MenuHeader>Chart.js</MenuHeader>
             <nav>
                 <MenuItem><Link to={urls.chartjs.pie}>Pie</Link></MenuItem>
                 <MenuItem><Link to={urls.chartjs.bar}>Bar</Link></MenuItem>
                 <MenuItem><Link to={urls.chartjs.line}>Line</Link></MenuItem>
                 <MenuItem><Link to={urls.chartjs.lineNoAxis}>Line without axis</Link></MenuItem>
             </nav>
             <MenuHeader>Highcharts</MenuHeader>
             <nav>
                 <MenuItem><Link to={urls.highcharts.pie}>Pie</Link></MenuItem>
                 <MenuItem><Link to={urls.highcharts.bar}>Bar</Link></MenuItem>
                 <MenuItem><Link to={urls.highcharts.line}>Line</Link></MenuItem>
                 <MenuItem><Link to={urls.highcharts.lineNoAxis}>Line without axis</Link></MenuItem>
             </nav>

             <Route path={urls.chartjs.pie} component={ChartJSPieWrapper}/>
             <Route path={urls.chartjs.bar} component={ChartJSBarWrapper}/>
             <Route path={urls.chartjs.line} component={ChartJSLineWrapper}/>
             <Route path={urls.chartjs.lineNoAxis} component={ChartJSLineWithoutAxisWrapper}/>

             <Route path={urls.highcharts.pie} component={HighchartPieWrapper}/>
             <Route path={urls.highcharts.bar} component={HighchartBarWrapper}/>
             <Route path={urls.highcharts.line} component={HighchartLineWrapper}/>
             <Route path={urls.highcharts.lineNoAxis} component={HighchartWithoutLineWrapper}/>


         </Wrapper>
     </Router>
    );
  }
}

export default App;
