interface Props {
  /**
   * @description Título.
   */
  text_1?: string;
  /**
   * @format rich-text
   * @description Texto de descrição.
   * @default It Works!
   */
  text_desktop: string;
  text_mobile: string;
}

function Section3({
  text_1 = "Made with",
  text_desktop = "Made with",
  text_mobile = "Made with",
}: Props) {
  return (
    <section class="bg-black" id="sobre">
        <div class="container py-[180px] md:py-[300px] pr-16">
            <p class="text-sm font-normal text-gray-3 uppercase mb-4 leading-none tracking-[1.4px] text-ibm">{text_1}</p>
            <p class="hidden md:block" dangerouslySetInnerHTML={{__html: text_desktop,}}></p>
            <p class="md:hidden" dangerouslySetInnerHTML={{__html: text_mobile,}}></p>
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
