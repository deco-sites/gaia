
// import { useId } from "../sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";


export interface CardContent {
    number?: number;
    title?: string;
    subtitle?: string;
    /** @description Alternative text */
    label?: string;
    sidebarSection?: {
        sidebarSection?: SidebarSection;
        sidebarContentSection?: SidebarContentSection[];
    };
}
export interface SidebarSection {
    title?: string;
    text?: string;
}
export interface SidebarContentSection {
    image: ImageWidget;
    title: string;
    /**
     * @format rich-text
     * @description Texto de descrição.
     * @default It Works!
     */
    text_1: string;
}

export interface Props {
    header?: {
        /**
         * @default Explore Our Categories
         */
        title?: string;
    };
    cardContent?: CardContent[];
}

const DEFAULT_LAYOUT = [
    {
        number: 1,
        title: "Título",
        subtitle: "Subtítulo",
        sidebarSection: {
            sidebarSection: {
                title: "Título",
                text: "Texto",
            },
            sidebarContentSection: [
                {
                    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5",
                    title: "Título 1",
                    text_1: "Texto 1",
                }
            ]
        }
    },
    {
        number: 2,
        title: "Título",
        subtitle: "Subtítulo",
        sidebarSection: {
            sidebarSection: {
                title: "Título",
                text: "Texto",
            },
            sidebarContentSection: [
                {
                    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5",
                    title: "Título 1",
                    text_1: "Texto 1",
                }
            ]
        }
    },
];

function Section5(props: Props){
    const {
        header = {
            title: "Texto aqui",
            description: "Descrição",
        },
        cardContent = DEFAULT_LAYOUT,
    } = props;
  
    return (
    <section class="bg-black" id="produtos">
        <div class="container pb-[300px] pt-[150px]">
            <h2 class="text-[40px] md:text-[58px] text-primary text-center mb-[70px] leading-none -tracking-[1.74px]">{header.title}</h2> {/* Produtos */}
            <div class="grid gap-8">
                {cardContent.map(( { number, title, subtitle, sidebarSection } ) => (
                <div class="drawer drawer-end">
                    <input id={`my-drawer-${number}`} type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <label for={`my-drawer-${number}`} class="drawer-button flex items-center justify-between gap-2 md:gap-6 py-4 border-b cursor-pointer">
                            <p class="text-lg md:text-xl text-gray-2 font-normal">{number}.</p>
                            <p class="text-lg md:text-xl text-primary font-medium">{title}</p>
                            <p class="flex-1 text-right text-lg md:text-xl text-gray-2 font-normal">{subtitle}</p>
                        </label>
                    </div>
                    <div class="drawer-side z-[60] overflow-hidden">
                        <label for={`my-drawer-${number}`} aria-label="close sidebar" class="drawer-overlay"></label>
                        <div class="menu bg-white h-full w-4/5 p-0 overflow-y-auto flex-nowrap gap-5">
                            <div class="flex justify-end pb-10 pt-5 pr-9">
                                <label for={`my-drawer-${number}`} aria-label="close sidebar" class="drawer-overlay cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </label>
                            </div>
                            <div class="px-4 md:px-8">
                                <p class="text-xl md:text-3xl lg:text-[86px] font-medium text-black mb-2 !leading-none">{sidebarSection?.sidebarSection?.title}</p>
                                <p class="text-md md:text-xl font-normal text-black">{sidebarSection?.sidebarSection?.text}</p>
                            </div>
                            
                            <div class="grid gap-[92px]">
                                {sidebarSection?.sidebarContentSection?.map(( { title, text_1, image } ) => (
                                <div class="grid">
                                    { image && (
                                        <Image
                                        src={image || ""}
                                        // alt={alt}
                                        width={0}
                                        class={"w-full mb-[92px]"}
                                        />
                                    )}
                                    <div class="grid md:grid-cols-3 gap-5 px-4 md:px-8">
                                        <p class="text-md font-medium text-black">{title}</p>
                                        <div class="md:col-span-2">
                                            <div class="w-full max-w-[615px]" dangerouslySetInnerHTML={{__html: text_1,}}>
                                                {/* <p class="text-md md:text-xl font-medium text-black"dangerouslySetInnerHTML={{__html: text}}></p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div class="mt-[100px] md:mt-[260px] border-t-2 py-[60px]">
                                <div class="grid md:grid-cols-3 px-8">
                                    <div class="md:col-start-2 md:col-span-2">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-sm md:text-md font-normal text-black">Próximo trabalho</p>
                                                <p class="text-xl md:text-3xl lg:text-[86px] !leading-none font-medium text-black">CaaS</p>
                                            </div>
                                            <svg class="md:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" fill="none">
                                                <path d="M20.8327 50L79.166 50" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M49.9994 20.8334L79.166 50L49.9993 79.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <svg class="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                                                <path d="M20.8327 50L79.166 50" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M49.9994 20.8334L79.166 50L49.9993 79.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Section5;
