export default function ImageSlider({ images }) {
    return (
        <div className="w-full h-fit p-4 ">
            <img src={`http://localhost:4000/${images}`} alt="image slider" />
            {console.log(images)}

        </div>
    );
}