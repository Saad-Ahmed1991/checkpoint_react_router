import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img className="cardimg" variant="top" src={props.el.posterUrl} />
      <Card.Body className="cardbody">
        <Card.Title>{props.el.title}</Card.Title>
        <Card.Text>{props.el.description}</Card.Text>
        <div className="rating">
          <Rating initialValue={props.el.rating} readonly={true} />
        </div>

        <Link className="linkbtn" to={`/movieinfo/${props.el.id}`}>
          More details
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
