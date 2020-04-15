import { createContext } from "react";

const {
  Provider: BlogServiceProvider,
  Consumer: BlogServiceConsumer
} = createContext();

export {
  BlogServiceProvider,
  BlogServiceConsumer
};