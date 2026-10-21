import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Home from './pages/Home';
import OrgDetail from './pages/OrgDetail';
import NotFound from './pages/NotFound';

// Lenis smooth scrolling and scroll restoration manager
function SmoothScrollManager() {
  const location = useLocation();
  const lenisRef = useRef(null);
  const isRestoringRef = useRef(false);

  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    const unsubscribe = lenis.on('scroll', ({ scroll }) => {
      if (isRestoringRef.current) return;
      if (window.location.pathname === '/') {
        sessionStorage.setItem('scroll_pos_/', String(Math.round(scroll)));
      }
    });

    return () => {
      unsubscribe();
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, []);

  // Handle route changes and scroll restoration
  useEffect(() => {
    if (location.pathname === '/') {
      const savedY = sessionStorage.getItem('scroll_pos_/');
      const lastOrgId = sessionStorage.getItem('last_viewed_org');

      if (savedY !== null) {
        const targetY = parseInt(savedY, 10);
        if (!isNaN(targetY) && targetY > 0) {
          isRestoringRef.current = true;
          const restore = () => {
            if (lenisRef.current) {
              lenisRef.current.scrollTo(targetY, { immediate: true });
            } else {
              window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
            }
          };

          restore();
          requestAnimationFrame(restore);
          const t1 = setTimeout(restore, 40);
          const t2 = setTimeout(restore, 100);
          const t3 = setTimeout(() => {
            restore();
            isRestoringRef.current = false;
          }, 200);

          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            isRestoringRef.current = false;
          };
        } else if (lastOrgId) {
          isRestoringRef.current = true;
          const restoreEl = () => {
            const el = document.getElementById(`org-card-${lastOrgId}`);
            if (el) {
              if (lenisRef.current) {
                lenisRef.current.scrollTo(el, { immediate: true, offset: -80 });
              } else {
                el.scrollIntoView({ behavior: 'instant', block: 'center' });
              }
            }
          };
          restoreEl();
          requestAnimationFrame(restoreEl);
          const t1 = setTimeout(restoreEl, 50);
          const t2 = setTimeout(() => {
            restoreEl();
            isRestoringRef.current = false;
          }, 200);

          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            isRestoringRef.current = false;
          };
        }
      }
    } else {
      // Subpages always open at top
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/org/:id" element={<OrgDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
