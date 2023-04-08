// LESSON 4 + 5

import { useEffect, useState, useRef, useEffectLayout } from "react";

const Toggle = () => {
  const [title, setTitle] = useState();
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  const ref = useRef();
  // useEffect(() => {
  //   console.log("Toggle affter re-render");

  //   // componentWillUnmount
  //   return () => {
  //     console.log("Toggle just before unmount or re-render");
  //   };
  // });

  // useEffect(() => {
  //   // componentDidMount
  //   // console.log("Toggle affter mounting");
  //   // console.log(ref);
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())

  //     .then((posts) => {
  //       setPosts(posts);
  //       console.log(posts);
  //     });

  //   // componentWillUnmount
  //   // return () => {
  //   //   console.log("Toggle just before unmount 2");
  //   // };
  // }, []);

  // useEffect(() => {
  //   // componentDidUpdate
  //   console.log("re-render");
  //   // setTitle("Hello Thu Ha");
  //   // console.log();

  //   // componentWillUnmount
  //   return () => {
  //     console.log("Toggle just before unmount 3");
  //   };
  // }, [title]); // chỉ lắng nghe sự thay đổi của state title thì gọi hàm

  const handleClick = () => {
    setTitle((title) => title);
    setCount((count) => ++count);
  };

  // const [count1, setCount1] = useState(0);
  // const handleCount = () => {
  //   setCount1((count1) => ++count1);
  // };
  // useEffectLayout(() => {
  //   if (count1 > 3) {
  //     setCount1(0);
  //   }
  // }, [count1]);

  return (
    <div>
      <button onClick={() => setTitle("Trinh Thu Ha")}>Title: {title}</button>
      <button onClick={handleClick}>
        Title: {title} Count: {count}
      </button>

      {/* <div onClick={handleCount}>{count1}</div> */}
      {/* <div>
        {posts &&
          posts.map((post, index) => (
            <div key={post.id}>
              <p>TITLE: {post.title}</p>
              <p>USERID: {post.userId}</p>
              <p>BODY: {post.body}</p>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default Toggle;

// Chạy một lần khi mount : tìm nạp data API.
// Chạy khi thay đổi state : thường thì khi validate input đầu vào.
// Chạy khi thay đổi state : filtering trực tiếp.
// Chạy khi thay đổi state : trigger animation trên giá trị của array mới.
// Chạy khi props thay đổi : update lại list đã fetched API khi data update.
// Chạy khi props thay đổi : updateing data API để cập nhật BTC
// https://viblo.asia/p/6-truong-hop-su-dung-cua-useeffect-trong-react-gAm5ymPD5db
