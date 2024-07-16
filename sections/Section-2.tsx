interface Props {
  text_1?: string;
  text_2?: string;
}

function Section2({
  text_1 = "Made with",
  text_2 = "Made with",
}: Props) {
  return (
    <section class="bg-black relative z-[40]">
      <div class="container">
          <video width="100%" loop autoplay muted playsinline>
              <source src="/gaia.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
          </video>
      </div>
  </section>
  );
}

export default Section2;
