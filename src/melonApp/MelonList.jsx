import './MelonList.scss';
import MelonItem from './MelonItem';

const MelonList = ({ data, onLike, setIsOpen, onOpen }) => {
    return (
        <div className="MelonList">
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                    <col className="w6" />
                </colgroup>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>곡(가수)</th>
                        <th>앨범</th>
                        <th>좋아요</th>
                        <th>동영상</th>
                        <th>상승/하락</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <MelonItem
                            key={item.id}
                            item={item}
                            onLike={onLike}
                            setIsOpen={setIsOpen}
                            onOpen={onOpen}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MelonList;
