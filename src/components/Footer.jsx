function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <img
                                src="/assets/logo-text.png"
                                alt="DevStack logo"
                                className="h-7 w-auto"
                            />
                        </div>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="mt-5 flex gap-5 text-sm text-slate-700">
                            <a href="#" className="transition hover:text-pink-500">
                                GitHub
                            </a>

                            <a href="#" className="transition hover:text-pink-500">
                                Twitter
                            </a>

                            <a href="#" className="transition hover:text-pink-500">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                            Product
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-slate-500">
                            <a href="#home" className="block hover:text-pink-500">
                                Home
                            </a>

                            <a href="#technologies" className="block hover:text-pink-500">
                                Technologies
                            </a>

                            <a href="#projects" className="block hover:text-pink-500">
                                Projects
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                            Company
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-slate-500">
                            <a href="#about" className="block hover:text-pink-500">
                                About
                            </a>

                            <a href="#contact" className="block hover:text-pink-500">
                                Contact
                            </a>

                            <a href="#" className="block hover:text-pink-500">
                                Careers
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                            Legal
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-slate-500">
                            <a href="#" className="block hover:text-pink-500">
                                Privacy Policy
                            </a>

                            <a href="#" className="block hover:text-pink-500">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 DevStack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-pink-500">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-pink-500">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;