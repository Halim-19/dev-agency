'use client'

import { motion } from "framer-motion"

interface DesktopMockupProps {
    children: React.ReactNode;
}

const DesktopMockup: React.FC<DesktopMockupProps> = ({ children }) => {
    // 1366x768 is approximately 16:9 aspect ratio (1366/768 ≈ 1.78)
    const imageAspectRatio = 1366 / 768; // ≈ 1.78 (16:9)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
        >
            {/* The Monitor Case - Optimized for 1366x768 */}
            <div className="w-full max-w-4xl bg-linear-to-br from-gray-900 to-black shadow-2xl relative flex flex-col overflow-hidden group rounded-[2rem] border-8 border-gray-800">

                {/* Screen Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Inner Screen Area - Fixed 16:9 ratio for 1366x768 */}
                <div
                    className="relative w-full"
                    style={{
                        aspectRatio: `${imageAspectRatio}`,
                        paddingBottom: `${(1 / imageAspectRatio) * 100}%`
                    }}
                >
                    <div className="absolute inset-0 m-2 bg-linear-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-700/50 shadow-inner">
                        {/* Dynamic Content Container */}
                        <div className="absolute inset-0 overflow-hidden">
                            {children}
                        </div>
                    </div>
                </div>

                {/* Physical Monitor Buttons - Bottom Bezel */}
                <div className="h-8 w-full bg-linear-to-b from-gray-900 to-black flex justify-center items-center gap-4 px-8 border-t border-gray-800">
                    {/* Camera */}
                    <div className="w-2 h-2 rounded-full bg-gray-700/50"></div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                    </div>

                    {/* Power LED */}
                    <div className="w-2 h-2 rounded-full bg-linear-to-br from-blue-400/50 to-blue-600/50 shadow-[0_0_6px_rgba(59,130,246,0.3)] ml-auto"></div>
                </div>
            </div>

            {/* Monitor Neck */}
            <div className="w-16 h-6 bg-linear-to-b from-gray-800 to-black shadow-inner"></div>

            {/* Monitor Stand Base */}
            <div className="w-48 h-3 bg-linear-to-b from-gray-900 to-black rounded-t-xl shadow-lg relative">
                {/* Accent Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </div>
        </motion.div>
    );
};

export default DesktopMockup;