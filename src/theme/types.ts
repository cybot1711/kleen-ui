declare module '@mui/material/styles/createPalette' {
  interface Palette {
    midnight: string
    gallery: string
    cta: string
    ctaHover: string
    greenPillText: string
    greenPillBg: string
    orangePillText: string
    orangePillBg: string
    grayPillBg: string
  }

  interface PaletteOptions {
    midnight?: string
    gallery?: string
    cta?: string
    ctaHover?: string
    greenPillText?: string
    greenPillBg?: string
    orangePillText?: string
    orangePillBg?: string
    grayPillBg?: string
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadow: string
    values: {
      maxContentWidth: number
    }
  }

  interface ThemeOptions {
    customShadow?: string
    values?: {
      maxContentWidth?: number
    }
  }
}

export {}
