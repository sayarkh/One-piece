import './recomitem.css';
import  microsoft from '../../assets/microsoft.png';

const RecomItem = () => {
    return(
        <div className="recom-item">
            <div className="recom-card">
                <div className="recom-header">
                    <img src={microsoft} alt="microsoft"  className="recom-icon"/>

                    <div className="header-info">
                        <div className="recom-company">
                            Microsoft
                        </div>
                        <div className="recom-subtitle">
                            Freelance
                        </div>
                    </div>
                </div>
                <div className="recom-title">
                    Senior UI Designer
                </div>
                <div className="recom-type">
                    Fulltime
                </div>
                <div className="recom-descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.
                </div>
                <div className="recom-footer">
                    <div className="recom-price">
                        $2500/<span>month</span>
                    </div>
                    <button className="recom-btn">
                        Подать 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecomItem;