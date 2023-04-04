import PortfolioCard from "./PortfolioCard";
import projectData from "../projectData.json";

function Portfolio() {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      {projectData.map((v, i) => {
        return <PortfolioCard key={i} index={i} title={v.title} image={v.image} desc={v.desc}/>; // map함수로 json 파일 받아오고 PortfolioCard의 props 적용 
      })}
    </ul>
  );
}

export default Portfolio;