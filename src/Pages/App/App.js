import './App.scss';
import MainPage from "../MainPage/MainPage";
import {Switch, Route} from 'react-router-dom';
import Portfolio from "../Portfolio/Portfolio";
import About from "../About/About";
import Contact from "../Contact/Contact";

function App() {
    return (
        <>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/Portfolio' component={Portfolio}/>
                    <Route path='/About' component={About}/>
                    <Route path='/Contact' component={Contact}/>
                </Switch>
                <footer className="app_footer">
                    <div className="app_container"><p>Design by </p> <p>Kuba Juras </p> <p>2020 ©</p></div>
                </footer>
            </div>
        </>
    );
}

export default App;
