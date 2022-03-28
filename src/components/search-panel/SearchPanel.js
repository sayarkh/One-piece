import './SearchPanel.css';
import loop from '../../assets/search/loop.svg';
import location from '../../assets/search/location.svg';

const SearchPanel = () => {
    return (
       <div className="search-panel">
            <div className="wrapper">
                <input type="search" name = "title" placeholder = 'Поиск по заголовку' className="search-title-input" />
                <img src={loop} alt="loop" className="title-icon" />

                <div className= "divider"></div>
                <input type="search" name ="location" placeholder='Поиск по местоположению' className="location-input" />
                <img src={location} alt="location-img" className="location-icon" />
                <button  type ="submit" className="submit-btn">Поиск</button>

            </div>
        </div>
    );
}

export default SearchPanel;
