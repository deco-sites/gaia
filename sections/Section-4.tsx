import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useId } from "../sdk/useId.ts";

export interface Section {
  /** @description Imagem para desktop */
  desktop: ImageWidget;
  /** @description Descrição da imagem */
  alt: string;
  /** @description Texto logo abaixo da imagem */
  text_image: string;
  contentAlignment?: "left" | "right";
}

interface Props {
  /** @description Título da sessão */
  title?: string;
  images?: Section[];
}

const DEFAULT_PROPS = {
  images: [
    {
      text_image: "Text here",
      alt: "/feminino",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5",
    },
  ],
  preload: true,
  title: "Título",
  contentAlignment: "left"
}

function SectionItem(
  { image }: { image: Section; lcp?: boolean; id: string },
) {
  const {
    alt,
    desktop,
    text_image,
    contentAlignment
  } = image;

  return (
    <div class={`grid gap-8 justify-center ${contentAlignment === 'right' ? "order-2 md:justify-end" : "md:justify-start"}`}>
        <Image
          src={desktop}
          alt={alt}
          width={0}
          class={"w-full max-w-[411px]"}
        />
        <p class="text-2xl font-medium text-white max-w-[411px] leading-[110%]">{text_image}</p>
    </div>
  )
}

function Section4(props: Props) {
  const id = useId();
  const { images, preload, title, contentAlignment } = { ...DEFAULT_PROPS, ...props };

  return (
    <section class="bg-blue">
        <div class="container py-[110px] md:py-[300px]">
            <h2 class="text-4xl md:text-[108px] text-primary text-center leading-none -tracking-[1.08px] md:-tracking-[3.24px]">{title}</h2>
            {images?.map((image, index) => {
              return (
                <div class="grid md:grid-cols-2 mt-10 md:mt-[200px]">
                    <SectionItem
                      image={image}
                      lcp={index === 0 && preload}
                      id={`${id}::${index}`}
                    />
                    <div class={`${contentAlignment === "right" ? "order-1" : ""}"`}></div>
                </div>
              );
            })}
        </div>
    </section>
  );
}

export default Section4;
