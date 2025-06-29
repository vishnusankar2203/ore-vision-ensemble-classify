
export interface PredictionResult {
  predictedClass: string;
  confidence: number;
  ensembleScores: {
    vgg16: number;
    xception: number;
    densenet: number;
  };
  explanation: string;
  processingTime: number;
}
