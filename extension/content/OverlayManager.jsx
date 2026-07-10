import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WidgetRegistry } from './components/WidgetRegistry';

const OverlayManager = () => {
  // We can manage global state for overlays here
  const [orbState, setOrbState] = useState('idle');
  const [activeHoverCard, setActiveHoverCard] = useState(null);

  return (
    <div className="w-full h-full pointer-events-none">
      <AnimatePresence>
        <WidgetRegistry.FloatingOrb key="orb" state={orbState} />
        <WidgetRegistry.SelectionToolbar key="toolbar" />
        {activeHoverCard && <WidgetRegistry.HoverCard key="hovercard" data={activeHoverCard} />}
      </AnimatePresence>
    </div>
  );
};

export default OverlayManager;
