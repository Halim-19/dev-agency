
function Footer() {
    return (
        <footer className="pt-12 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-white/40">
                    © {new Date().getFullYear()} frameless Agency. All rights reserved.
                </div>
                <div className="flex items-center gap-6 text-sm text-white/40">
                    <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
                    <a href="#" className="hover:text-white/60 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white/60 transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer