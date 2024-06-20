import "./CategoriesCard.css";

export default function CategoriesCard({categoryName}) {
  return (
    <>
      <div className="categoriesCard">
        <img src="/assets/categoriesImage.png" width="30px" />

        <p className="categoryName">{categoryName}</p>

        {/* <p className="categoryCount">150 Jobs</p> */}
      </div>
    </>
  );
}
