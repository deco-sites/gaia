interface Props {
  text_1?: string;
  text_2?: string;
}

function Section7({
  text_1 = "Os dados precisam te ajudar a sair do labirinto",
  text_2 = "Deixa seu e-mail com a gente que a gente",
}: Props) {
  return (
    <section class="bg-black" id="contato">
        <div class="container min-h-[80vh] flex justify-center items-center py-[250px] md:py-[275px]">
            <div class="flex flex-col items-center w-full">
                <p class="text-3xl md:text-[43px] text-primary text-center mb-4 leading-none -tracking-[1.29px] max-w-[544px]">{text_1}</p>
                <p class="text-md md:text-2xl text-secondary text-center leading-none -tracking-[0.24px] max-w-[544px]">{text_2}</p>
                <div class="flex gap-2 border-b-2 pb-2 border-[#ffffff66] mt-[60px] w-full max-w-[635px]">
                    <input type="text" placeholder="Digite seu e-mail" class="flex-1 text-[20px] md:text-[28px] w-full bg-transparent text-[#ffffff66] focus:outline-0 placeholder:text-[#F9F9F930]" />
                    <button type="submit" class="text-lg font-base text-white">Enviar</button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Section7;
