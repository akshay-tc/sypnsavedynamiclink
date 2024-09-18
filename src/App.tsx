import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod|mobile/i.test(navigator.userAgent);
    console.log(navigator.userAgent);
    if (isMobile) {
      // Android redirection with intent URL
      if (/Android/i.test(navigator.userAgent)) {
        window.location.href = 'intent://mobile#Intent;scheme=https;package=com.sypnsave;end';
      } 
      // iOS redirection with custom scheme
      else if (/iPhone|iPad|iPod|mobile/i.test(navigator.userAgent)) {
        window.location.href = 'myapp://mobile';
      }

      // Fallback to store after timeout (for Android & iOS if app is not installed)
      setTimeout(() => {
        if (/Android/i.test(navigator.userAgent)) {
          window.location.href = 'https://play.google.com/store/apps/details?id=com.sypnsave';
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = 'https://apps.apple.com/us/app/your-app/id123456789';
        }
      }, 2000);

    }
  }, []);

  return (
    <>
      <h1>SypNSave Dynamic Link</h1>
    </>
  )
}

export default App
