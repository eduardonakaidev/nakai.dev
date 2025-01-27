import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface WorkComponentProps {
    title: string;
    ImageComponent: ImageProps;
    description: string;
    url: string;
}

export default function WorkComponent({ title, description, ImageComponent, url }: WorkComponentProps) {
    return (
        <Link 
            href={url} 
            target="_blank" 
            className="w-[420px]"
        >
            <div className="w-[420px]  flex flex-col gap-6 transition-shadow hover:shadow-lg">
                <Image 
                    alt={ImageComponent.alt} 
                    src={ImageComponent.src} 
                    className="h-80 w-[420px]  object-cover"
                />
                <div className="flex flex-col gap-2">
                    <h4 className="font-epilogue font-semibold text-xl text-gray_theme">{title}</h4>
                    <p className="font-epilogue font-normal text-base text-gray_theme">{description}</p>
                </div>
            </div>
        </Link>
    );
}
