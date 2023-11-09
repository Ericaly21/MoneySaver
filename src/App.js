// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/home';
import Subscriptions from './components/subscriptions';
import AddSubscription from './components/AddSubscription';
import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';
import Summary from './components/Summary';
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
            <NavLink to="/" end className="link" activeClassName="active">
              Home
            </NavLink>
            </li>
            <li>
              <NavLink to="/subscriptions" className="link" activeClassName="active">
                Subscriptions
              </NavLink>
            </li>
            <li>
              <NavLink to="/expenses" className="link" activeClassName="active">
                Expenses
              </NavLink>
            </li>
            <li>
              <NavLink to="/summary" className="link" activeClassName="active">
                Summary
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/add-subscription" element={<AddSubscription />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
