export function SearchButton () {
    return (
        <label className="input input-bordered flex items-center gap-2 bg-[#F7F7F8] border border-tagLightGrayBg">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="#121316"
                        className="h-[18px] w-[18px] opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
                <input type="text" className="grow " placeholder="Дэргүүрийн төрлөө оруулна уу." />
              
        </label>
    )
}