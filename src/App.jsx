import React from 'react';
import Layout from './components/Layout';
import StatsRow from './components/StatsRow';
import ChartsRow from './components/ChartsRow';
import ActivitySection from './components/ActivitySection';

function App() {
  return (
    <Layout>
      <div className="dashboard-grid">
        {/* Row 1: Stats Cards */}
        <StatsRow />

        {/* Row 2: Charts */}
        <ChartsRow />

        {/* Row 3: Activity & Actions */}
        <ActivitySection />
      </div>
    </Layout>
  );
}

export default App;
