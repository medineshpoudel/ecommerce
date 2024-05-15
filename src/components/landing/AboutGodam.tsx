import Button from "../button/Button";

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, hic
            nesciunt. Voluptatum quod aut, sequi id itaque, aliquam distinctio
            voluptates tempore ea odit sit explicabo nam. Aliquam architecto
            doloribus excepturi, fuga porro quisquam saepe nihil nisi odit
            obcaecati? Eveniet assumenda aspernatur accusamus expedita quos quod
            quas inventore suscipit itaque cumque!
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
            hi
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              earum.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            hi
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              earum.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            hi
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              earum.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            hi
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              earum.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-between p-3 rounded-3xl bg-secondary w-full h-52 !important px-5  md:h-5/6 md:w-1/5">
          <div className="rounded-full w-20 h-20 flex  bg-white justify-center items-center font-bold">
            hi
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              earum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGodam;
