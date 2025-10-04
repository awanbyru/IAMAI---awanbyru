
import React from 'react';

interface AdPlaceholderProps {
  width?: string;
  height?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width = "w-full", height = "h-64" }) => {
  return (
    <div className={`${width} ${height} bg-brand-accent rounded-lg flex items-center justify-center border-2 border-dashed border-brand-light/20`}>
      <span className="text-brand-light/50">Adsense Ad Unit</span>
    </div>
  );
};

export default AdPlaceholder;
