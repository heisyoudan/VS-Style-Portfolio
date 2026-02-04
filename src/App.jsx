import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ActivityBar from './components/Sidebar/ActivityBar';
import Explorer from './components/Sidebar/Explorer';
import EditorArea from './components/Editor/EditorArea';
import StatusBar from './components/Status/StatusBar';
import MobileHeader from './components/Navigation/MobileHeader'; // Import new component
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';
import Skills from './pages/Skills';


const App = () => {
    // Files configuration list
    const files = [
        { name: 'Home.jsx', component: Home, type: 'file', lineCount: 24 },
        { name: 'About.jsx', component: About, type: 'file', lineCount: 45 },
        { name: 'Projects.jsx', component: Projects, type: 'file', lineCount: 65 },
        { name: 'Timeline.jsx', component: Timeline, type: 'file', lineCount: 35 },
        { name: 'Skills.jsx', component: Skills, type: 'file', lineCount: 35 },

    ];

    const [activeFile, setActiveFile] = useState(files[0]);
    const [openFiles, setOpenFiles] = useState([files[0]]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSelectFile = (file) => {
        if (!openFiles.find(f => f.name === file.name)) {
            setOpenFiles([...openFiles, file]);
        }
        setActiveFile(file);
        // If mobile, close menu after selection
        if (isMobile) {
            setIsMobileMenuOpen(false);
        }
    };

    const handleCloseFile = (file) => {
        const newOpenFiles = openFiles.filter(f => f.name !== file.name);
        setOpenFiles(newOpenFiles);
        if (activeFile.name === file.name) {
            setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[newOpenFiles.length - 1] : null);
        }
    };

    const handleNavigate = (fileName) => {
        const file = files.find(f => f.name === fileName);
        if (file) {
            handleSelectFile(file);
        }
    };

    return (
        <LanguageProvider>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100vw',
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-primary)',
                overflow: 'hidden',
                position: 'relative' // For absolute positioning of mobile overlay
            }}>

                {/* Mobile Header (Only visible on Mobile) */}
                {isMobile && (
                    <MobileHeader
                        activeFileName={activeFile ? activeFile.name : 'Portfolio'}
                        onOpenMenu={() => setIsMobileMenuOpen(true)}
                    />
                )}

                <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
                    {/* Desktop Sidebar (Hidden on Mobile) */}
                    {!isMobile && (
                        <div style={{ display: 'flex', backgroundColor: 'var(--sidebar-bg)' }}>
                            <ActivityBar />
                            <Explorer
                                files={files}
                                onSelectFile={handleSelectFile}
                                activeFile={activeFile}
                            />
                        </div>
                    )}

                    {/* Mobile Menu Overlay */}
                    {isMobile && isMobileMenuOpen && (
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            zIndex: 999,
                            backgroundColor: 'rgba(0,0,0,0.5)', // Dim background
                            display: 'flex'
                        }} onClick={() => setIsMobileMenuOpen(false)}>
                            <div
                                style={{ height: '100%', display: 'flex', boxShadow: '5px 0 15px rgba(0,0,0,0.5)' }}
                                onClick={(e) => e.stopPropagation()} // Stop click from closing menu
                            >
                                <ActivityBar />
                                <Explorer
                                    files={files}
                                    onSelectFile={handleSelectFile}
                                    activeFile={activeFile}
                                />
                            </div>
                        </div>
                    )}

                    {/* Main Editor Area */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
                        {/* We need to pass isMobile to EditorArea maybe? Or just rely on CSS hide-on-mobile. 
                             Actually, EditorArea has TabBar which might be redundant with MobileHeader on mobile?
                             The user didn't ask to remove TabBar but MobileHeader + TabBar consumes space.
                             Let's keep TabBar for now as it allows switching open files easily. 
                             The MobileHeader is mainly for opening the Menu.
                          */}
                        <EditorArea
                            activeFile={activeFile}
                            openFiles={openFiles}
                            onCloseFile={handleCloseFile}
                            onSelectFile={handleSelectFile}
                            onNavigate={handleNavigate}
                        />
                    </div>
                </div>

                <StatusBar />
            </div>
        </LanguageProvider>
    );
};

export default App;
