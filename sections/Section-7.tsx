interface Props {
  text_1?: string;
  text_2?: string;
  text_3?: string;
}

function Section7({
  text_1 = "Descubra como transformar sua marca",
  text_2 = "Clique aqui e nos mande uma mensagem que logos retornaremos.",
  text_3 = "contato@gaia.dev"
}: Props) {
  return (
    <section class="bg-black" id="contato">
      <div class="container flex flex-col justify-center items-center min-h-[30vh] py-10 md:py-16">
        <div class="flex flex-col items-center w-full">
          <p class="text-3xl md:text-[43px] text-primary text-center mb-4 leading-none -tracking-[1.40px] max-w-[544px]">
            {text_1}
          </p>
          <p class="text-md md:text-2xl text-secondary text-center leading-none -tracking-[0.24px] max-w-[544px]">
            {text_2}
          </p>
          <a
            href="mailto:contato@gaia.dev?subject=Quero%20falar%20com%20o%20time%20de%20vendas%20sobre%20produtos%20GAIA."
            class="mt-[60px] text-lg md:text-xl text-white border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Mande uma Mensagem
          </a>
          <p class="mt-4 text-md md:text-xl text-secondary text-center leading-none -tracking-[0.24px] max-w-[544px]">
            {text_3}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section7;
