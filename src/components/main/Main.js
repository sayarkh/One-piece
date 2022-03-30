import './Main.css';
import SearchPanel from '../search-panel/SearchPanel';


const Main = () => {
    return(
        <div className="main">
            <h1 className="main__header">Найди <span>свою первую ПОД</span>работку</h1>
            <div className="main__subheader">зарегистрированы 110 студентов и 786 работ </div>
            <div className="side-panel"><SearchPanel/></div>
        </div>

    );
};

export default Main;