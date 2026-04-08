import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <svg
        width="200"
        height="36"
        viewBox="0 0 268 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'inline-block' }}
      >
        <g transform="translate(4 4) scale(0.8)">
          <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#DCE5BF" />
          <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#B7D0A5" transform="rotate(60 20 20)" />
          <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#7FAE96" transform="rotate(120 20 20)" />
          <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#2C5C57" transform="rotate(180 20 20)" />
          <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#7FAE96" transform="rotate(240 20 20)" />
          <path d="M20 20 C20 14 23.2 10.8 27 11.2 C30.4 11.6 32.5 14.8 31.8 18.2 C31.1 21.9 27.6 24.5 23.8 23.8 L20 20 Z" fill="#B7D0A5" transform="rotate(300 20 20)" />
          <circle cx="20" cy="20" r="2" fill="#F2B7A8" />
        </g>
        <text x="49" y="28" fill="#2C5C57" fontFamily="Arial, Helvetica, sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.44">
          dobrovolnik.cz
        </text>
      </svg>
      <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--theme-elevation-400, #888)', margin: '0.5rem 0 0' }}>
        Administrační rozhraní
      </p>
    </div>
  )
}

export default BeforeLogin
