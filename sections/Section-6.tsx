import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    href?: string;
    image?: ImageWidget;
    alt?: string;
    width?: number;
}

function Section6({
    image =
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
    href = "https://deco.cx/",
    alt = "Made with deco.cx",
    width = 50,
}: Props) {
  return (
    <section class="bg-black">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 grid-rows-4 gap-3">
            <div class="min-w-[120px] max:w-[250px]">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px]">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px]">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px]">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px]">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px]">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px]">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            
            <div class="min-w-[120px] max:w-[250px]">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden sm:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden sm:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden sm:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden sm:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden md:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden md:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>

            <div class="min-w-[120px] max:w-[250px] hidden md:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden md:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden lg:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden lg:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden lg:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden lg:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden xl:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>

            <div class="min-w-[120px] max:w-[250px] hidden xl:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden xl:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden xl:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden xl:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden xl:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden xl:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
            <div class="min-w-[120px] max:w-[250px] hidden xl:block">
                {/* <img src="/img/svg-gaia-1.svg" width="100%" alt=""> */}
                {image && (
                    <Image
                        src={image || ""}
                        alt={alt || ""}
                        // height={height || 20}
                        width={50}
                        class="w-full"
                    />
                )}
            </div>
        </div>
    </section>
  );
}

export default Section6;
