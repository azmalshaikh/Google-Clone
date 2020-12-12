import React from 'react'
import { Link } from 'react-router-dom';
import Search from './pages/Search';
// import Response from './response';
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import SearchIcon from '@material-ui/icons/Search';
import useGoogleSearch from './useGoogleSearch';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    // The serch term 
    const [{term}, dispatch] = useStateValue();

    // Live API CALL
    const { data } = useGoogleSearch(term);

    // Mock API CALL
    // const data = Response;

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                <img className="searchPage__Logo" src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
                    alt="google logo"/>
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons />
                
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option searchPage__optionAll">
                                <SearchIcon />
                                <Link to="/all" className="searchPage__optionAll">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon/>
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
                        About {data?.searchInformation.formattedTotalResults}
                        results ({data?.searchInformation.formattedSearchTime} seconds) 
                        for {term}
                    </p>

                    {/* List of search Results */}

                    {data?.items.map(item => (
                        <div className="searchPage__result">

                            <a href={item.link} className="searchPage__resultLink">
                                {item.pagemap?.cse_image?.length > 0  && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage__resultsImage" 
                                         src={item.pagemap?.cse_image[0]?.src} alt=""
                                    />
                                )}

                                {item.displayLink}
                            </a>

                            <a href={item.link} className="searchPage__resultTitle">
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
