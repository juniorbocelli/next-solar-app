import { ISolar, ISolarSafe } from '@/lib/@types/solar';

export const calculateCapacity = (solarPanelConfigs: ISolar): ISolarSafe => {
  let panelsCount = 0;
  let yearlyEnergyDcKwh = 0;

  for (const sp of solarPanelConfigs.solarPanelConfigs) {
    panelsCount = panelsCount + sp.panelsCount;
    yearlyEnergyDcKwh = yearlyEnergyDcKwh + sp.yearlyEnergyDcKwh;
  };

  return {
    panelsCount: panelsCount,
    yearlyEnergyDcKwh: yearlyEnergyDcKwh,
  };
};