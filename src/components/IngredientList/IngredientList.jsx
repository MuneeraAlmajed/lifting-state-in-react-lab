import Ingredient from '../Ingredient/Ingredient.jsx';

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          color={ingredient.color}
          isStacked={false}
          addToBurger={props.addToBurger}
        />
      ))}
    </ul>
  );
};

export default IngredientList;