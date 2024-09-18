import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    // Detect if user is on a mobile device
    const isMobile = /Android|iPhone|iPad|iPod|mobile/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Check if the user is on an Android device
      if (/Android/i.test(navigator.userAgent)) {
        // Attempt to open the app using the custom URL scheme (for Android)
        window.location.href = 'intent://mobile#Intent;scheme=mobile;package=com.sypnsave;end';
      } 
      // Check if the user is on an iOS device
      else if (/iPhone|iPad|iPod|mobile/i.test(navigator.userAgent)) {
        // Attempt to open the app using the custom URL scheme (for iOS)
        window.location.href = 'mobile://mobile';
      }

      // If the app isn't installed, redirect to the app store (after a 2-second delay)
      setTimeout(() => {
        if (/Android/i.test(navigator.userAgent)) {
          // Redirect to Google Play Store for Android users
          window.location.href = 'https://play.google.com/store/apps/details?id=com.sypnsave';
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          // Redirect to Apple App Store for iOS users
          window.location.href = 'https://apps.apple.com/us/app/your-app/id123456789';
        }
      }, 2000);
    } 
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}
