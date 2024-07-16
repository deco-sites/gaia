interface Props {
  text_1?: string;
  text_2?: string;
}

function Section1({
  text_1 = "Made with",
  text_2 = "Made with",
}: Props) {
  return (
    <section class="min-h-[85svh] md:min-h-[80svh] flex justify-center items-center bg-black relative z-[40]">
        <div id="text-fade" class="text-center grid gap-2 fade-in">
            <p class="text-xl md:text-[34px] text-primary font-medium leading-none -tracking-[0.34px]">{text_1}</p> {/*Transformar negócios*/}
            <p class="text-xl md:text-[34px] text-secondary font-medium leading-none -tracking-[0.34px]">{text_2}</p> {/*Traduzindo dados*/}
        </div>
    </section>
  );
}

export default Section1;
