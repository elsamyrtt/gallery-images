import { extractColorsFromImage } from "extract-colors"

const CardImage = ({ stars, title, description, img, type}) => {
    let star = ["☆", "☆", "☆", "☆", "☆",]
    for (let i = 0; i < stars; i++) {
        star[i] = "★"
    }
    return (
        <div className="card" >
            <img src={img} />
            <div>
            <h3>{title}</h3>
            <p>{description}</p>
                <span>{star} {stars}/5</span>
            </div>
        </div>
    )
}

export default CardImage