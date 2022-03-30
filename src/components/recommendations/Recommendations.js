import './recommendations.css';
import RecomItem from '../recom-item/RecomItem';

const Recommendations = () => {  
    return (
        <div className="recommendations">
            <div className="container">
                <div className="title">
                    Мы нашли для вас подработку 
                </div>
                <div className="recommendation-items">
                    <RecomItem/>
                    <RecomItem/>
                    <RecomItem/>
                    <RecomItem/>
                    <RecomItem/>
                    <RecomItem/>
                    <RecomItem/>
                    <RecomItem/>    
                </div>
                <button className="more-btn">
                    Найти больше...
                </button>
            </div>
        </div>
    )
}

export default Recommendations;