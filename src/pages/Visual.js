import React, { useRef } from "react";
import Anime from "../assets/Anime";

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  const style = {
    width: 100,
    height: 100,
    background: "green",
    position: "absolute",
    lef: 100,
    top: 100,
  };
  const box = useRef(null);
//   <div
//   ref={box}
//   className="box"
//   style={style}
//   onClick={(e) => {
//     // 애니메이션 대상, 옵션
//     // new Anime(e.target, {
//     //   prop: "left",
//     //   value: 400,
//     //   duration: 500,
//     // });
//     // new Anime(window, {
//     //   prop: "scroll",
//     //   value: 2000,
//     //   duration: 1500,
//     // });
//     new Anime(box.current, {
//       prop: "left",
//       value: 400,
//       duration: 500,
//       callback: () => {
//         new Anime(box.current, {
//           prop: "top",
//           value: 400,
//           duration: 500,
//           callback: () => {
//             alert("완료");
//           },
//         });
//       },
//     });
//   }}
// />
  return (
    <section className="visual scroll">
      <div className="inner">
        {/* 첫인상 남기기(사진/대표단어) */}
        <img src={`${path}/images/img.jpg`} alt="visual" />
        {/* Anime 샘플 */}
       
      </div>
    </section>
  );
};

export default Visual;
