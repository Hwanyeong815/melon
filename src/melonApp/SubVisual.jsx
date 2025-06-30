import './SubVisual.scss';

const SubVisual = () => {
    return (
        <div id="subVisual">
            <h2>7월 첫째주 최신음악</h2>
            <video
                src="./video/WOODZ 'Drowning' Live Clip.mp4"
                loop
                autoPlay
                style={{ width: '20%' }}
            ></video>
        </div>
    );
};

export default SubVisual;
