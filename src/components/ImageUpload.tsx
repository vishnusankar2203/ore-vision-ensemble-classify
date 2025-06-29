
import { useCallback, useState } from 'react';
import { Upload, FileImage } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = useCallback((files: FileList) => {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageUpload(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer hover:border-blue-400 ${
        dragActive ? 'border-blue-400 bg-blue-50/10' : 'border-white/30 hover:bg-white/5'
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => document.getElementById('file-input')?.click()}
    >
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
        className="hidden"
      />
      
      <div className="space-y-4">
        <div className="flex justify-center">
          {dragActive ? (
            <FileImage className="h-16 w-16 text-blue-400" />
          ) : (
            <Upload className="h-16 w-16 text-blue-300" />
          )}
        </div>
        
        <div>
          <p className="text-lg font-medium text-white mb-2">
            {dragActive ? 'Drop your ore sample here' : 'Upload ore sample image'}
          </p>
          <p className="text-sm text-blue-200">
            Drag and drop or click to select • JPG, PNG, WebP supported
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
