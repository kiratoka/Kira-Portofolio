import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map(({ id, title, description, className, imgClassName, img , titleClassName, spareImg }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img= {img}
                        imgClassname={imgClassName}
                        titleClassname = {titleClassName}
                        spareImg = {spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

export default Grid;