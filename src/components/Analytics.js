import React, { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Add the Google Analytics script dynamically
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-X4C3WEWV1Z';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-X4C3WEWV1Z');
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts if needed
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null; // This component does not render anything
};

export default Analytics;