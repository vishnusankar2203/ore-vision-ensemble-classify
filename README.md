# 🪨 Ore Classification System

A modern web application for AI-powered ore sample classification using advanced CNN ensemble techniques. This system provides real-time analysis of mineral samples with detailed predictions and confidence scoring.

![Ore Classification System](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?logo=tailwind-css)

## ✨ Features

### 🔬 Advanced AI Classification
- **CNN Ensemble Model**: Combines VGG16, Xception, and DenseNet architectures
- **Transfer Learning**: Leverages pre-trained models for enhanced accuracy
- **Feature Fusion**: Optimized techniques for improved classification performance
- **Real-time Analysis**: Instant processing with detailed confidence scoring

### 🎯 Supported Ore Types
The system can classify 7 different types of minerals:
- **Biotite** - Dark mica mineral
- **Bornite** - Copper iron sulfide
- **Chrysocolla** - Hydrated copper silicate
- **Malachite** - Green copper carbonate
- **Muscovite** - Light-colored mica
- **Pyrite** - Iron sulfide ("fool's gold")
- **Quartz** - Silicon dioxide

### 🎨 Modern User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Beautiful UI**: Modern glassmorphism design with Tailwind CSS
- **Interactive Elements**: Drag-and-drop image upload, progress indicators
- **Real-time Feedback**: Live processing status and results display

### 📊 Detailed Analytics
- **Confidence Scoring**: Percentage-based confidence levels
- **Ensemble Breakdown**: Individual model performance scores
- **Processing Time**: Performance metrics for each analysis
- **Detailed Explanations**: AI reasoning behind classifications

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ore-vision-ensemble-classify.git
   cd ore-vision-ensemble-classify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in terminal)

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.1** - Fast build tool and development server

### UI Components
- **Radix UI** - Accessible, unstyled UI primitives
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Shadcn/ui** - High-quality component library

### Additional Libraries
- **React Router DOM** - Client-side routing
- **React Hook Form** - Performant forms with validation
- **Zod** - TypeScript-first schema validation
- **Recharts** - Composable charting library
- **Sonner** - Toast notifications

## 📁 Project Structure

```
ore-vision-ensemble-classify/
├── public/                 # Static assets
│   ├── favicon.svg        # Application favicon
│   ├── ore-logo.svg       # Main logo
│   └── placeholder.svg    # Image placeholder
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── ImageUpload.tsx
│   │   ├── OreInformation.tsx
│   │   ├── OreLogo.tsx
│   │   └── PredictionResults.tsx
│   ├── pages/            # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── types/            # TypeScript type definitions
│   │   └── prediction.ts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎮 Usage

### Uploading Samples
1. **Drag & Drop**: Simply drag an image file onto the upload area
2. **Click to Browse**: Click the upload area to select a file from your device
3. **Supported Formats**: JPG, PNG, WebP images are supported

### Viewing Results
1. **Classification**: See the predicted ore type with confidence percentage
2. **Ensemble Scores**: View individual model performance (VGG16, Xception, DenseNet)
3. **Processing Time**: Check how long the analysis took
4. **Detailed Information**: Learn about the classified mineral's properties

### Understanding Confidence Levels
- **Very High (90%+)**: Green indicator - Highly confident prediction
- **High (75-89%)**: Blue indicator - Confident prediction
- **Moderate (60-74%)**: Yellow indicator - Reasonably confident
- **Low (<60%)**: Orange indicator - Lower confidence

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Run linting
npm run lint

# Preview production build
npm run preview
```

### Code Style
- **ESLint**: Configured for React and TypeScript
- **Prettier**: Code formatting (if configured)
- **TypeScript**: Strict type checking enabled

### Adding New Features
1. Create components in `src/components/`
2. Add types in `src/types/`
3. Update routing in `src/App.tsx`
4. Test thoroughly before committing

## 🧪 AI Model Information

### Ensemble Architecture
The system uses a sophisticated ensemble of three CNN models:

1. **VGG16**: Deep convolutional network with 16 layers
2. **Xception**: Efficient CNN using depthwise separable convolutions
3. **DenseNet**: Densely connected convolutional network

### Feature Fusion
- Combines features from multiple layers
- Optimized weighting for each model
- Ensures robust and accurate predictions

### Transfer Learning
- Pre-trained on ImageNet dataset
- Fine-tuned for mineral classification
- Reduces training time and improves accuracy

## 🎨 Customization

### Styling
- **Tailwind CSS**: Modify `tailwind.config.ts` for theme changes
- **Components**: Update UI components in `src/components/ui/`
- **Colors**: Adjust color scheme in CSS variables

### Adding New Ore Types
1. Update the ore types array in `src/pages/Index.tsx`
2. Add ore information in `src/components/OreInformation.tsx`
3. Update the AI model to recognize new classes

## 📈 Performance

### Optimization Features
- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Efficient image handling
- **Lazy Loading**: Components loaded on demand

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: Responsive design for all screen sizes
- **Progressive Enhancement**: Works without JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



**Made with ❤️ for the geological and mining community**
"# ore-vision-ensemble-classify" 
#
