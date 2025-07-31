interface IProps {
  src: string;
  className?: string
  alt?: string
  title?: string
}

const IconImg = ({src, className="w-5 h-5", alt="", title=""}: IProps) => {
  return (
    <img src={src} className={className} alt={alt} title={title} />
  );
}

export default IconImg;