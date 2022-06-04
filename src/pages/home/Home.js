import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";

//styles
import "./Home.css";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList />}
    </div>
  );
};

export default Home;
