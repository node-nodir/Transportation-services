import axios from "axios";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  zip?: string;
  primary_city: string;
  acceptable_cities?: string | null;
  state: string;
  county?: string;
  country?: string;
  latitude?: string;
  longitude?: string;
}

const env = process.env.NEXT_PUBLIC_TOKEN;

function HeroForm({ setFirst, setSecond }: any) {
  const [data, setData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [render, setRender] = useState(false);
  const [booleon, setBooleon] = useState(true);
  const [fromValue, setFromValue] = useState<Item>();
  // ---------> Secon Input
  const [data1, setData1] = useState([]);
  const [zipCode1, setZipCode1] = useState("");
  const [country1, setCountry1] = useState("");
  const [render1, setRender1] = useState(false);
  const [booleon1, setBooleon1] = useState(true);
  const [fromValue1, setFromValue1] = useState<Item>();
  // --------->
  const [date, setDate] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  const [checked, setChecked] = useState(false);

  // -----> Get Zip Codes
  useEffect(() => {
    axios
      .get(
        booleon
          ? `${env}zip-codes?primary_city=${country}`
          : `${env}zip-codes?zip=${zipCode}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => {});
  }, [country, zipCode, booleon]);

  // -----> Get Zip Codes
  useEffect(() => {
    axios
      .get(
        booleon1
          ? `${env}zip-codes?primary_city=${country1}`
          : `${env}zip-codes?zip=${zipCode1}`
      )
      .then((res) => setData1(res.data))
      .catch((err) => console.error(err))
      .finally(() => {});
  }, [country1, zipCode1, booleon1]);

  const SubmitData = (e: any) => {
    e.preventDefault();

    const from = e.target.elements.from.value;
    const to = e.target.elements.to.value;

    const firstData = {
      from: from,
      to: to,
      estimate_time: date,
      transport_type: checked ? open : close,
    };

    if (Object.keys(firstData).length > 0) {
      setFirst();
      setSecond();
    }

    window.localStorage.setItem("data", JSON.stringify(firstData));
    e.target.reset();
  };

  function dayBefore() {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getUTCMonth() + 1;
    let year = date.getUTCFullYear();
    return year + "-" + month + "-" + day;
  }

  return (
    <form onSubmit={SubmitData} className="flex flex-col" autoComplete="off">
      <label className="relative text-15 flex flex-col text-white">
        From
        <input
          id="from"
          name="from"
          type="text"
          value={fromValue?.primary_city}
          placeholder="Select ZIP code or location"
          onChange={(e) => {
            if (e.target.value.match(/[0-9]/g)) {
              setBooleon(false);
              setZipCode(e.target.value.trim());
            } else {
              setBooleon(true);
              setCountry(e.target.value.trim());
            }
            setRender(true);
            if (e.target.value === "") {
              setRender(false);
            }
          }}
          onClick={() => setFromValue({})}
          className={`input_bg h-45 w-full text-black-inputPlaceholderColor text-15 rounded-md pl-9 mt-1 outline-none border-2 mb-4 border-white`}
        />
        {render ? (
          <div className="w-full h-[200px] overflow-y-scroll rounded absolute bg-white z-50 top-[73px] shadow-selectShadow">
            {data?.map((item: Item) => (
              <p
                onClick={() => {
                  setFromValue(item);
                  setRender(false);
                }}
                className="text-black-servicesTextColor pl-3 py-2 cursor-pointer hover:bg-black-line_bg hover:text-orange-main duration-100"
                key={item?.id}
              >
                {item.zip} {item.primary_city} {item.state} USA
              </p>
            ))}
          </div>
        ) : null}
      </label>
      <label className="text-15 relative flex flex-col text-white">
        To
        <input
          id="name"
          name="to"
          type="text"
          value={fromValue1?.primary_city}
          placeholder="Select ZIP code or location"
          className={`input_bg h-45 w-full text-black-inputPlaceholderColor text-15 rounded-md pl-9 mt-1 outline-none border-2 mb-4 border-white`}
          onChange={(e) => {
            if (e.target.value.match(/[0-9]/g)) {
              setBooleon1(false);
              setZipCode1(e.target.value.trim());
            } else {
              setBooleon1(true);
              setCountry1(e.target.value.trim());
            }
            setRender1(true);
            if (e.target.value === "") {
              setRender1(false);
            }
          }}
          onClick={() => setFromValue1({})}
        />
        {render1 ? (
          <div className="w-full h-[200px] overflow-y-scroll rounded absolute bg-white z-40 top-[73px] shadow-selectShadow">
            {data1?.map((item: Item) => (
              <p
                onClick={() => {
                  setFromValue1(item);
                  setRender1(false);
                }}
                className="text-black-servicesTextColor pl-3 py-2 cursor-pointer hover:bg-black-line_bg hover:text-orange-main duration-100"
                key={item?.id}
              >
                {item.zip} {item.primary_city} {item.state} USA
              </p>
            ))}
          </div>
        ) : null}
      </label>
      <label
        className="text-15 relative flex flex-col text-white"
        htmlFor="date"
      >
        Estimate time
        <input
          id="date"
          type="date"
          min={dayBefore()}
          placeholder="Select estimate time"
          onChange={(e) => setDate(e.target.value)}
          className={`date_bg date h-45 w-full text-black-inputPlaceholderColor text-15 rounded-md pl-10 pr-3 mt-1 outline-none border-2 mb-4 border-white`}
        />
      </label>
      <h3 className="text-15 text-white">Vehicle</h3>
      <div className="grid grid-cols-2 gap-4 mt-1">
        <div className="flex items-center pl-4 rounded-xl border-2 h-45 border-white bg-white cursor-pointer">
          <input
            type="radio"
            value={"open"}
            id="bordered-radio-1"
            name="bordered-radio"
            onChange={(e) => {
              setOpen(e.target.value);
              setChecked(true);
            }}
            className="w-7 h-7 border border-[#D3D3D3] accent-amber-600 cursor-pointer"
          />
          <label
            htmlFor="bordered-radio-1"
            className="py-4 ml-2 w-full text-base font-medium text-gray-900 cursor-pointer"
          >
            Open
          </label>
        </div>
        <div className="flex items-center pl-4 rounded-xl border-2 h-45 border-white bg-white cursor-pointer">
          <input
            type="radio"
            value={"enclose"}
            id="bordered-radio-2"
            name="bordered-radio"
            onChange={(e) => {
              setClose(e.target.value);
              setChecked(false);
            }}
            className="w-7 h-7 border border-[#D3D3D3] accent-amber-600 cursor-pointer"
          />
          <label
            htmlFor="bordered-radio-2"
            className="py-4 ml-2 w-full text-base font-medium text-gray-900 cursor-pointer"
          >
            Enclosed
          </label>
        </div>
      </div>
      <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4"></span>
      <button
        className="h-45 w-full rounded-lg bg-bg_color mt-5 text-white text-base"
        type="submit"
      >
        Get Shipment estimate
      </button>
    </form>
  );
}

export default HeroForm;
