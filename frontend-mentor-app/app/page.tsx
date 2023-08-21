import JobList from "./components/JobList";

export default function Home() {
  return (
    <div className="App h-screen overflow-auto bg-Light_Grayish_Cyan_background">
      <div className="header h-36 w-full bg-cover bg-primary bg-bg_header_desktop">
        <div className="relative top-0 left-0 mx-28">
          {/* filter card */}
          <div className="filter_card flex justify-between items-center absolute left-0 top-28 rounded-md py-3 px-10 w-full shadow-lg bg-white">
            <div className="flex gap-6">
              {/* <FilterTablet/> */}
              <div className="filter_content flex">
                <div className="rounded-l-md px-3 py-2 bg-Light_Grayish_Cyan text-primary font-bold">
                  Frontend
                </div>
                <div className="flex justify-center items-center rounded-r-md px-3 bg-primary hover:bg-Very_Dark_Grayish_Cyan hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="font-bold text-Very_Dark_Grayish_Cyan hover:text-primary hover:underline hover:cursor-pointer">
              Clear
            </span>
          </div>
        </div>
      </div>
      <JobList />
    </div>
  );
}
