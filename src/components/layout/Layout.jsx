import ContactFab from "./contactFab/ContactFab";
import CursorFollower from "./cursorFollower/CursorFollower";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import ResumeButton from "./resumeButton/ResumeButton";



export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <CursorFollower/>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ResumeButton />
      <ContactFab />
    </div>
  );
}
