import { SetStateAction, useState } from "react";
const Home = () => {
    const [title, setTitle] = useState('클릭');
    const [text, setText] = useState('');

    function videoControl(){
        const videoEl = document.getElementsByTagName('video')[0];
        console.log(videoEl.paused)
        if(videoEl.paused){
            videoEl.play();
            setTitle('재생');
        }else{
            videoEl.pause();
            setTitle('정지');
        }
    }
    const onChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setText(e.target.value);
    }
    return <div>
        <h1>홈</h1>
        <button onClick={videoControl}>{title}</button>
        <video muted>
            <source src="https://d2j6uvfek9vas1.cloudfront.net/object_book/6458ae0217eca.mp4?v2" type="video/mp4" />
        </video>

        <div>
            <input onChange={onChange} value={text}></input>
            <b>작성한 글 : {text}</b>
        </div>
    </div>
}
export default Home