export interface ISolarPanelConfigs {
  panelsCount: number;
  yearlyEnergyDcKwh: number;
  roofSegmentSummaries: [
    {
      pitchDegrees: number;
      azimuthDegrees: number;
      panelsCount: number;
      yearlyEnergyDcKwh: number;
      segmentIndex: number;
    }
  ]
};

export interface ISolar {
  solarPanelConfigs: ISolarPanelConfigs[];
};

export interface ISolarSafe {
  panelsCount: number;
  yearlyEnergyDcKwh: number;
};