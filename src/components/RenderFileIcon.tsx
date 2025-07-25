interface IProps {
  filename: string;
}

const RenderFileIcon = ({ filename }: IProps) => {
  const fileExtension = filename.split('.').pop();
  return <div>{fileExtension}</div>;
};

export default RenderFileIcon;
