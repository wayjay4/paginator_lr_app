import {Link} from "@inertiajs/react";
import ReactMarkdown from "react-markdown";

function NavHeader() {
    return (
        <><
            header className="dk:bg-indigo-600 border-b">
                <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
                    <div className="flex gap-x-6">
                        <Link href={route('videos.index_page_links')}>
                            <div className="text-sm font-semibold leading-6 text-white">Page Links</div>
                        </Link>
                        <Link href={route('videos.index_load_button')}>
                            <div className="text-sm font-semibold leading-6 text-white">Load More Button</div>
                        </Link>
                        <Link href={route('videos.index_infinite_scroll')}>
                            <div className="text-sm font-semibold leading-6 text-white">Infinite Scrolling</div>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavHeader;
