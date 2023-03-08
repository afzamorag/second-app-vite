import './Card.css'

const Card = ({ pizza }) => {
    return (
        <div key={pizza.id} className='card'>
            <img src={pizza.img} alt="" className='card-img'/>
            <h3>{pizza.tipo}</h3>
            <h4>{pizza.precio}</h4>
        </div>
    )
}

export default Card