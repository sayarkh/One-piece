import './Header.css';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <div className = "navbar">
           <div className="container">
               <div className="wrapper">
                    <div className ="icon">
                        <a href="#"><img src={logo} alt="logo" /></a>
                    </div>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Для работодателей</a></li>
                        <li><a href="#">Для студентов</a></li>
                    </ul>  
                    <div className="registration">
                        <a href="#" className= "link">Войти</a>
                        <a href="#" className = "btn">Регистрация</a>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Header;