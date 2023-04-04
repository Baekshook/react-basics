import { useEffect } from "react";

function PortfolioCard({ title, desc, image }) {
  // Portfolio에 적용된 props 적용
  useEffect(() => {
    console.log(title);
    console.log(desc);
    console.log(image);
  }, []);

  return (
    <li className="bg-purple-100 w-60 h-72 rounded-xl relative">
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        <img
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="projectImg"
        />
        {/* public 경로에서 이미지 불러오는 방법 (json 파일에 img 경로 추가해줘함) */}
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
      <button className=" absolute bottom-0 right-0 m-4 px-4 py-2 rounded-full bg-red-500">
        View
      </button>
    </li>
  );
}

export default PortfolioCard;
