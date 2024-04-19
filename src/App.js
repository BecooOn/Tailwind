import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <header className="flex flex-col items-center lg:flex-row gap-2 lg:justify-between p-2 mt-2 relative">
        <div className="p-2">
          <a href="#clarusway">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div
          className={`div-a flex flex-col py-2 lg:flex-row lg:justify-between gap-[48px] w-10/12 ${
            show ? "flex" : "hidden"
          } lg:flex`}
        >
          <div className="div-a flex flex-col justify-center items-center gap-4 lg:block">
            <a href="#solutions"> Solutions </a>
            <a href="#industries"> Industries </a>
            <a href="#fees"> Fees </a>
            <a href="#About"> About Rareblocks </a>
          </div>
          <div className="div-signIn flex flex-col lg:flex-row gap-4 justify-center items-center">
            <span>
              <a href="#login"> Sign in </a>
            </span>
            <span className="w-[250px] text-center">
              <a
                href="#register"
                rel="noopener noreferrer"
                role="button"
                className="bg-gray-600 text-white rounded-xl"
              >
                Create free account
              </a>
            </span>
          </div>
        </div>

        <button
          type="button"
          className="border w-[40px] h-[40px] absolute top-4 right-4 lg:hidden"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d= {show ?"M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </header>
      <section>
        <div className="flex flex-wrap justify-evenly items-center mt-10">
          <div className="w-[481px] flex flex-col">
            <div>
              <h1 className="text-gray-900 text-[51px] p-2 leading-[61px] font-extrabold text-center">A special credit card made for Developers.</h1>
              <p className="px-2 my-4 font-Inter-sans text-[16px] leading-[26px] text-gray-600 lg:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>
              <form action="#" method="POST">
                <div className="flex flex-row justify-center items-center border border-5 p-2 rounded-xl">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                    className="w-10/12 h-12 px-4 border-none rounded-lg outline-none"
                  />
                  <div>
                    <button type="submit" className="p-1 bg-gray-900 text-white rounded-xl lg:w-40 ">Get Free Card</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-3">
                <p className="font-plus-jakarta-sans font-medium text-[42px] leading-[62px] max-md:text-[28px] p-2">2943</p>
                <p className="font-plus-jakarta-sans text-[13px] leading-[20px]">
                  Cards
                  <br />
                  Delivered
                </p>
              </div>
              <div className=" max-md:invisible">
                <svg
                  width={16}
                  height={39}
                  viewBox="0 0 16 39"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                  <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                  <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                  <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                  <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-3 p-2">
                <p className="font-plus-jakarta-sans font-medium text-[42px] leading-[62px] max-md:text-[28px] ">$1M+</p>
                <p className="font-plus-jakarta-sans text-[13px] leading-[20px]">
                  Transaction
                  <br />
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-[554px] ">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
              alt="images" width={400} className="hidden md:block"
            />
            <img
              src="./image.png"
              alt="images" width={400}
              className="block md:hidden"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
