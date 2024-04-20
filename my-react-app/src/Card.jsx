import profilePicture from './assets/vmy4ZVKA_400x400.jpg';


function Card(){
    return(
        <div className="card">
            <img className="cardImg" src={profilePicture} alt="profile picture" />
            <h2 className='cardTitle'>Quentin Gigon</h2>
            <p className='cardDesc'>Hello!</p>
        </div>
    )
}

export default Card;