import WorkComponent from "../works-component";
import MyLittlePetIcon from "@/assets/projects-photo/my-little-pet.png";

export default function WorksSection() {
    return (
        <section id="works" className="w-full h-fit p-10">
            <h2 className="font-epilogue font-bold text-2xl w-full text-center mb-8">
                Lastest Works And Projects
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                <WorkComponent
                    ImageComponent={{ src: MyLittlePetIcon, alt: "my-little-pet-icon" }}
                    description="ecommerce interativo para donos de pet"
                    title="My Little Pet"
                    url="https://github.com/My-little-pet-MLP"
                />
             
            </div>
        </section>
    );
}
