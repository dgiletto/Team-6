import { useContext } from "react";
import cartContext from "../context/cartProvider";
import { useCartContextType } from "../context/cartProvider";

const useCart = (): useCartContextType => {
    return useContext(cartContext);
};
export default useCart;
