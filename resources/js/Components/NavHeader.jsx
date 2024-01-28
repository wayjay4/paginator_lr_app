import {Link} from "@inertiajs/react";
import ReactMarkdown from "react-markdown";

function NavHeader() {
    return (
        <><
            header className="dk:bg-indigo-600 border-b">
                <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
                    <div className="flex gap-x-6">
                        <Link href="/videos_plinks">
                            <div className="text-sm font-semibold leading-6 text-white">Links w/pages</div>
                        </Link>
                        <Link href="/videos_pscroll">
                            <div className="text-sm font-semibold leading-6 text-white">Load More Button</div>
                        </Link>
                        <Link href="/videos_pinfinitescroll">
                            <div className="text-sm font-semibold leading-6 text-white">Infinite Scrolling</div>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavHeader;
