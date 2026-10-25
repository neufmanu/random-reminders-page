import Image from "next/image";
import {DownloadIcon} from "@/app/components/DownloadIcon";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const Navigation = () => {
    return (
        <nav
            className="absolute px-8 py-4 lg:p-4 lg:p-10 w-full max-w-180 lg:max-w-350 flex items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
                <a className={"lg:w-11 lg:h-11 rounded-xl shadow-md"}>
                    {/* TODO: Make this more dynamic! */}
                    <Image
                        src={`${basePath}/logo.svg`}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>
                <h1 className="lg:text-lg font-bold">Stoobs: Random Reminders</h1>
            </div>
            <a className="hidden sm:flex px-3 py-2 rounded-xl bg-light shadow-md w-fit flex-row gap-2 items-center">
                <DownloadIcon/>
                <p className="">
                    Get the app
                </p>
            </a>
        </nav>
    )
}