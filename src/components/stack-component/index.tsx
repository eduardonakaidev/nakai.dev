import Image, { ImageProps } from "next/image";

export interface StackComponentProps {
    image: ImageProps
    title: string
}
export function StackComponent({ image, title }: StackComponentProps) {
    return (
        <div className="bg-gray_theme flex flex-row gap-4 items-center p-6 rounded-lg min-w-48 max-w-full">
            <Image
                src={image.src}
                alt={title}
                width={32}
                height={32}
                className="w-8 h-8"
            />
            <div className="flex-1">
                <p className="mt-2 text-center w-full text-white font-bold text-base break-words">
                    {title}
                </p>
            </div>
        </div>
    )
}
