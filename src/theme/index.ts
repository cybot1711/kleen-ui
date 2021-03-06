import { createTheme } from '@mui/material/styles'

import { type Theme, Typography, Grid, Skeleton, type Breakpoint } from '@mui/material'

export const customTheme = {
  palette: {
    midnight: '#253648',
    gallery: '#F7F7F8',
    cta: '#0F81A3',
    ctaHover: '#66AEC5',
    greenPillText: '#15693B',
    greenPillBg: '#DDF9EA',
    orangePillText: '#764C25',
    orangePillBg: '#FDEFE2',
    grayPillBg: '#EEEFF1',
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'] as Breakpoint[],
    values: { xs: 0, sm: 375, md: 768, lg: 1028, xl: 1280 },
  },
  spacing: (multiplier: number): number => {
    switch (multiplier) {
      case 1:
        return 4
      case 2:
        return 8
      case 3:
        return 10
      case 4:
        return 16
      case 5:
        return 24
      default:
        return 4
    }
  },
  customShadow: '0 0.5rem 0.75rem rgba(0,0,0,0.16)',
  customShadowRaised: '0 0.95rem 1rem rgba(0,0,0,0.16)',
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
  },
  values: {
    maxContentWidth: 1120,
    minContentWidthMd: 1120,
    minContentWidthSm: 768,
    minContentWidthXs: 375,
  },
} as const

export const theme = createTheme(customTheme)

export { type Theme, Typography, Grid, Skeleton }
