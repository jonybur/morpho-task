import { useNavigate } from "react-router-dom";
import { Button } from "../components";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/");
  };

  return (
    <div>
      <div>Not found</div>
      <div>We could not find the page you were looking for.</div>
      <Button text="Try again" onClick={handleTryAgain} />
    </div>
  );
};
