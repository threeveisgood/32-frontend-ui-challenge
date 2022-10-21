import Image from "next/image";
import * as React from "react";
import { MdVerified } from "react-icons/md";

interface ICardProps {}

const Card: React.FunctionComponent<ICardProps> = () => {
  return (
    <>
      <div className="flex flex-col w-[270px] rounded-md">
        <div className="flex relative">
          <Image
            className="rounded-t-md w-full"
            src={
              "/static/aurora" +
              String(Math.floor(Math.random() * 4 + 1)) +
              ".jpg"
            }
            alt="aurora"
            width={270}
            height={140}
          />
          <div className="absolute w-[45px] h-[45px] left-6 bottom-[-24px]">
            <Image
              className="rounded-2xl"
              src="/static/profile.png"
              alt="profile"
              layout="fill"
            />
          </div>
          <div className="absolute rounded-xl border-[3px] border-gray-800 w-[45px] h-[45px] left-6 bottom-[-24px]"></div>
        </div>
        <div className="text-white pt-9 px-6 rounded-b-md bg-gray-800 w-full">
          <div className="flex items-center">
            <div className="pr-1 text-emerald-500">
              <MdVerified />
            </div>
            <div className="font-bold">Aurora</div>
          </div>
          <div className="text-sm leading-[19px] pt-1 pb-8 font-light">
            Several terms redirect here. For other uses, see Aurora, Aurora
            Australis, Aurora Borealis, Northern Lights and Southern Lights.
            (source: wikipedia)
          </div>
          <div className="flex pb-5">
            <div className="flex items-center pr-3">
              <div>
                <div className="bg-emerald-500 rounded-md p-1 m-px"></div>
              </div>
              <div className="text-xs pl-1">35000명 온라인</div>
            </div>
            <div className="flex items-center">
              <div>
                <div className="bg-gray-300 rounded-md p-1 m-px"></div>
              </div>
              <div className="text-xs pl-1">멤버 534,300명</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
