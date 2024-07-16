import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
//   height?: number;
  text?: string;
}

function Navbar({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
//   height = 20,
  width = 50,
}: Props) {
  return (
    <div>
        <div class="w-full top-0 left-0 fixed pt-10 px-5 md:px-[70px] flex justify-start md:justify-center">
            {/* <img src="/img/svg-gaia-1.svg" width="50px" class="z-[30]" alt=""> */}
            {image && (
                <Image
                    src={image || ""}
                    alt={alt || ""}
                    // height={height || 20}
                    width={width || 50}
                />
            )}
        </div>
        <nav class="fixed top-0 left-0 w-full md:flex justify-end md:justify-between items-center z-[50] pt-10 px-5 md:px-[70px] fade-in z-[101]">
            <div class="flex justify-end md:justify-between items-center w-full">
                <ul class="hidden md:flex gap-6 flex-1">
                    <li><a href="#sobre" class="text-primary">sobre</a></li>
                    <li><a href="#produtos" class="text-primary">produtos</a></li>
                    <li><a href="#contato" class="text-primary">contato</a></li>
                </ul>
                
                {/* <img src="/img/svg-gaia-1.svg" width="50px" class="invisible" alt=""> */}
                {image && (
                  <Image
                      src={image || ""}
                      alt={alt || ""}
                      // height={height || 20}
                      width={width || 50}
                      class="invisible"
                  />
              )}

                <ul class="hidden md:flex gap-6 flex-1 justify-end">
                    <li class="text-primary">pt</li>
                    <li class="text-secondary">en</li>
                </ul>
                
                <div class="drawer drawer-end grid md:hidden">
                    <input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content block md:hidden focus:outline-none flex justify-end">
                        <label for="my-drawer-5" class="drawer-button w-fit">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
                        <ul class="menu min-h-full p-4 w-4/5 right-0 inset-x-auto inset-y-auto bg-[#000000a1] justify-center">
                            <li><a href="#sobre" onclick="document.getElementById('my-drawer-5').checked = false;" class="text-xl text-center text-primary justify-center">sobre</a></li>
                            <li><a href="#produtos"  onclick="document.getElementById('my-drawer-5').checked = false;" class="text-xl text-center text-primary justify-center">produtos</a></li>
                            <li><a href="#contato"  onclick="document.getElementById('my-drawer-5').checked = false;" class="text-xl text-center text-primary justify-center">contato</a></li>
                            <li><a href="" class="text-xl text-center text-primary justify-center">pt</a></li>
                            <li><a href="" class="text-xl text-center text-secondary justify-center">en</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    // <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
    //   <a
    //     href={href}
    //     class="flex flex-row gap-1 items-center justify-center text-xs"
    //     target="_blank"
    //   >
    //     {text && <p>{text}</p>}
    //     {image && (
    //       <Image
    //         src={image || ""}
    //         alt={alt || ""}
    //         height={height || 20}
    //         width={width || 50}
    //       />
    //     )}
    //   </a>
    // </div>
  );
}

export default Navbar;
