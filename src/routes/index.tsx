import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Home,
  Scheduling,
  WhoWeAre,
  WorkWithUs,
  RepresentationsAndPartnerships,
  TermOfUse,
  PrivacyPolicy,
  HelpCenter,
} from '../pages';

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agendamento" element={<Scheduling />} />
      <Route path="/quem-somos" element={<WhoWeAre />} />
      <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
      <Route
        path="/representacoes-e-parcerias"
        element={<RepresentationsAndPartnerships />}
      />
      <Route path="/termo-de-uso" element={<TermOfUse />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="/central-de-ajuda" element={<HelpCenter />} />
    </Routes>
  );
}
