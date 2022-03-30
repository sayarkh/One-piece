import './CategoryItem.css';
import pen from '../../assets/pen.svg';
const CategoryItem = () => {
    return (
        <div className="category-item">
            <div className="category-card">
                <div className="category-icon">
                    <img src={pen} alt="pen"/>
                 </div>
                <div className="card-titles">
                    <div className="card-title">
                    Маркетинг и Коммуникация
                    </div>
                    <div className="card-subtitle">
                        доступно 237 работ 
                    </div>
                </div>
             </div>   
        </div>
    )
}

export default CategoryItem;