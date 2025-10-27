export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#7928ca',
    background: '#FFF',
    surface: '#F5F5F5',
    text: '#2E2E2E',
    textSecondary: '#666666',
    error: '#FF0000'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    circle: '50%'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  typography: {
    fontFamily: {
      sans: 'Roboto'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem'
    },
    fontWeight: {
      base: 400,
      medium: 500,
      semibold: 700,
      bold: 800
    }
  }
} as const;

export type theme = typeof theme;