import { create } from "zustand";

import { useGLTF } from "@react-three/drei/native";
import Bacon from "../assets/models/Bacon_Slice_Bacon_0.glb";
import Bread from "../assets/models/Bread_Slice_Bread_0.glb";
import Cheese from "../assets/models/Cheese_Slice_Cheese_0.glb";
import Chicken from "../assets/models/Chicken_Slice_Chicken_0.glb";
import Lettuce from "../assets/models/Lettuce_Slice_Lettuce_0.glb";
import Mushroom from "../assets/models/Mushroom_Slice_Mushroom_0.glb";
import Patty from "../assets/models/Patty_Slice_Patty_0.glb";
import Salami from "../assets/models/Salami_Slice_Salami_0.glb";
import Sausage from "../assets/models/Sausage_Slice_Sausage_0.glb";
import Tomato from "../assets/models/Tomato_Slice_Tomato_0.glb";

export const INGREDIENTS = {
  bread: {
    src: Bread,
    price: 0.5,
    icon: "🍞",
  },
  lettuce: {
    src: Lettuce,
    price: 0.5,
    icon: "🥬",
  },
  mushroom: {
    src: Mushroom,
    price: 1,
    icon: "🍄",
  },
  tomato: {
    src: Tomato,
    price: 0.5,
    icon: "🍅",
  },
  cheese: {
    src: Cheese,
    price: 1,
    icon: "🧀",
  },
  chicken: {
    src: Chicken,
    price: 2,
    icon: "🍗",
  },
  sausage: {
    src: Sausage,
    price: 1.5,
    icon: "🌭",
  },
  salami: {
    src: Salami,
    price: 1.5,
    icon: "🍖",
  },
  bacon: {
    src: Bacon,
    price: 1.5,
    icon: "🥓",
  },
  patty: {
    src: Patty,
    price: 2,
    icon: "🍔",
  },
};

Object.keys(INGREDIENTS).forEach((ingredient) => {
  useGLTF.preload(INGREDIENTS[ingredient].src);
});

export const useSandwich = create((set) => ({
  ingredients: [
    {
      id: 0,
      name: "bread",
    },
    {
      id: 1,
      name: "bread",
    },
  ],
  total: 5,
  addedToCart: false,
  addIngredient: (ingredient) =>
    set((state) => ({
      total: state.total + INGREDIENTS[ingredient].price,
      ingredients: [
        ...state.ingredients.slice(0, -1),
        {
          name: ingredient,
          id: state.ingredients.length,
        },
        {
          name: "bread",
          id: 1,
        },
      ],
    })),
  removeIngredient: (ingredient) =>
    set((state) => ({
      total: state.total - (INGREDIENTS[ingredient.name]?.price || 0),
      ingredients: state.ingredients.filter((ing) => ing.id !== ingredient.id),
    })),
  setAddedToCart: (addedToCart) => set({ addedToCart }),
}));
