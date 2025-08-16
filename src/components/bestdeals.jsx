export default function BestDeal({image,name,price}){
    return(
        <div className="flex-col items-center text-center ">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
}