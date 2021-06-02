import VideoTemplate from "../Tabs/Items/Academy/VideoTemplate";

const CriptoVideos = () => {
  return (
    <div className="criptovideos__container">
      <VideoTemplate
        src="https://www.youtube.com/embed/5fCwqYSS6FM"
        title="Tutorial Bitso - Crear y verificar cuenta personal"
      />
      <VideoTemplate
        src="https://www.youtube.com/embed/DSmmFQ6AWIU"
        title="Tutorial Bitso - ¿Cómo comprar divisas digitales?"
      />
      <VideoTemplate
        src="https://www.youtube.com/embed/bdYuCJcBDjc"
        title="Tutorial Bitso - ¿Cómo recibir o fondear divisas digitales?"
      />
    </div>
  );
};

export default CriptoVideos;
