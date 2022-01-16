import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch  from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import { SearchOutlined, FileTextFilled, PictureFilled, TagFilled, EnvironmentFilled, SmallDashOutlined } from '@ant-design/icons';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

    //const data = response;
    console.log(data); 
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img 
                        className="searchPage__logo" 
                        src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="Search"
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchOutlined />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <FileTextFilled />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <PictureFilled />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <TagFilled />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <EnvironmentFilled />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <SmallDashOutlined rotate={90}/>
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}.
                    </p>
                    {data?.items.map(item =>(
                        <div className="searchPage__result">
                            <a className="searchPage__resultLink" href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && 
                                    (
                                    <img className="searchPage__resultImage"
                                        src = {item.pagemap?.cse_image?.src}
                                        alt=""
                                    />
                                    )
                                }
                                {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage
