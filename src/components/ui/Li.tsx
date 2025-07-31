interface IProps {
  liName: string
}

const Li= ({liName}: IProps) => {
  return (
    <li className="px-4 py-2 hover:bg-[#094771] hover:text-white cursor-pointer transition-colors">
      {liName}
    </li>
  );
}

export default Li;