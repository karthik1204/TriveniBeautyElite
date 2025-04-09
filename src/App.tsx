import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Banner />
        <Services />
        <AppointmentForm />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;