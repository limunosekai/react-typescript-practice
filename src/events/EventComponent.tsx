const EventComponent: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <div draggable onDragStart={handleDragStart}>Drag Me!</div>
    </div>
  )
};

export default EventComponent;