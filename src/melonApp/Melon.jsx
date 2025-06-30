import { useState } from 'react';
import './Melon.scss';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import Modal from './Modal';
import musicData from '../assets/api/musicData';

const Melon = () => {
    const [data, setData] = useState(musicData);
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState({});

    const onLike = (id) => {
        // alert(id);
        const newItem = data.map((item) =>
            item.id === id
                ? { ...item, done: !item.done, like: !item.done ? item.like + 1 : item.like - 1 }
                : item
        );
        setData(newItem);
    };

    const onOpen = (id) => {
        const newItem = data.find((item) => item.id === id);
        // const newItem = data[id - 1]; -> 되긴하는데 추가수정삭제가 있으면 비추
        setIsOpen(true);
        setCurrent(newItem);
    };

    const onSearch = (text) => {
        const newItem = data.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setData(newItem);
    };

    //실시간
    /*
    const [text, setText] = useState('');
    함수 => setText(값을 전달)
    useEffect(()=> {
        const newItem = musicData.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setData(newItem);)
    */

    const getDate = () => {
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth() + 1;
        const d = now.getDate();
        return `${y}년 ${m}월 ${d}일`;
    };

    return (
        <main className="Melon">
            <h2>melon {getDate()} 인기차트</h2>
            <MelonForm onSearch={onSearch} />
            <MelonList data={data} onLike={onLike} setIsOpen={setIsOpen} onOpen={onOpen} />
            {isOpen && <Modal setIsOpen={setIsOpen} current={current} />}
        </main>
    );
};

export default Melon;
