import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Users from './users';
import Inquiry from './inquiry';
import LoginApp from './Login';


function Header() {
  return (
    <div className="Header row">
      <Router> 
        <nav className="navbar bg-light ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Header</Link>
          </div>
        </nav>
      </Router>  
    </div>
  );
}
    console.log('hi')
export default Header;

// function Page(props) {
//   const isPage = props.isPage;
//   if(isPage) {
//     return (
//       <Home/>
//     );
//   } else {
//     return (
//       <About/>
//     );
//   }
// }



// class PageControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleHomeClick = this.handleHomeClick.bind(this);
//     this.handleAboutClick = this.handleAboutClick.bind(this);
//     this.state = {isPage: false};
//   }

//   handleHomeClick() {
//     this.setState({isPage: true});
//   }

//   handleAboutClick() {
//     this.setState({isPage: false});
//   }

//   render() {
//     const isPage = this.state.isPage;
//     let button;
//     if (isPage) {
//       button = <AboutPageButton onClick={this.handleAboutClick} />;
//     } else {
//       button = <HomePageButton onClick={this.handleHomeClick} />;
//     }

//     return (
//       <div>
//         {button}
//         <Page isPage={isPage} />
//       </div>
//     );
//   }
// }