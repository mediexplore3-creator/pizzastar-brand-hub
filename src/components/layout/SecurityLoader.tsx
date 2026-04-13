'use client';

import { useEffect } from 'react';
import { initSecurity } from '@/lib/security';

export default function SecurityLoader() {
  useEffect(() => {
    initSecurity();
  }, []);

  return null;
}
