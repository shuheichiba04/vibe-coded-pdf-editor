// Simple i18n implementation
const translations = {
  en: {
    title: 'Vibe coded PDF Editor',
    subtitle: 'Merge PDFs, add images, and add text with ease',
    uploadArea: 'Drag & drop PDF files, or click to select',
    uploadAreaActive: 'Drop files here...',
    uploadAreaMultiple: 'Multiple files allowed',
    uploadAreaSingle: 'Single file only',
    loadedFiles: 'Loaded Files',
    mergePdf: 'Merge PDFs',
    addImage: 'Add Image',
    addText: 'Add Text',
    export: 'Export',
    reset: 'Reset',
    delete: 'Delete',
    preview: 'Preview',
    editingStatus: 'Editing: Changes saved (click Export to download)',
    selectPdfFile: 'Please select a PDF file',
    previousPage: 'Previous',
    nextPage: 'Next',
    
    // Alerts
    alertMergeNeed2Files: 'Need at least 2 PDF files to merge',
    alertSelectPdfForImage: 'Please select a PDF file',
    alertSelectPdfForText: 'Please select a PDF file',
    alertNoEdits: 'No edits to export',
    alertResetConfirm: 'Discard all edits?',
    alertMergeComplete: 'PDF merge complete (click Export to download)',
    alertMergeError: 'PDF merge failed',
    alertImageComplete: 'Image added successfully',
    alertImageError: 'Failed to add image',
    alertTextComplete: 'Text added successfully',
    alertTextError: 'Failed to add text',
    alertExportComplete: 'PDF exported successfully',
  },
  ja: {
    title: 'Vibe coded PDF Editor',
    subtitle: 'PDFの結合・画像追加・テキスト追加が簡単にできます',
    uploadArea: 'PDFファイルをドラッグ&ドロップ、またはクリックして選択',
    uploadAreaActive: 'ファイルをここにドロップ...',
    uploadAreaMultiple: '複数ファイル選択可能',
    uploadAreaSingle: '単一ファイルのみ',
    loadedFiles: '読み込み済みファイル',
    mergePdf: 'PDFを結合',
    addImage: '画像を追加',
    addText: 'テキストを追加',
    export: 'エクスポート',
    reset: 'リセット',
    delete: '削除',
    preview: 'プレビュー',
    editingStatus: '編集中: 変更が保存されています（エクスポートボタンでダウンロードできます）',
    selectPdfFile: 'PDFファイルを選択してください',
    previousPage: '前のページ',
    nextPage: '次のページ',
    
    // Alerts
    alertMergeNeed2Files: '結合するには2つ以上のPDFファイルが必要です',
    alertSelectPdfForImage: 'PDFファイルを選択してください',
    alertSelectPdfForText: 'PDFファイルを選択してください',
    alertNoEdits: '編集内容がありません',
    alertResetConfirm: '編集内容をリセットしますか？',
    alertMergeComplete: 'PDFの結合が完了しました（エクスポートボタンでダウンロードできます）',
    alertMergeError: 'PDF結合に失敗しました',
    alertImageComplete: '画像の追加が完了しました',
    alertImageError: '画像の追加に失敗しました',
    alertTextComplete: 'テキストの追加が完了しました',
    alertTextError: 'テキストの追加に失敗しました',
    alertExportComplete: 'PDFのエクスポートが完了しました',
  },
};

// Detect browser language
const getBrowserLanguage = (): 'en' | 'ja' => {
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith('ja')) {
    return 'ja';
  }
  return 'en';
};

export const useTranslation = () => {
  const lang = getBrowserLanguage();
  return translations[lang];
};
