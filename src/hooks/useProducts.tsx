import { useContext } from "react";
import productsContext from "../context/productsProvider";
import { useProductsContextType } from "../context/productsProvider";

const useProducts = (): useProductsContextType => {
    return useContext(productsContext);
};
export default useProducts;
