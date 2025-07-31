
interface IProps {
  positions: {
    x: number,
    y: number
  }
}

const ContextMenu = ({positions}: IProps) => {

  return (
    <ul
      className="bg-white text-black w-fit px-6 py-2 rounded-md"
      style={{
        position: "absolute",
        left: positions.x,
        top: positions.y,
      }}
    >
      <li>Close All</li>
    </ul>
  );
}

export default ContextMenu;