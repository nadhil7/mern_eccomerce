export default function ImageSlider({ image }) {
  return (
    <div className="w-full h-fit p-4">
      <img className="w-fit h-fit" src={image.src} alt={image.alt || 'slider image'} />
    </div>
  );
}
