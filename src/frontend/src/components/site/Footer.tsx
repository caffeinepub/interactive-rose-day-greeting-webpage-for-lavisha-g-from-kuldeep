import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/assets/generated/sonu-kuldeep-logo.dim_512x512.png" 
              alt="Sonu & Kuldeep"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Advancing cardiac diagnostics through deep learning and medical imaging research.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#overview" className="hover:text-foreground transition-colors">Overview</a></li>
              <li><a href="#dataset" className="hover:text-foreground transition-colors">Dataset</a></li>
              <li><a href="#pipeline" className="hover:text-foreground transition-colors">Pipeline</a></li>
              <li><a href="#results" className="hover:text-foreground transition-colors">Results</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Owners</h3>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium text-foreground">Sonu</span> & <span className="font-medium text-foreground">Kuldeep</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Website showcasing heart disease classification research using deep learning.
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026. Built with <Heart className="inline w-3 h-3 text-primary" fill="currentColor" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
