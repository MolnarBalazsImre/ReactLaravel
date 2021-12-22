import React, { Component } from 'react'
import REactDOM from 'react-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjecstList from './ProjectsList'
import SingleProject from './SingleProject'
class App extends Component{
    render ()
    {
        return(
            <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={ProjectsList} />
                    <Route path='/create' component={NewProject} />
                    <Route path='/:id' component={SingleProject} />

                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
