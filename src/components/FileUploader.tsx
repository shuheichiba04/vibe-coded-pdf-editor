import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from '../i18n';

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
  accept?: Record<string, string[]>;
  multiple?: boolean;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onFilesSelected,
  accept = { 'application/pdf': ['.pdf'] },
  multiple = true,
}) => {
  const t = useTranslation();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onFilesSelected,
    accept,
    multiple,
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed var(--color-primary)',
        borderRadius: '8px',
        padding: '40px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
        transition: 'background-color 0.3s',
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>{t.uploadAreaActive}</p>
      ) : (
        <div>
          <p>{t.uploadArea}</p>
          <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)' }}>
            {multiple ? t.uploadAreaMultiple : t.uploadAreaSingle}
          </p>
        </div>
      )}
    </div>
  );
};
