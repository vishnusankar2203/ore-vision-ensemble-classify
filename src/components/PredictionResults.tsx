import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, Clock, RotateCcw } from 'lucide-react';
import { PredictionResult } from '@/types/prediction';
import OreLogo from './OreLogo';
import OreInformation from './OreInformation';

interface PredictionResultsProps {
  image: string;
  isAnalyzing: boolean;
  results: PredictionResult | null;
  onReset: () => void;
}

const PredictionResults = ({ image, isAnalyzing, results, onReset }: PredictionResultsProps) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-400';
    if (confidence >= 0.75) return 'text-blue-400';
    if (confidence >= 0.6) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 0.9) return 'Very High';
    if (confidence >= 0.75) return 'High';
    if (confidence >= 0.6) return 'Moderate';
    return 'Low';
  };

  return (
    <div className="space-y-8">
      {/* Header with Reset Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Analysis Results</h2>
        <Button 
          onClick={onReset}
          variant="outline"
          className="bg-white/10 border-white/30 text-white hover:bg-white/20"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          New Analysis
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image Display */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Uploaded Sample</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square bg-white/5 rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt="Ore sample" 
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        <div className="space-y-6">
          {isAnalyzing ? (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <OreLogo size={20} className="animate-pulse" />
                  Analyzing Sample
                </CardTitle>
                <CardDescription className="text-blue-200">
                  CNN ensemble processing in progress...
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-blue-200">
                    <span>VGG16 Analysis</span>
                    <span>Processing...</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-blue-200">
                    <span>Xception Analysis</span>
                    <span>Processing...</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-blue-200">
                    <span>DenseNet Analysis</span>
                    <span>Processing...</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ) : results && (
            <>
              {/* Main Prediction */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <ArrowUp className="h-5 w-5 text-green-400" />
                    Classification Result
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <h3 className="text-3xl font-bold text-white">{results.predictedClass}</h3>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-lg font-semibold ${getConfidenceColor(results.confidence)}`}>
                        {(results.confidence * 100).toFixed(1)}%
                      </span>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {getConfidenceLabel(results.confidence)} Confidence
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress value={results.confidence * 100} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Ensemble Scores */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Model Ensemble Scores</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200">VGG16</span>
                      <span className="text-white font-medium">
                        {(results.ensembleScores.vgg16 * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={results.ensembleScores.vgg16 * 100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200">Xception</span>
                      <span className="text-white font-medium">
                        {(results.ensembleScores.xception * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={results.ensembleScores.xception * 100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200">DenseNet</span>
                      <span className="text-white font-medium">
                        {(results.ensembleScores.densenet * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={results.ensembleScores.densenet * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Processing Time */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-200">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Processing Time</span>
                    </div>
                    <span className="text-white font-medium">
                      {results.processingTime.toFixed(1)}s
                    </span>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>

      {/* Detailed Analysis */}
      {results && !isAnalyzing && (
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Analysis Explanation</CardTitle>
              <CardDescription className="text-blue-200">
                How the AI model reached this conclusion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 leading-relaxed">
                {results.explanation}
              </p>
            </CardContent>
          </Card>

          <OreInformation oreName={results.predictedClass} />
        </div>
      )}
    </div>
  );
};

export default PredictionResults;
