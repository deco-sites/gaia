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
  text_2?: string;
}

function Section3({
  text_1 = "Made with",
  text_2 = "Made with",
}: Props) {
  return (
    <section class="bg-black" id="sobre">
        <div class="container py-[180px] md:py-[300px] pr-16">
            <p class="text-sm font-normal text-gray-3 uppercase mb-4 leading-none tracking-[1.4px] text-ibm">{text_1}</p>
            <p dangerouslySetInnerHTML={{__html: text_2,}}></p>
        </div>
    </section>
  );
}

export default Section3;
