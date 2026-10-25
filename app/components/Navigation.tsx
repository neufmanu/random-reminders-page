import Image from "next/image";

export const Navigation = () => {
    return (
        <nav className="absolute px-8 py-4 lg:p-4 lg:p-10 w-full max-w-350 flex items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
                <a className={"lg:w-11 lg:h-11 rounded-xl bg-white shadow-md"}>
                    {/* TODO: Make this more dynamic! */}
                    <Image
                        src="random-reminders-page/logo.svg"
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>
                {/* TODO: break title on mobile*/}
                <h1 className="lg:text-lg font-bold">Stoobs: Random Reminders</h1>
            </div>
            <a className="px-5 py-2.5 rounded-xl bg-light shadow-md w-fit">
                Download
            </a>
        </nav>
    )
}