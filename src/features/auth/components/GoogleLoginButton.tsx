import React from 'react';

interface GoogleLoginButtonProps {
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick, loading = false, disabled = false }) => (
  <button
    type="button"
    className="flex items-center justify-center gap-2 font-semibold rounded-md transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 px-4 py-2 w-full shadow-md"
    onClick={onClick}
    disabled={loading || disabled}
    data-testid="google-login-btn"
  >
    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_17_40)">
        <path d="M47.5 24.5C47.5 22.8 47.3 21.2 47 19.7H24V28.3H37.3C36.7 31.2 34.8 33.6 32.1 35.1V40.1H39.7C44.1 36.1 47.5 30.9 47.5 24.5Z" fill="#4285F4"/>
        <path d="M24 48C30.5 48 35.9 45.9 39.7 40.1L32.1 35.1C30.1 36.3 27.7 37.1 24 37.1C17.7 37.1 12.2 32.9 10.3 27.3H2.4V32.5C6.2 40.1 14.4 48 24 48Z" fill="#34A853"/>
        <path d="M10.3 27.3C9.7 25.6 9.4 23.8 9.4 22C9.4 20.2 9.7 18.4 10.3 16.7V11.5H2.4C0.8 14.6 0 18.1 0 22C0 25.9 0.8 29.4 2.4 32.5L10.3 27.3Z" fill="#FBBC05"/>
        <path d="M24 9.9C27.9 9.9 30.7 11.5 32.3 13L39.8 6.1C35.9 2.5 30.5 0 24 0C14.4 0 6.2 7.9 2.4 15.5L10.3 20.7C12.2 15.1 17.7 9.9 24 9.9Z" fill="#EA4335"/>
      </g>
      <defs>
        <clipPath id="clip0_17_40">
          <rect width="48" height="48" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    {loading ? 'Cargando...' : 'Continuar con Google'}
  </button>
);

export default GoogleLoginButton; 