import './subscription.css';

const Subscription = () => {
    return (
        <div className="subscription">
            <div className="subscription-content">
                <div className="subscription-title">
                Не хочешь пропустить новости о работах?
                </div>
                <div className="subscription-form">
                    <input name = "email" placeholder= "Введите вашу почту" type="email" className="subscription-input"/>
                    <button className="subscription-btn">Подписаться</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription;