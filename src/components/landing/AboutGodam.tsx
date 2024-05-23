import Button from "../button/Button";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  faAnchor,
  faCamera,
  faCartShopping,
  faLaptop,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutGodam = () => {
  return (
    <div className="flex flex-col h-auto justify-between md:px-10">
      <div className="flex flex-col w-full justify-between p-3 md:p-10 h-3/6  sm:flex-col sm:p-0 sm:w-full xl:flex-row">
        <div className="w-full my-2 md:w-1/2">
          <p className="text-gray text-lg  md:text-3xl font-extrabold">
            EXPLORE OUR EXTINSIVE
          </p>
          <p className="text-gray text-lg md:text-3xl font-extrabold">
            COLLECTION OF PRODUCTS
          </p>
        </div>
        <div className=" w-full md:w-1/2 md:gap-10 flex flex-col">
          <p>
            At Godam, we bring you a world of convenience right at your
            fingertips. Explore our vast collection of top-notch products,
            ranging from cutting-edge electronics to stylish apparel, and
            everything in between. Our commitment to quality and customer
            satisfaction means you can shop with confidence, knowing that every
            purchase is backed by exceptional service. Experience the ease and
            joy of shopping at Godam, where your needs and desires are just a
            click away.
          </p>

          <div>
            <Button
              text="BECOME A VENDOR"
              style="text-black mt-5 md:mt-3"
              rounded={false}
            />
          </div>
        </div>
      </div>

      <div className="h-auto flex flex-col p-3 justify-center items-center  gap-10  md:flex-row ">
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          <div>
            <p>
              Godam offers an unparalleled selection of high-quality products at
              unbeatable prices.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div>
            <p>
              Enjoy seamless navigation and a user-friendly interface tailored
              for effortless shopping.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            <FontAwesomeIcon icon={faAnchor} />
          </div>
          <div>
            <p>
              Benefit from fast and reliable shipping, ensuring your purchases
              arrive on time, every time.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            <FontAwesomeIcon icon={faCamera} />
          </div>
          <div>
            <p>
              Experience top-notch customer service, dedicated to resolving your
              queries and concerns promptly.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            <FontAwesomeIcon icon={faLaptop} />
          </div>
          <div>
            <p>
              Shop with confidence, knowing your data is secure with our
              advanced privacy protection measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGodam;
