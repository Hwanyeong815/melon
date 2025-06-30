import { useState } from 'react';
import './MelonForm.scss';
import { IoSearch } from 'react-icons/io5';

const MelonForm = ({ onSearch }) => {
    const [text, setText] = useState('');

    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(text);
        setText('');
    };
    return (
        <form className="MelonForm" onSubmit={onSubmit}>
            <p>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="[댄스 소사이어티] 재쓰비 '나의 여름설명서'"
                    value={text}
                    onChange={changeInput}
                />
                <button type="submit">
                    <i>
                        <IoSearch />
                    </i>
                </button>
            </p>
        </form>
    );
};

export default MelonForm;
