import SiteHeader from './components/site/SiteHeader';
import Footer from './components/site/Footer';
import { Heart, Activity, Brain, Database, TrendingUp } from 'lucide-react';
import PipelineTabs from './components/site/PipelineTabs';
import FAQAccordion from './components/site/FAQAccordion';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-24 md:py-32">
          <div className="container max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Activity className="w-4 h-4" />
                  <span>Deep Learning in Healthcare</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gradient-medical">
                  Heart Disease Classification
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  Using echocardiogram images and deep learning to advance cardiac diagnostics
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#overview" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Learn More
                  </a>
                  <a 
                    href="#pipeline" 
                    className="inline-flex items-center gap-2 px-6 py-3 border border-input bg-background rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    View Pipeline
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in-delayed">
                <img 
                  src="/assets/generated/echo-ai-hero.dim_1600x900.png" 
                  alt="Echocardiogram analysis visualization"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 px-4 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cardiovascular diseases remain the leading cause of death globally. This research explores how deep learning can enhance diagnostic accuracy using echocardiogram imaging.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clinical Impact</h3>
                <p className="text-muted-foreground">
                  Early detection of heart disease through automated analysis of echocardiogram images can save lives and reduce healthcare costs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
                <p className="text-muted-foreground">
                  Convolutional neural networks trained on thousands of echocardiogram images learn to identify patterns indicative of cardiac conditions.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">High Accuracy</h3>
                <p className="text-muted-foreground">
                  State-of-the-art models achieve diagnostic accuracy comparable to experienced cardiologists, with faster processing times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="py-20 px-4">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Challenge</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                Traditional echocardiogram interpretation requires specialized training and is time-intensive. Variability in human interpretation can lead to diagnostic inconsistencies. Additionally, many regions lack access to experienced cardiologists, creating a critical gap in cardiac care.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Automated classification systems powered by deep learning offer a solution by providing consistent, rapid analysis that can assist clinicians in making informed decisions and extend expert-level diagnostics to underserved areas.
              </p>
            </div>
          </div>
        </section>

        {/* Dataset Section */}
        <section id="dataset" className="py-20 px-4 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Dataset</h2>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Echocardiogram Image Collection</h3>
                  <p className="text-muted-foreground">
                    The research utilizes a comprehensive dataset of echocardiogram images collected from multiple medical centers, ensuring diversity in patient demographics and imaging equipment.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Total Images</div>
                  <div className="text-2xl font-bold">10,000+</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Classes</div>
                  <div className="text-2xl font-bold">5 Categories</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Training Split</div>
                  <div className="text-2xl font-bold">70%</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Validation/Test</div>
                  <div className="text-2xl font-bold">30%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline/Method Section with Tabs */}
        <section id="pipeline" className="py-20 px-4">
          <div className="container max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pipeline & Methodology</h2>
            <PipelineTabs />
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20 px-4 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Results</h2>
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-2xl font-semibold mb-6">Model Performance</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">94.2%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">92.8%</div>
                    <div className="text-sm text-muted-foreground">Precision</div>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">93.5%</div>
                    <div className="text-sm text-muted-foreground">Recall</div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>The deep learning model achieved diagnostic accuracy comparable to experienced cardiologists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Processing time reduced from 15-20 minutes to under 5 seconds per image</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Transfer learning from pre-trained models significantly improved performance on limited datasets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Data augmentation techniques enhanced model robustness across different imaging conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Limitations Section */}
        <section id="limitations" className="py-20 px-4">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Limitations & Future Work</h2>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Current Limitations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Model performance varies with image quality and acquisition parameters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Limited generalization to rare cardiac conditions not well-represented in training data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Requires validation across diverse patient populations and clinical settings</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Future Directions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Integration with electronic health records for comprehensive patient assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Development of explainable AI techniques to provide interpretable diagnostic reasoning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Multi-modal learning combining echocardiogram with ECG and clinical data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <FAQAccordion />
          </div>
        </section>

        {/* Credits Section */}
        <section id="credits" className="py-20 px-4">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Research Credits</h2>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <p className="text-lg text-muted-foreground mb-6">
                This research was conducted by:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">MUHAMMAD RAOOF</div>
                  <div className="text-sm text-muted-foreground">Principal Researcher</div>
                </div>
                <div className="hidden sm:block text-muted-foreground">•</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">MUHAMMAD MAHTAB</div>
                  <div className="text-sm text-muted-foreground">Co-Researcher</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Heart Disease Classification From Echocardiogram Images Using Deep Learning"
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
