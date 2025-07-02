interface Props {
  /**
   * @description Título.
   * @title Título.
   */
  text_1?: string;
  /**
   * @format rich-text
   * @description Texto de descrição.
   * @default It Works!
   * @title Texto desktop
   */
  text_desktop: string;
  /**
   * @format rich-text
   * @description Texto de descrição.
   * @default It Works!
   * @title Texto mobile 
   */
  text_mobile: string;
  arrow_url?: string;
}

function Section3({
  text_1 = "Made with",
  text_desktop = "Made with",
  text_mobile = "Made with",
}: Props) {
  return (
    <section class="bg-black" id="sobre">
        <div class="container flex flex-col justify-center min-h-[100vh] py-30 md:py-30">
            <p class="text-sm font-normal text-gray-3 uppercase mb-4 leading-none tracking-[1.4px] text-ibm">{text_1}</p>
            <div class="hidden md:block">
              <p dangerouslySetInnerHTML={{__html: text_desktop,}}></p>
            </div>
            <div class="md:hidden">
              <p dangerouslySetInnerHTML={{__html: text_mobile,}}></p>
            </div>
            {/* <p class="text-secondary font-medium text- md:text-4xl leading-none -tracking-[0.36px] crystal">
                Somos uma <span class="text-primary">DataTech de próxima geração,</span> especializada em transformar dados em inteligência de negócios.
                <br /><br />
                <span class="text-primary">Criamos produtos e serviços</span> que geram valor real para nossos clientes. <span class="text-primary">Oferecemos soluções prontas e desenvolvemos novos produtos</span> em modelo SaaS.
            </p> */}
        </div>
    </section>
  );
}

export default Section3;
