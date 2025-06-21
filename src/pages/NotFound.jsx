import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-5xl font-bold text-primary mb-4">404 :(</h1>
    <p className="text-xl text-gray-500 mb-6">A página não foi encontrada.</p>
    <Link to="/" className="text-dark-gray-2 hover:text-primary font-bold underline hover:brightness-110">
      Voltar para a Home
    </Link>
  </div>
);

export default NotFound;