import { useEffect, useRef } from "react";
import Anime from "../assets/Anime";

const Gotop = () => {
  const path = process.env.PUBLIC_URL;
  //   스크롤 위치 값 파악하기
  const bt = useRef(null);
  const scrollFN = () => {
    // 스크롤 값 파악하여서 if 문 사용하기
    const scY = window.document.documentElement.scrollTop;
    if (scY > 300) {
      bt.current.classList.add("active");
    } else {
      bt.current.classList.remove("active");
    }
    console.log(scY);
  };

  useEffect(() => {
    scrollFN();
    window.addEventListener("scroll", scrollFN);
    return () => {
      window.removeEventListener("scroll", scrollFN);
    };
  }, []);

  return (
    <div
      className="gotop"
      ref={bt}
      onClick={() => {
        new Anime(window, {
          prop: "scroll",
          value: 0,
          duration: 500,
        });
      }}
    >
      <img src={`${path}/images/logo.png`} alt="" />
      GoTop
    </div>
  );
};

export default Gotop;
