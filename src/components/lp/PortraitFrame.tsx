type PortraitFrameProps = {
  src: string;
  alt: string;
  /** `arch` = topo em arco; `soft` = retângulo de cantos largos. */
  shape?: 'arch' | 'soft';
  /** Só a foto da primeira dobra deve ser prioritária: ela é o LCP. */
  priority?: boolean;
  className?: string;
};

/**
 * Moldura das fotos da Dra. Larissa nas landing pages.
 *
 * O arco não é ornamento: as três fotos são quadradas e centradas no rosto, e
 * o corte em arco tira o peso do canto superior sem cortar a cabeça, que é o
 * que aconteceria num círculo. A faixa de cor atrás dá profundidade sem sombra
 * — sombra grande sobre fundo claro suja a foto.
 *
 * `width`/`height` são fixos e a proporção é travada por `aspect-[4/5]`, então
 * o espaço já está reservado no primeiro paint e a imagem não empurra o texto.
 */
export default function PortraitFrame({
  src,
  alt,
  shape = 'arch',
  priority = false,
  className = '',
}: PortraitFrameProps) {
  const radius = shape === 'arch' ? 'rounded-[14rem_14rem_1.5rem_1.5rem]' : 'rounded-[2rem]';

  return (
    <div className={`relative ${className}`.trim()}>
      <div
        aria-hidden="true"
        className={`absolute -bottom-3 -right-3 h-full w-full bg-primary-100 ${radius}`}
      />
      <img
        src={src}
        alt={alt}
        width={820}
        height={1025}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={`relative aspect-[4/5] w-full object-cover object-top ${radius}`}
      />
    </div>
  );
}
