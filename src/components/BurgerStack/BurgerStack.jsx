import Ingredient from '../Ingredient/Ingredient';


const BurgerStack = (props) => {
return (
  <ul>
    {props.ingredients.length === 0 ? (
      <li>No Ingredients</li>
    ) : (
      props.ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          color={ingredient.color}
          isStacked={true}
          removeFromBurger={props.removeFromBurger}
        />
      ))
    )}
  </ul>
)};
export default BurgerStack;