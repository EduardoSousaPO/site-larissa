import { useState } from 'react';
import InstagramCard from './InstagramCard';

interface InstagramCardPreviewProps {
  titulo: string;
  resumo: string;
  imagem: string;
  categoria: string;
  autor: string;
}

// Componente para visualizar o card antes de gerar (opcional)
const InstagramCardPreview = ({
  titulo,
  resumo,
  imagem,
  categoria,
  autor,
}: InstagramCardPreviewProps) => {
  const [previewFormat, setPreviewFormat] = useState<'feed' | 'stories'>('feed');

  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setPreviewFormat('feed')}
          className={`px-3 py-1 text-sm rounded ${
            previewFormat === 'feed'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Feed
        </button>
        <button
          onClick={() => setPreviewFormat('stories')}
          className={`px-3 py-1 text-sm rounded ${
            previewFormat === 'stories'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Stories
        </button>
      </div>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 overflow-auto">
        <div
          style={{
            transform: 'scale(0.3)',
            transformOrigin: 'top left',
            width: previewFormat === 'feed' ? '3600px' : '3600px',
            height: previewFormat === 'feed' ? '3600px' : '6400px',
          }}
        >
          <InstagramCard
            titulo={titulo}
            resumo={resumo}
            imagem={imagem}
            categoria={categoria}
            autor={autor}
            format={previewFormat}
          />
        </div>
      </div>
    </div>
  );
};

export default InstagramCardPreview;

