import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./Categories.css";

export default function Categories() {
  const categories = [
    "Development",
    "Marketing & Sales",
    "Art & illustration",
    "Animation",
    "SEO",
    "Content Writer",
    "Call Center",
    "HR & Finance",
  ]
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#fbfaff",
      }}
    >
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="mt-4 d-flex justify-content-center align-items-center">
        <h1 className="categoriesH1 ">
          <span className="categoriesSpan ">Countless Career Options</span> Are
          Waiting For You To Explore
        </h1>
        </div>

        <div className="categoriesDiv mt-4 d-flex justify-content-center align-items-center flex-wrap gap-4">
          {categories.map((category) => (
            <CategoriesCard key={category} categoryName={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
