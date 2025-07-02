import type { Video } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Vídeo de fundo
   * @description Selecione um vídeo nos assets
   */
  video?: Video;
}

function Section2({ video }: Props) {
  return (
    <section class="bg-black relative z-[40]">
      <div class="container">
        {video && (
          <video width="100%" loop autoPlay muted playsInline>
            <source src={video} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        )}
      </div>
    </section>
  );
}

export default Section2;
