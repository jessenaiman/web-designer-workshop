"use client";

import React, { createContext, useState } from 'react';

type DesignControlsState = {
  playing: boolean;
  text: string;
};

type DesignControlsContextType = {
  controls: DesignControlsState;
  setControls: React.Dispatch<React.SetStateAction<DesignControlsState>>;
  setPlaying: (playing: boolean) => void;
  setText: (text: string) => void;
  resetControls: () => void;
};

const defaultState: DesignControlsState = {
  playing: true,
  text: 'WebCraft',
};

export const DesignControlsContext = createContext<DesignControlsContextType | undefined>(undefined);

export function DesignControlsProvider({ children }: { children: React.ReactNode }) {
  const [controls, setControls] = useState<DesignControlsState>(defaultState);

  const setPlaying = (playing: boolean) => {
    setControls((prev) => ({ ...prev, playing }));
  };

  const setText = (text: string) => {
    setControls((prev) => ({ ...prev, text }));
  };

  const resetControls = () => {
    setControls(defaultState);
  };

  return (
    <DesignControlsContext.Provider value={{ controls, setControls, setPlaying, setText, resetControls }}>
      {children}
    </DesignControlsContext.Provider>
  );
}
