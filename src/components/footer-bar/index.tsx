import { SocialBar } from "../social-bar";

export function FooterBar() {
    return (
        <footer id="contact" className="w-full h-fit p-10">

            <div className="w-full h-fit flex flex-col gap-12 sm:gap-0 sm:flex-row">

                <div className="flex flex-col gap-6 w-full sm:w-2/3 h-fit items-center justify-center sm:items-start sm:justify-start">

                    <h3 className="font-epilogue font-semibold text-2xl">Lets work together</h3>

                    <div className="flex flex-col gap-10">
                        <p className="font-epilogue font-normal text-base">contact me to talk more</p>
                        <SocialBar />
                    </div>
                </div>

                <div className="w-full sm:w-1/3 ">
                    <form className="flex flex-col gap-3">
                        <input type="text" name="" id="" className="w-full h-fit font-epilogue font-normal text-base px-6 py-4 bg-white_input" placeholder="Name" />
                        <input type="email" name="" id="" className="w-full h-fit font-epilogue font-normal text-base px-6 py-4 bg-white_input" placeholder="Email" />
                        <input
                            className="w-full sm:w-fit bg-gray_theme text-white flex items-center justify-center px-12 sm:px-16 py-4 sm:py-6 font-epilogue font-semibold text-base sm:text-xl mt-6"
                            type="submit"
                            value="Submit"
                            title="Submit"
                        />
                    </form>
                </div>
            </div>

        </footer>
    )
}