import React from 'react';
import './Home.css';
import Search from '../components/Search';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Home(){
    return(
        <div className="home">
            <div className="home_header">
                <div className="header_left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="header_right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="./images">Images</Link>
                    <AppsIcon/>
                    <AccountCircleIcon className="avatar"/>
                </div>
            </div>
            <div className="home_body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
            </div>
            <div className="home_input">
                <Search/>
            </div>
        </div>
    );
}

export default Home;