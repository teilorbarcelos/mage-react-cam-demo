import { useRef, useState } from "react";
import "./App.css";
import MageReactCam, {
  TReactCamRef,
} from "./components/MageReactCam/MageReactCam";

const App = () => {
  const [currentImage, setCurrentImage] = useState<string>();
  const videoRef = useRef<TReactCamRef>(null);

  const handlerSnapshot = () => {
    const snapShot = videoRef?.current?.snapshot;
    if (snapShot) return snapShot();
  };

  const handleZoomIn = () => {
    const zoomIn = videoRef?.current?.zoomIn;
    if (zoomIn) zoomIn();
  };

  const handleZoomOut = () => {
    const zoomOut = videoRef?.current?.zoomOut;
    if (zoomOut) zoomOut();
  };

  const handleSwitchFacingMode = () => {
    const switchFacingMode = videoRef?.current?.switchFacingMode;
    if (switchFacingMode) switchFacingMode();
  };

  const capture = () => {
    const imageSrc = handlerSnapshot();
    if (imageSrc) {
      setCurrentImage(imageSrc);
    }
  };

  return (
    <div className="main-container">
      <h1>Mage React Cam</h1>
      <MageReactCam
        ref={videoRef}
        onUserMediaError={(error) => console.log(error)}
        videoConstraints={undefined}
        width={500}
        height={500}
        facingMode="environment"
        autoPlay
        playsInline
      />
      <button onClick={capture}>Take Snapshot</button>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <button onClick={handleSwitchFacingMode}>Switch Facing Mode</button>
      {currentImage && (
        <img
          src={currentImage}
          alt="current captured image"
          style={{ width: "100%" }}
        />
      )}

      <a target="_blank" href="https://www.npmjs.com/package/mage-react-cam">
        HOW TO USE IT
      </a>
    </div>
  );
};

export default App;
