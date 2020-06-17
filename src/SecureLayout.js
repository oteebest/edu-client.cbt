import React from 'react';
import MasterHeader from './MasterHeader';
import Footer from './Footer';
import SideBar from './SideBar';


class SecureLayout extends  React.Component{


  render(){

     return(
  
    <div className="dashboard-main-wrapper">  
    <MasterHeader />
    <SideBar />
    <div className="dashboard-wrapper">
    
    {this.props.children}

     <Footer />
   </div>
   </div>);

   }

  

}

export default SecureLayout;