import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Cpu, BarChart3 } from 'lucide-react';

export default function PipelineTabs() {
  return (
    <Tabs defaultValue="preprocessing" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="preprocessing" className="flex items-center gap-2">
          <Upload className="w-4 h-4" />
          <span className="hidden sm:inline">Preprocessing</span>
          <span className="sm:hidden">Data</span>
        </TabsTrigger>
        <TabsTrigger value="model" className="flex items-center gap-2">
          <Cpu className="w-4 h-4" />
          <span className="hidden sm:inline">Model</span>
          <span className="sm:hidden">Model</span>
        </TabsTrigger>
        <TabsTrigger value="evaluation" className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          <span className="hidden sm:inline">Evaluation</span>
          <span className="sm:hidden">Results</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="preprocessing" className="space-y-6">
        <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Data Preprocessing</h3>
              <p className="text-muted-foreground">
                Preparing echocardiogram images for optimal model training and inference.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Image Normalization</h4>
              <p className="text-sm text-muted-foreground">
                Standardizing pixel intensity values across all images to ensure consistent input distribution.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Resizing & Cropping</h4>
              <p className="text-sm text-muted-foreground">
                Uniform image dimensions (224×224 pixels) while preserving critical cardiac structures.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Data Augmentation</h4>
              <p className="text-sm text-muted-foreground">
                Rotation, flipping, and brightness adjustments to increase dataset diversity and model robustness.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Quality Filtering</h4>
              <p className="text-sm text-muted-foreground">
                Automated removal of low-quality or corrupted images that could negatively impact training.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="model" className="space-y-6">
        <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Deep Learning Architecture</h3>
              <p className="text-muted-foreground">
                Convolutional neural network designed for medical image classification.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Base Architecture</h4>
              <p className="text-sm text-muted-foreground">
                ResNet-50 pre-trained on ImageNet, providing robust feature extraction capabilities.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Transfer Learning</h4>
              <p className="text-sm text-muted-foreground">
                Fine-tuning pre-trained weights on echocardiogram dataset for domain-specific learning.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Custom Classification Head</h4>
              <p className="text-sm text-muted-foreground">
                Fully connected layers with dropout regularization for 5-class cardiac condition classification.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Training Strategy</h4>
              <p className="text-sm text-muted-foreground">
                Adam optimizer with learning rate scheduling, batch size 32, trained for 100 epochs with early stopping.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="evaluation" className="space-y-6">
        <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Model Evaluation</h3>
              <p className="text-muted-foreground">
                Comprehensive assessment of model performance and clinical applicability.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Performance Metrics</h4>
              <p className="text-sm text-muted-foreground">
                Accuracy, precision, recall, F1-score, and AUC-ROC curves for each cardiac condition class.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Confusion Matrix Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Detailed breakdown of correct classifications and common misclassification patterns.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Cross-Validation</h4>
              <p className="text-sm text-muted-foreground">
                5-fold cross-validation ensuring model generalization across different data subsets.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">Clinical Validation</h4>
              <p className="text-sm text-muted-foreground">
                Comparison with cardiologist diagnoses on held-out test set demonstrating clinical viability.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
