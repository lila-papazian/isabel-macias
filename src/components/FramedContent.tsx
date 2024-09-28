import Image from "next/image";
import "./framedContent.css";

type Props = {
  children?: React.ReactNode;
  frameSrc?: string;
};

const FrameWithContent = ({ children, frameSrc = "/home/frame.webp" }: Props) => {
  return (
    <>
      <div className='frame-container'>
        <div className='frame-image'>
          <Image
            src={frameSrc}
            aria-hidden={true}
            alt='Custom Frame'
            priority={true}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        {/* Content inside the frame */}
        <div className='content-container'>{children}</div>
      </div>
    </>
  );
};

export default FrameWithContent;
