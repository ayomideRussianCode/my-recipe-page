function App() {
  return (
    <>
      <div className="w-full h-full flex justify-center lg:bg-[hsl(30,54%,90%)]">
        <div className="mx-0 my-0 lg:my-10 lg:mx-auto lg:w-[350px] lg:p-4 lg:shadow-md rounded-md bg-white ">
          <div className="w-full">
            <img
              className="lg:rounded-md"
              src="/image-omelette.jpeg"
              alt="omelette-img"
            />
          </div>
          <div className="p-4 lg:pt-4 lg:px-4">
            <h1 className="flex font-serif font-semibold text-2xl">
              Simple Omelette Recipe
            </h1>
            <p className="text-xs">
              {" "}
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="my-4 bg-[hsl(330,100%,98%)] rounded-md p-4 ">
              <h1 className="pb-2">Preparation time</h1>
              <ul className="">
                <li className="pb-2"> Total: Approximately 10 minutes</li>
                <li className="pb-2"> Preparation: 5 minutes</li>
                <li className="pb-2"> Cooking: 5 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
