import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectShowcase } from './components/ProjectShowcase';
import { WorkflowSection } from './components/WorkflowSection';
import { Toolbox } from './components/Toolbox';
import { Testimonials } from './components/Testimonials';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('higgsfield');

  const handleSelectService = (serviceId) => {
    setPreselectedService(serviceId);
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-300">
      
      {/* Top Navigation */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
        onOpenEstimator={() => {
          const el = document.getElementById('estimator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero 
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        <ProjectShowcase 
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        <Services 
          onSelectService={handleSelectService}
        />

        <WorkflowSection />

        <Toolbox />

        <Testimonials />

        <ProjectEstimator 
          preselectedService={preselectedService}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Interactive Video & Workflow Modal */}
      {selectedProject && (
        <VideoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectScope={(cat) => handleSelectService(cat)}
        />
      )}

      {/* Professional Resume & ATS Modal */}
      {resumeOpen && (
        <ResumeModal 
          onClose={() => setResumeOpen(false)}
        />
      )}

    </div>
  );
}

export default App;
