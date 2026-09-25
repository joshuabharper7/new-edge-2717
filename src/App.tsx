import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TracksGrid } from './components/TracksGrid';
import { DiscipleshipPathway } from './components/DiscipleshipPathway';
import { GospelCallout } from './components/GospelCallout';
import { StatementOfFaith } from './components/StatementOfFaith';
import { MentorshipQuiz } from './components/MentorshipQuiz';
import { BudgetOverview } from './components/BudgetOverview';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { IntakeModal } from './components/IntakeModal';
import type { ModalTab, TrackId } from './types';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<ModalTab>('mentee');
  const [modalTrack, setModalTrack] = useState<TrackId>('mens');

  const handleOpenModal = (tab: ModalTab = 'mentee', trackId: TrackId = 'mens') => {
    setModalTab(tab);
    setModalTrack(trackId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#11161B] text-[#FDFBF7] selection:bg-[#B66D44] selection:text-[#FDFBF7]">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Ministry Tracks Grid (3 Cards) */}
        <TracksGrid onOpenModal={handleOpenModal} />

        {/* The Discipleship Pathway (4-Step Process) */}
        <DiscipleshipPathway />

        {/* Gospel Callout / Why We Exist */}
        <GospelCallout onOpenModal={handleOpenModal} />

        {/* Statement of Faith Accordion */}
        <StatementOfFaith />

        {/* Interactive Readiness Assessment Quiz */}
        <MentorshipQuiz onOpenModal={handleOpenModal} />

        {/* Governance & Stewardship Transparency */}
        <BudgetOverview />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Dual-Tab Intake Modal */}
      <IntakeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={modalTab}
        defaultTrack={modalTrack}
      />
    </div>
  );
}

export default App;
