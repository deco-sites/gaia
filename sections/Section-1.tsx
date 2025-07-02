interface Props {
  text_1?: string;
  text_2?: string;
  text_3?: string;
}

function Section1({
  text_1 = "Made with",
  text_2 = "Made with",
}: Props) {
  return (
    <section class="min-h-[85svh] md:min-h-[80svh] flex justify-center items-center bg-black relative z-[40]">
      <div id="text-fade" class="text-center grid gap-2 fade-in max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto px-4">
        <p class="text-xl md:text-[34px] text-primary font-medium leading-normal -tracking-[0.34px] break-words">{text_1}</p>
        <p class="text-xl md:text-[24px] text-secondary font-medium leading-normal -tracking-[0.34px] break-words">{text_2}</p>
      </div>
    </section>
  );
}

export default Section1;