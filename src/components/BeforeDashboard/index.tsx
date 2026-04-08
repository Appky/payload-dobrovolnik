import React from 'react'

const BeforeDashboard: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1.25rem 1.5rem',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #f0f5f0 0%, #e8f0e8 100%)',
      borderRadius: '0.5rem',
      borderLeft: '4px solid #2C5C57',
    }}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#DCE5BF" />
        <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#B7D0A5" transform="rotate(60 20 20)" />
        <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#7FAE96" transform="rotate(120 20 20)" />
        <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#2C5C57" transform="rotate(180 20 20)" />
        <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#7FAE96" transform="rotate(240 20 20)" />
        <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#B7D0A5" transform="rotate(300 20 20)" />
        <circle cx="20" cy="20" r="2" fill="#F2B7A8" />
      </svg>
      <div>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#2C5C57' }}>
          Vítejte v administraci dobrovolnik.cz
        </p>
        <p style={{ margin: '0.25rem 0 0', fontSize: '0.875rem', color: '#4a7a6a' }}>
          Zde spravujete obsah blogu — články, média a nastavení.
        </p>
      </div>
    </div>
  )
}

export default BeforeDashboard
