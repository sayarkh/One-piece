import './CategoryItems.css';
import CategoryItem from '../category-item/CategoryItem';

const CategoryItems = () => {
    return (
        <div className="category-items">
            <div className="container">
                <div className="title">Одна Платформа <br />
                Больше <span>Решений</span> 
                </div>
                <div className="wrapper">
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                </div>
            </div>
        </div>
    )
}

export default CategoryItems;