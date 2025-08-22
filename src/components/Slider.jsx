export default function ImageSlider({ image }) {
  return (
    <div className="w-full h-80 p-4">
      <img className="w-full h-80" src={image.src} alt={image.alt || 'slider image'} />
    </div>
  );
}
