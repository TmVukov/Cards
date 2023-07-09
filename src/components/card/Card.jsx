
import './Card.scss'

const Card = ({
    imgSrc,
    title,
    description,
    oldPrice,
    newPrice,
    discount,
    age,
    color,
}) => {
    return (
        <div className="card">
            <div className="card_img">
                <img src={imgSrc} alt="circuit pic" width={300} height={300} />
            </div>
            <div style={{ color: color }} className="card_content">
                <h1>{title}</h1>
                <p className="card_description">{description}</p>
                <div className="card_price">
                    <div>
                        <h2>kn{oldPrice}</h2>
                        <h3>kn{newPrice}</h3>
                    </div>
                    <p>Limited {discount}% discount</p>
                </div>
                <div className="card_footer">
                    <button style={{ background: color }}>Shop Now</button>
                    <div style={{ background: color }}>Ages <span>{age}+</span></div>
                </div>
            </div>
        </div>
    )
}

export default Card
