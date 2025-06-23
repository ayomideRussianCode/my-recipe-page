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
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="my-4 bg-[hsl(330,100%,98%)] rounded-md p-4  text-[hsl(332,51%,32%)] font-semibold ">
              <h1 className="pb-2">Preparation time</h1>
              <ul className="list-disc list-inside marker:text-[hsl(332,51%,32%)] text-xs text-[hsl(332,51%,32%)]">
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Total: Approximately 10 minutes
                </li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Preparation: 5 minutes
                </li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Cooking: 5 minutes
                </li>
              </ul>
            </div>
            <div className="my-4 p-4  text-[hsl(14,45%,36%)] font-semibold ">
              <h1 className="pb-2 text-2xl font-serif">Ingredients </h1>
              <ul className="list-disc list-inside marker:text-[hsl(14,45%,36%)] text-xs text-[hsl(14,45%,36%)]">
                <li className="pb-2 text-[hsl(24,5%,18%)]"> 2-3 large eggs</li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">Salt, to taste</li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">Pepper, to taste</li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  1 tablespoon of butter or oil
                </li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
              <hr className="my-4 text-gray-200" />
            </div>

            <div className="my-4 p-4  text-[hsl(14,45%,36%)] font-semibold ">
              <h1 className="pb-2 text-2xl font-serif">Instructions </h1>
              <ul className="list-decimal list-inside marker:text-[hsl(14,45%,36%)] text-xs text-[hsl(14,45%,36%)]">
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Beat the eggs: In a bowl, beat the eggs with a pinch of salt
                  and pepper until they are well mixed. You can add a tablespoon
                  of water or milk for a fluffier texture.
                </li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Heat the pan: Place a non-stick frying pan over medium heat
                  and add butter or oil.
                </li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Cook the omelette: Once the butter is melted and bubbling,
                  pour in the eggs. Tilt the pan to ensure the eggs evenly coat
                  the surface.{" "}
                </li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Add fillings (optional): When the eggs begin to set at the
                  edges but are still slightly runny in the middle, sprinkle
                  your chosen fillings over one half of the omelette.{" "}
                </li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Fold and serve: As the omelette continues to cook, carefully
                  lift one edge and fold it over the fillings. Let it cook for
                  another minute, then slide it onto a plate.
                </li>
                <li className="pb-2 text-[hsl(24,5%,18%)]">
                  Enjoy: Serve hot, with additional salt and pepper if needed.
                </li>
              </ul>
              <hr className="my-4 text-gray-200" />
            </div>
            <div className="my-4 p-4  text-[hsl(14,45%,36%)] font-semibold ">
              <h1 className="pb-2 text-2xl  font-serif">Nutrition </h1>
              <p className="text-[hsl(24,5%,18%)] text-sm">
                {" "}
                The table below shows nutritional values per serving without the
                additional fillings.
              </p>

              <div className="flex flex-row items-center justify-between mt-4">
                <p className="text-[hsl(24,5%,18%)] ">Calories</p>
                <p className="w-1/2">277kcal</p>
              </div>
              <hr className="my-4 text-gray-200" />
              <div className="flex flex-row items-center justify-between mt-4">
                <p className="text-[hsl(24,5%,18%)]">Carbs</p>
                <p className="w-1/2">0g</p>
              </div>
              <hr className="my-4 text-gray-200" />

              <div className="flex flex-row items-center justify-between mt-4">
                <p className="text-[hsl(24,5%,18%)]">Protein</p>
                <p className="w-1/2">20g</p>
              </div>
                              <hr className="my-4 text-gray-200" />

              <div className="flex flex-row items-center justify-between mt-4">
                <p className="text-[hsl(24,5%,18%)]">Fat</p>
                <p className="w-1/2">22g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
