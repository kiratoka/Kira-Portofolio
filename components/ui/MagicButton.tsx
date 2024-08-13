const MagicButton = ({
    title, icon, position, handleClick, otherClasses, bgNyala, customSize

}: { title: string; icon?: React.ReactNode; position: string; handleClick?: () => void; otherClasses: string, bgNyala?: boolean, customSize?: string }) => {
    return (
        <button
            className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 group"
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 font-medium text-white backdrop-blur-3xl gap-2 ${customSize ? { customSize } : "text-sm"}`}>
                <div className={`absolute inset-0 bg-gradient-to-tr from-cyan-500 via-violet-600 to-fuchsia-500 opacity-0 transition-opacity duration-500 ${bgNyala ? "group-hover:opacity-100" : null} -z-10`}></div>
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>


    );
}

export default MagicButton;