import Navigation from './UI/Navigation';
import '../styles/Header.css';

export default function Header() {
  return (
    <Navigation
    // Pass paths and titles to the navigation component
      links={[
        { title: 'About Me', path: '/' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume', path: '/resume' },
      ]}
    />
  );
}
