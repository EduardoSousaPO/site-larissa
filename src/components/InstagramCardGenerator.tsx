import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import InstagramCard from './InstagramCard';

interface InstagramCardGeneratorProps {
  titulo: string;
  resumo: string;
  imagem: string;
  categoria: string;
  autor: string;
}

const InstagramCardGenerator = ({
  titulo,
  resumo,
  imagem,
  categoria,
  autor,
}: InstagramCardGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [format, setFormat] = useState<'feed' | 'stories'>('feed');
  const cardRef = useRef<HTMLDivElement>(null);

  const generateImage = async (imageFormat: 'feed' | 'stories' = 'feed') => {
    try {
      setIsGenerating(true);
      setFormat(imageFormat);
      setShowCard(true);

      // Aguardar renderização do React
      await new Promise(resolve => setTimeout(resolve, 500));

      if (!cardRef.current) {
        throw new Error('Elemento do card não foi encontrado. Tente novamente.');
      }

      console.log('Iniciando geração de imagem...', {
        format: imageFormat,
        element: cardRef.current,
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      });

      // Aguardar mais um pouco para garantir que imagens carregaram
      await new Promise(resolve => setTimeout(resolve, 1000));

      const canvas = await html2canvas(cardRef.current, {
        width: imageFormat === 'feed' ? 1080 : 1080,
        height: imageFormat === 'feed' ? 1080 : 1920,
        scale: 1,
        useCORS: true,
        backgroundColor: '#667eea',
        logging: false,
        allowTaint: true,
        imageTimeout: 20000,
        removeContainer: false,
        onclone: (clonedDoc) => {
          // Garantir que o elemento clonado está visível
          const clonedElement = clonedDoc.querySelector('.instagram-card') as HTMLElement;
          if (clonedElement) {
            clonedElement.style.visibility = 'visible';
            clonedElement.style.opacity = '1';
          }
        },
      });

      console.log('Canvas gerado:', { width: canvas.width, height: canvas.height });

      // Converter para blob e fazer download
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            const fileName = `instagram-${imageFormat}-${titulo
              .substring(0, 30)
              .replace(/[^a-z0-9]/gi, '-')
              .toLowerCase()}.png`;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            setIsGenerating(false);
            setShowCard(false);
            alert(
              `✅ Card gerado com sucesso!\n\nA imagem foi baixada como "${fileName}".\n\nAgora você pode compartilhar no Instagram!`
            );
          } else {
            throw new Error('Erro ao criar arquivo de imagem');
          }
        },
        'image/png',
        0.95
      );
    } catch (error: any) {
      console.error('Erro completo ao gerar imagem:', error);
      setIsGenerating(false);
      setShowCard(false);
      alert(
        `❌ Erro ao gerar imagem:\n\n${error.message || 'Erro desconhecido'}\n\nVerifique o console (F12) para mais detalhes.`
      );
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => generateImage('feed')}
          disabled={isGenerating}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Gerar card para Instagram Feed"
        >
          {isGenerating && format === 'feed' ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Gerando...
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Feed (1:1)
            </>
          )}
        </button>

        <button
          onClick={() => generateImage('stories')}
          disabled={isGenerating}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Gerar card para Instagram Stories"
        >
          {isGenerating && format === 'stories' ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Gerando...
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Stories (9:16)
            </>
          )}
        </button>
      </div>

      {/* Card oculto para geração da imagem - renderizado fora da tela mas acessível */}
      {showCard && (
        <div
          style={{
            position: 'fixed',
            left: '0',
            top: '0',
            width: format === 'feed' ? '1080px' : '1080px',
            height: format === 'feed' ? '1080px' : '1920px',
            zIndex: 99999,
            pointerEvents: 'none',
            overflow: 'hidden',
            // Renderizar fora da viewport mas ainda acessível para html2canvas
            transform: 'translateX(-200%)',
          }}
        >
          <div ref={cardRef} style={{ width: '100%', height: '100%' }}>
            <InstagramCard
              titulo={titulo}
              resumo={resumo}
              imagem={imagem}
              categoria={categoria}
              autor={autor}
              format={format}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramCardGenerator;
