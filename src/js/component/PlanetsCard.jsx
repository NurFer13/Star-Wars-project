import React from "react";
import Button from "react-bootstrap/Button";
import useStore from "../store/Contexto.jsx";
import { Card } from "react-bootstrap";
import resistenciaImage from "../../img/resistencia.jpg";
import { useNavigate } from "react-router";

const PlanetsCard = (props) => {
  const { listPlanets } = useStore();
  const { handleClick } = useStore();
  const navigate = useNavigate();


  const [planetsData] = listPlanets
    ? listPlanets.filter((item) => item.result.uid == props.id)
    : null;

    const handleNavigatePlanet = () => {
      navigate(`/planets/${props.id}`);
    }

  return (

    <Card>
      <Card.Img
      variant="top" 
        src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Population:{" "}
          {planetsData ? planetsData.result.properties.population : "loading.."}
        </Card.Text>
        <Card.Text>
          Terrain:{" "}
          {planetsData ? planetsData.result.properties.terrain : "loading.."}
        </Card.Text>
        <Button
            variant="primary"
            onClick={handleNavigatePlanet} 
        >
          Learn more!
        </Button>
        <Button className="botonicono" onClick={()=>handleClick(props)}>
          <Card.Img className="icono" src={resistenciaImage} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PlanetsCard;

<button className="botonicono">
  <img className="icono" src={resistenciaImage} />
</button>;