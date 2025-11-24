# 📄 Vibe coded PDF Editor

A modern, web-based PDF editor built with React and TypeScript. Edit PDFs directly in your browser with support for merging, adding images, and adding text.

**Live Demo:** [https://shuheichiba04.github.io/vibe-coded-pdf-editor/](https://shuheichiba04.github.io/vibe-coded-pdf-editor/)

## ✨ Features

- 🔗 **PDF Merge** - Combine multiple PDF files into one
- 🖼️ **Image Addition** - Add images to any page with drag-and-drop positioning
- ✏️ **Text Addition** - Add custom text with Japanese font support (Noto Sans JP)
- 💾 **Export** - Download your edited PDF
- 🌓 **Dark Mode** - Automatic dark mode based on system preferences
- 📱 **Mobile Responsive** - Optimized for mobile devices
- 🚀 **No Server Required** - All processing happens in your browser

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **pdf-lib** - PDF manipulation
- **pdfjs-dist** - PDF rendering
- **@pdf-lib/fontkit** - Custom font support

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shuheichiba04/vibe-coded-pdf-editor.git

# Navigate to project directory
cd vibe-coded-pdf-editor

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 📖 Usage

1. **Upload PDFs** - Click or drag-and-drop PDF files to upload
2. **Select File** - Click on a file card to select it for editing
3. **Merge PDFs** - Select multiple files and click "🔗 Merge PDFs"
4. **Add Images** - Click "🖼️ Add Image" and position the image on the page
5. **Add Text** - Click "✏️ Add Text" and customize text properties
6. **Export** - Click "💾 Export" to download your edited PDF
7. **Reset** - Click "🔄 Reset" to discard all edits

## 🎨 Design Features

- **CSS Variables** - Consistent design system
- **Card-based Layout** - Clean, modern interface
- **Emoji Icons** - Intuitive visual indicators
- **Smooth Transitions** - Polished user experience
- **Automatic Dark Mode** - Respects system color scheme preference

## 📂 Project Structure

```
pdf-editor/
├── src/
│   ├── components/
│   │   ├── PDFEditor.tsx      # Main editor component
│   │   ├── FileUploader.tsx   # File upload component
│   │   ├── PDFViewer.tsx      # PDF preview component
│   │   ├── ImagePositioner.tsx # Image positioning modal
│   │   └── TextPositioner.tsx  # Text positioning modal
│   ├── utils/
│   │   └── pdfUtils.ts         # PDF manipulation utilities
│   ├── App.tsx
│   ├── App.css
│   └── index.css
├── public/
│   ├── NotoSansJP-Regular.ttf  # Japanese font
│   └── .nojekyll                # GitHub Pages config
└── vite.config.ts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with ❤️ using:
- [pdf-lib](https://github.com/Hopding/pdf-lib)
- [PDF.js](https://github.com/mozilla/pdf.js)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

---

**Note:** All PDF processing is done entirely in your browser. No files are uploaded to any server.
