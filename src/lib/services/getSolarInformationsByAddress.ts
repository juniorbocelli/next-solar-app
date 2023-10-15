import { ISolar } from '@/lib/@types/solar';
import { GOOGLE_API_KEY } from '@/config-global';

// ----------------------------------------------------------------------

export async function getSolarInformationsByAddress(lat: number, lng: number): Promise<ISolar | null> {
  const response = await fetch(`https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=IMAGERY_QUALITY_UNSPECIFIED&key=${GOOGLE_API_KEY}`);
  const data = await response.json();
  
  if (!data)
    return null

  if (typeof data.solarPotential === "undefined")
    return null;

  return { solarPanelConfigs: data.solarPotential.solarPanelConfigs };
};