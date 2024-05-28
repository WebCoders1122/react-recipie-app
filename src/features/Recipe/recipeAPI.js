// this is async function to fetch data from server
export function fetchRecipes(searchValue) {
  return fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}`
  );
}
