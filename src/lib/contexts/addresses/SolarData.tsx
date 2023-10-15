'use client'
import React from 'react';
// contexts
import { useAddresses } from '.';
// @types
import { ISolar } from '@/lib/@types/solar';
import { IAddress } from '@/lib/@types/address';

// ----------------------------------------------------------------------

interface SolarDataProps {
  solarData: ISolar | null;
  address: IAddress | null;
};

export default function SolarData(props: SolarDataProps) {
  return (<></>)
};