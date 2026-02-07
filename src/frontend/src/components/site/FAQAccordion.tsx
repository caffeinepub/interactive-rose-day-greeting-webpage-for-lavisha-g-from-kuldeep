import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
        <AccordionTrigger className="text-left hover:no-underline">
          What is an echocardiogram?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          An echocardiogram is an ultrasound imaging technique used to visualize the heart's structure and function. It provides real-time images of the heart chambers, valves, and blood flow, making it a crucial diagnostic tool for detecting various cardiac conditions.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
        <AccordionTrigger className="text-left hover:no-underline">
          How does deep learning improve diagnosis?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Deep learning models can automatically learn complex patterns in echocardiogram images that may be subtle or difficult for human observers to detect consistently. These models process images rapidly, provide objective assessments, and can assist clinicians by highlighting potential abnormalities, ultimately improving diagnostic accuracy and efficiency.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
        <AccordionTrigger className="text-left hover:no-underline">
          What cardiac conditions can the model detect?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          The model is trained to classify five major categories: normal heart function, coronary artery disease, cardiomyopathy, valvular heart disease, and congenital heart defects. Each category encompasses specific conditions that affect cardiac structure and function in distinct ways.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
        <AccordionTrigger className="text-left hover:no-underline">
          Is this system ready for clinical deployment?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          While the model demonstrates high accuracy in research settings, clinical deployment requires extensive validation, regulatory approval, and integration with existing healthcare workflows. The system is designed to assist clinicians, not replace them, and should be used as a decision support tool alongside professional medical judgment.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
        <AccordionTrigger className="text-left hover:no-underline">
          What are the computational requirements?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Training the model requires GPU acceleration (NVIDIA Tesla V100 or equivalent) and takes approximately 12-24 hours depending on dataset size. Inference (prediction on new images) is much faster, requiring only 2-5 seconds per image on standard hardware, making it practical for real-time clinical use.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
        <AccordionTrigger className="text-left hover:no-underline">
          How is patient privacy protected?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          All echocardiogram images used in this research were de-identified in accordance with HIPAA regulations and institutional review board protocols. No personally identifiable information is stored or processed by the model. Future clinical implementations would follow strict data protection standards and encryption protocols.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
