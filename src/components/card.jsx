 
function Card({image,name}){
    return(
        <div  className="">
            <img src={image} alt="profilepic" />
            <h2>{name}</h2>
        </div>
    );
}
export default Card;