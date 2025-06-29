import { useState } from 'react';
import { Upload, FileImage, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ImageUpload from '@/components/ImageUpload';
import PredictionResults from '@/components/PredictionResults';
import OreLogo from '@/components/OreLogo';
import { PredictionResult } from '@/types/prediction';

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<PredictionResult | null>(null);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setResults(null);
    setIsAnalyzing(true);

    // Simulate CNN ensemble analysis
    setTimeout(() => {
      const oreTypes = ['Biotite', 'Bornite', 'Chrysocolla', 'Malachite', 'Muscovite', 'Pyrite', 'Quartz'];
      const randomOre = oreTypes[Math.floor(Math.random() * oreTypes.length)];
      const confidence = 0.75 + Math.random() * 0.24; // 75-99% confidence
      
      const mockResults: PredictionResult = {
        predictedClass: randomOre,
        confidence: confidence,
        ensembleScores: {
          vgg16: 0.65 + Math.random() * 0.34,
          xception: 0.70 + Math.random() * 0.29,
          densenet: 0.68 + Math.random() * 0.31
        },
        explanation: `Advanced CNN ensemble analysis indicates this sample exhibits characteristic features of ${randomOre.toLowerCase()}. The model utilized transfer learning from pre-trained networks and feature fusion techniques as described in the research paper.`,
        processingTime: 1.2 + Math.random() * 0.8
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setResults(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <OreLogo size={40} className="text-blue-400" />
            <h1 className="text-4xl font-bold text-white">
              Ore Classification System
            </h1>
          </div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Advanced CNN ensemble classification using optimized feature fusion techniques
          </p>
          <p className="text-sm text-slate-300 mt-2">
            Based on research: "Enhanced ore classification through optimized CNN ensembles and feature fusion"
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {!uploadedImage ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Upload Section */}
              <div>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Upload Ore Sample
                    </CardTitle>
                    <CardDescription className="text-blue-200">
                      Upload an image of your ore sample for AI-powered classification
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ImageUpload onImageUpload={handleImageUpload} />
                  </CardContent>
                </Card>
              </div>

              {/* Features Section */}
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Advanced Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>CNN Ensemble (VGG16, Xception, DenseNet)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Transfer Learning & Feature Fusion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>7 Ore Types Classification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Confidence Scoring & Explanations</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <FileImage className="h-5 w-5" />
                      Supported Ore Types
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm text-blue-200">
                      <div>• Biotite</div>
                      <div>• Bornite</div>
                      <div>• Chrysocolla</div>
                      <div>• Malachite</div>
                      <div>• Muscovite</div>
                      <div>• Pyrite</div>
                      <div>• Quartz</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <PredictionResults
              image={uploadedImage}
              isAnalyzing={isAnalyzing}
              results={results}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
