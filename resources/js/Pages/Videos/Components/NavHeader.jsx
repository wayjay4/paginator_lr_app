import {Link} from "@inertiajs/react";

function NavHeader() {
    return (
        <>
            <header className="bg-blue-700 border-b flex rounded-b-lg">
                <h1 className="text-xl text-3x1 font-bold tracking-tight text-white p-6">Videos</h1>
                <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
                    <div className="flex gap-x-6">
                        <Link href={route('videos.page_links')}>
                            <div className="text-sm font-semibold leading-6 text-white">Page Links</div>
                        </Link>
                        <Link href={route('videos.load_button')}>
                            <div className="text-sm font-semibold leading-6 text-white">Load More Button</div>
                        </Link>
                        <Link href={route('videos.infinite_scroll')}>
                            <div className="text-sm font-semibold leading-6 text-white">Infinite Scrolling</div>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavHeader;
