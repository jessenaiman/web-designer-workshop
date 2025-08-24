import { useContext } from 'react';
import { DesignControlsContext } from '@/components/design/design-controls-context';

export const useDesignControls = () => {
  const context = useContext(DesignControlsContext);
  if (!context) {
    throw new Error('useDesignControls must be used within a DesignControlsProvider');
  }
  return context;
};
