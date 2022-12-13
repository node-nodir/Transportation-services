import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
interface Item {
  id: number;
  name: string;
  carHero: string;
  fullText: string;
  carContentImg: string;
}

function ServicesId() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("elList") || ""));
  }, []);
  const routerId = useRouter();
  const { servicesId } = routerId.query;
  const resultData: Item | undefined = data.find(
    (item: Item) => item.id === Number(servicesId)
  );
  console.log(resultData);
  return (
    <section className={`mt-[200px]`}>
      {/* <div>{resultData!?.name ?? ""}</div> */}
      <div>
        <img
          className="absolute top-0 -z-10"
          src={resultData!?.carHero ?? ""}
          width="100%"
          height={409}
          alt="Bg Content img"
        />
        <h2 className="text-center mb-186 text-white font-bold text-38 leading-46">
          {resultData!?.name ?? ""}
        </h2>
      </div>
      <div className="pt-114 pb-136 flex items-center justify-between">
        <div className=" pl-[150px]">
          <p className="">{resultData!?.fullText ?? ""}</p>
        </div>
        {resultData!?.carContentImg === "" ? (
          ""
        ) : (
          <Image
            className="content-img"
            src={resultData!?.carContentImg ?? ""}
            width={787}
            height={510}
            alt=""
          />
        )}
      </div>
    </section>
  );
}

export default ServicesId;
//
