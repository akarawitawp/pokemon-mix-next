import React from "react";

const FakeInfopokemon: React.FC = () => {
  return (
    <div className="fixed right-0 top-0 bottom-0 w-1/5 flex flex-col px-5  items-center">
      <img
        className="relative w-40 h-40 object-contain top-10 "
        src="https://sv1.picz.in.th/images/2022/11/18/G41hJt.png"
        alt="fakepokemon"
      />
      <div className="flex-grow border rounded-sm flex justify-center items-center w-full">
        <h4>
          Select a Pokemon
          <br /> to display here.
        </h4>
      </div>
    </div>
  );
};
export default FakeInfopokemon;
