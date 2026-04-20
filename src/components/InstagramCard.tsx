import { useEffect, useRef } from 'react';

interface InstagramCardProps {
  titulo: string;
  resumo: string;
  imagem: string;
  categoria: string;
  autor: string;
  onReady?: () => void;
  format?: 'feed' | 'stories';
}

const InstagramCard = ({ titulo, resumo, imagem, categoria, autor, onReady, format = 'feed' }: InstagramCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isStories = format === 'stories';

  useEffect(() => {
    if (onReady) {
      const img = new Image();
      img.src = imagem;
      img.onload = () => {
        setTimeout(() => onReady(), 500);
      };
      img.onerror = () => {
        setTimeout(() => onReady(), 500);
      };
    }
  }, [imagem, onReady]);

  // Dimensões e espaçamentos responsivos
  const cardWidth = '1080px';
  const cardHeight = isStories ? '1920px' : '1080px';
  const padding = isStories ? '120px 100px' : '100px 80px';
  const titleSize = isStories ? '52px' : '56px';
  const summarySize = isStories ? '28px' : '24px';
  const categorySize = isStories ? '14px' : '13px';
  const authorSize = isStories ? '20px' : '18px';
  const brandingSize = isStories ? '28px' : '24px';
  const brandingSubSize = isStories ? '20px' : '18px';

  return (
    <div
      ref={cardRef}
      className="instagram-card"
      style={{
        width: cardWidth,
        height: cardHeight,
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* Imagem de fundo - parte superior */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: isStories ? '1000px' : '520px', // Altura fixa para manter proporção
          overflow: 'hidden',
          background: '#f3f4f6',
          flexShrink: 0,
        }}
      >
        <img
          src={imagem}
          alt={`Imagem de capa do artigo ${titulo}`}
          loading="lazy"
          decoding="async"
          crossOrigin="anonymous"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            margin: 0,
            padding: 0,
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Conteúdo principal - parte inferior */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: padding,
          background: '#ffffff',
          minHeight: 0, // Permite que o flex funcione corretamente
        }}
      >
        {/* Topo: Categoria */}
        <div style={{ marginBottom: isStories ? '45px' : '35px' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#7c3aed',
              color: '#ffffff',
              padding: isStories ? '9px 20px' : '7px 16px',
              borderRadius: '6px',
              fontSize: categorySize,
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
            }}
          >
            {categoria}
          </span>
        </div>

        {/* Meio: Título e Resumo */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <h1
            style={{
              fontSize: titleSize,
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: isStories ? '32px' : '28px',
              color: '#111827',
              letterSpacing: '-0.8px',
            }}
          >
            {titulo}
          </h1>
          <p
            style={{
              fontSize: summarySize,
              lineHeight: '1.65',
              color: '#4b5563',
              maxWidth: '100%',
              fontWeight: '400',
              margin: 0,
            }}
          >
            {resumo}
          </p>
        </div>

        {/* Rodapé: Branding */}
        <div
          style={{
            marginTop: isStories ? '55px' : '45px',
            paddingTop: isStories ? '35px' : '30px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <div
              style={{
                fontSize: brandingSize,
                fontWeight: '600',
                color: '#111827',
                marginBottom: '4px',
                letterSpacing: '-0.3px',
              }}
            >
              Dra. Larissa Nunes
            </div>
            <div
              style={{
                fontSize: brandingSubSize,
                color: '#6b7280',
                fontWeight: '400',
              }}
            >
              Psicóloga | Método S.E.R.
            </div>
          </div>
          <div
            style={{
              fontSize: authorSize,
              color: '#9ca3af',
              fontWeight: '400',
              textAlign: 'right',
            }}
          >
            {autor}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramCard;
