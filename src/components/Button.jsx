const Button = ({onClick, text, image}) => {

    if(image === undefined){
    return(
    <div onClick={onClick} className="button">
        <p className="text-button">{text}</p>
    </div>
    )
}else{
    return(
        <div onClick={onClick} className="button">
        <p className="text-button">{text}</p>
        <img src={image} alt="" />
    </div>
    )
}
}

export default Button