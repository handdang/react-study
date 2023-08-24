const todoHeader = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = [
        "일요일","월요일","화요일","수요일","목요일","금요일","토요일",
    ];
    const count = 0;
    const yoil = weekday[date.getDay()];

    return <div>
        <h2>{ year }년 {month}월 {day}일</h2>
        <h2>{yoil}</h2>
        <p>남은 할일 : {count}</p>
    </div>
}

export default todoHeader