import React from 'react';

class Footer extends React.Component{


    render(){

        return ( <div className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    2018 © Influence - Designed and Developed by<a  rel="noopener noreferrer" href="https://themeforest.net/user/jitu/portfolio" target="_blank" className="ml-1">Jituchuahan</a>.
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="text-md-right footer-links d-none d-sm-block">
                     
                    </div>
                </div>
            </div>
        </div>
    </div>);
    }
}

export default Footer;