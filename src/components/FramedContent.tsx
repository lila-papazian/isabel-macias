import Image from "next/image";
import "./framedContent.css";

type Props = {
  children?: React.ReactNode;
};

const FrameWithContent = ({ children }: Props) => {
  return (
    <>
      <div className='frame-container'>
        <div className='frame-image'>
          <Image
            src='/frame.webp'
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
