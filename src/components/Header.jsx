import Navigation from './UI/Navigation';
import '../styles/Header.css';

export default function Header() {
  return (
    <Navigation
      links={[
        { title: 'About Me', path: '/' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume', path: '/resume' },
      ]}
    />
  );
}
