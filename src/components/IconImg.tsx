interface IProps {
  src: string;
  className?: string
}

const IconImg = ({src, className="w-5 h-5"}: IProps) => {
  return (
    <img src={src} className={className} alt="" />
  );
}

export default IconImg;