import React from 'react';
import './SearchPage.css';
import {useStateValue} from '../StateProvider';
import GoogleSearch from './GoogleSearch';
import {Link} from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

const SearchPage=()=>{
    const [{term}, dispatch]=useStateValue();
    const {data}=GoogleSearch(term);
    console.log(data);
    return(
        <div className="search_page">
            <div className="search_page_header">
                <Link to="/">
                    <img className="search_page_logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
                <div className="search_page_header_body">
                    <Search hideButton />
                    <div className="options">
                        <div className="options_left">
                            <div className="option">
                                <SearchIcon className="icon"/>
                                <Link to="all">All</Link>
                            </div>
                            <div className="option">
                                <VideoLibraryOutlinedIcon className="icon" />
                                <Link to="/videos">Videos</Link>
                            </div>
                            <div className="option" >
                                <DescriptionIcon className="icon" />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="option">
                                <ImageOutlinedIcon className="icon"/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="option">
                                <BookOutlinedIcon className="icon"/>
                                <Link to="/books">Book</Link>
                            </div>
                            <div className="option">
                                <MoreVertOutlinedIcon className="icon" />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        <div className="options_right">
                            <div className="option">
                                <Link to="/setting">Settings</Link>
                            </div>
                            <div className="option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {true &&(
                <div className="search_items">
                    <p className="result_count">
                        About {data?.searchInformation.formattedTotalResults} result ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                </div>
            )}

            {data?.items.map(item=>(
                <div className="search_item">
                    <a >
                        {item.pagemap?.cse_image?.length>0 && item.pagemap.cse_image[0]?.src &&(
                                <img className="item_image" src={item.pagemap?.cse_image?.length>0 && item.pagemap.cse_image[0]?.src} alt="" />
                            )}
                    </a>
                    <a className="seach_item_link" href={item.link}>
                        {item.displayLink}
                    </a>
                    <a href={item.link} className="search_item_title">
                        <p className="search_title">
                            {item.title}
                        </p>
                    </a>
                    <p className="search_item_des">
                        {item.snippet}
                    </p>
                </div>
            ))}

        </div>
    );
}

export default SearchPage;

