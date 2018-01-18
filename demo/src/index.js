import {render} from 'inferno'
import { Router, Link, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Buttons from './Buttons'
import './index.scss'

const browserHistory = createBrowserHistory()

function App({ children }) {
    return ( <div>{children}</div> )
}

function ComponentList() {
    return (
        <div>
            <h3>Micro UI Components:</h3>

            <p><Link to="/buttons">Buttons</Link></p>
        </div>
    )
}

const routes = (
	<Router history={ browserHistory }>
		<Route component={ App }>
			<IndexRoute component={ ComponentList } />
            <Route path="/buttons" component={ Buttons } />
			<Route path="*" component={ ComponentList } />
		</Route>
	</Router>
)

render(routes, document.getElementById('app'))
