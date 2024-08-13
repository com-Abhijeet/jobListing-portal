import React from 'react';

const Recovered = () => {
  return (
    <>
      <div className="w-full">
        <section class="h-screen">
          <div class="px-6 h-full text-gray-800">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img
                  src="./../../assets/reset.png"
                  class="w-full"
                  alt="Sample image"
                />
              </div>
              <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form>
                  <div class="flex flex-row items-center justify-center lg:justify-start">
                    <h1 class="text-2xl font-bold text-center mb-0 mr-4 ms-32">
                      Password succesfully set{' '}
                    </h1>
                  </div>

                  <div class="mt-4 flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <h2>Welcome HOME </h2>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Recovered;
