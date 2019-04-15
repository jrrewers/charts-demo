import React, { Component } from 'react';
import './App.css';
import {BarWrapper} from "./components/BarWrapper";
import {PieWrapper} from "./components/PieWrapper";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import styled from 'styled-components';
import {LineWrapper} from "./components/LineWrapper";
import {LineWithoutAxisWrapper} from "./components/LineWithoutAxisWrapper";

const MenuItem = styled.div`
    display: inline-block;
    width: 25%;
    margin-top: 10px
`

const Wrapper = styled.div`
    max-width: 70vw;
    margin: 0 auto;
`

class App extends Component {
  render() {
    return (
     <Router>
         <Wrapper>
             <nav>
                 <MenuItem><Link to="/pie/">Pie</Link></MenuItem>
                 <MenuItem><Link to="/bar/">Bar</Link></MenuItem>
                 <MenuItem><Link to="/line">Line</Link></MenuItem>
                 <MenuItem><Link to="/line-wo-axis">Line without axis</Link></MenuItem>
             </nav>

             <Route path="/pie/" component={PieWrapper}/>
             <Route path="/bar/" component={BarWrapper}/>
             <Route path="/line/" component={LineWrapper}/>
             <Route path="/line-wo-axis/" component={LineWithoutAxisWrapper}/>

         </Wrapper>
     </Router>
    );
  }
}

export default App;
