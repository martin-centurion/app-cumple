import { useState, useEffect } from "react";
import products from "../../products/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

// ----------------------------------------------------------------------------
function getItemsFromDatabase() {
  return new Promise((resolve, reject) => {
    let error = false;

    setTimeout(() => {
      if (error === true) reject("Error leyendo los datos");
      resolve(products);
    }, 1000);
  });
}

function getItemsByCategoryFromDatabase(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productsFiltered = products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productsFiltered);
    }, 1000);
  });
}
// -------------------------------------------------------------------------------

function ItemListContainer({ greeting }) {
  const [users, setUsers] = useState([]);

  const params = useParams();
  const idCategory = params.idCategory;

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await getItemsFromDatabase();
      setUsers(respuesta);
    } else {
      let respuesta = await getItemsByCategoryFromDatabase(idCategory);
      setUsers(respuesta);
    }
  }

  useEffect(() => {
    leerDatos();
  }, []);

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList users={users} />
    </>
  );
}

export default ItemListContainer;