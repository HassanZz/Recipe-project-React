import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

//styles
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <h1>{data.title}</h1>}
    </div>
  );
};

export default Recipe;
