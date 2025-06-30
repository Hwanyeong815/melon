import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { PiVideoFill } from 'react-icons/pi';
import { AiOutlineDash } from 'react-icons/ai';
import { FaAnglesDown, FaAnglesUp } from 'react-icons/fa6';

const MelonItem = ({ item, onLike, onOpen }) => {
    const { rank, title, singer, poster, state, id, key, like, done, album } = item;
    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt={title} />
                <p>
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td> {album}</td>
            <td className="like">
                <i onClick={() => onLike(id)}>
                    {done ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                </i>
                {like.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                {/* 301700 -> 307,700 */}
            </td>
            <td>
                <i onClick={() => onOpen(id)}>
                    <PiVideoFill />
                </i>
            </td>
            <td>
                <i>
                    {state === '유지' && <AiOutlineDash />}
                    {state === '상승' && <FaAnglesUp />}
                    {state === '하강' && <FaAnglesDown />}
                </i>
                {state === '유지' && '유지'}
                {state === '상승' && '상승'}
                {state === '하강' && '하락'}
            </td>
        </tr>
    );
};

export default MelonItem;
