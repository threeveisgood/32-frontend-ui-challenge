import * as React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ICarouselProps {}

const Carousel: React.FunctionComponent<ICarouselProps> = (props) => {
  return (
    <>
      <div>
        <div className="box-content my-0 mx-auto px-[4.5rem] w-[1224px]">
          <section className="my-0 mx-auto pt-9 pb-16">
            <div className="text-sm font-normal text-slate-600">
              데일리 랭킹
            </div>
            <div className="flex items-center justify-between mt-0 mb-3">
              <div className="flex items-center justify-start">
                <h2 className="text-xl text-gray-500 font-bold m-0">
                  10월 26일의 랭킹
                </h2>
              </div>
              <a href="/ranking" className="mr-4">
                모두 보기
              </a>
            </div>
            <div>
              <div className="relative z-0">
                <div className="overflow-hidden -mx-[4.5rem]">
                  <div className="mask-images">
                    <div className="-mr-[4.5rem] pr-[4.5rem] mask-image carousel-transition">
                      <div className="overflow-x-auto p-0 m-0">
                        <ul className="inline-flex px-[4.5rem] align-top overflow-hidden list-none m-0 min-w-full box-border">
                          <div>
                            <div className="w-[288px]">
                              <div className="relative mask-illust rounded-lg overflow-hidden">
                                <div className="relative z-0 w-[288px] h-[288px]">
                                  <a href="/artworks">
                                    <div className="relative flex items-center justify-center w-full h-full before:content-[''] before:absolute before:block before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0, 0, 0, 0.02)] before:rounded">
                                      <img
                                        src="/static/aurora2.jpg"
                                        alt="aurora"
                                        className="object-cover object-center w-full h-full rounded bg-neutral-900 illust-transition"
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="flex mt-1">
                                <a
                                  href="/artworks"
                                  className="inline max-w-full overflow-hidden no-underline text-ellipsis whitespace-nowrap text-sm font-bold title-transition"
                                >
                                  오로라
                                </a>
                              </div>
                              <div className="flex mt-1">
                                <div className="flex items-center min-w-0">
                                  <a
                                    href="/users"
                                    className="block min-w-0 text-sm text-gray-500 no-underline text-ellipsis whitespace-nowrap overflow-hidden"
                                  >
                                    박스
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[27120px]"></div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 hover:opacity-100 carousel-btn-container-transition">
                  <button className="-left-13 mb-0 pl-4 pb-0 absolute top-0 bottom-0 flex items-center min-w-10 border-none outline-0 bg-transparent cursor-pointer carousel-btn-hover-transtiion z-[1]">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-[rgba(0, 0, 0, 0.32)] carousel-btn-transition">
                      <FiChevronLeft />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Carousel;
