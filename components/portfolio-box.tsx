import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image,  urlGithub } = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={500} height={500} className="w-full md:w-[200px] rounded-2xl h-auto"
            />

<div className="flex gap-5 mt-5 justify-center">
    <Link
        href={urlGithub}
        target="_blank"
        className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
    >
        Github
    </Link>
</div>
        </div>
    );
}

export default PortfolioBox
