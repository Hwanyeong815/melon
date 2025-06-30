import { IoCloseSharp } from 'react-icons/io5';

import './Modal.scss';
const Modal = ({ setIsOpen, current }) => {
    const { title, key, singer } = current;

    return (
        <div className="Modal">
            <div className="bg" onClick={() => setIsOpen(false)}></div>
            <div className="popup">
                <h2>노래제목 : {title}</h2>
                <iframe src={`https://www.youtube.com/embed/${key}`} frameborder="0"></iframe>
                <p>가수명 : {singer} </p>
                <span>
                    <i>
                        <IoCloseSharp onClick={() => setIsOpen(false)} />
                    </i>
                </span>
            </div>
        </div>
    );
};

export default Modal;
