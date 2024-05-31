// 今日の日付
const today = new Date();

    // 年
    const year = today.getFullYear();

    // 月
    const month = today.getMonth() + 1;

    // 日
    const day = today.getDate();

    // 日付表示
    const formattedDate = `${year}年${month}月${day}日`;
    console.log(formattedDate); 
