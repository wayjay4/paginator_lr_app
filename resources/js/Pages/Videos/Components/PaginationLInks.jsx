import {Link} from "@inertiajs/react";
import ReactMarkdown from 'react-markdown';

function PaginationLinks({links}) {
    let counter = 1;

    return (
        <div className={'pagination-links-container'}>
            {links.map((link) => {
                if (link.url) {
                    return (<Link key={counter++} href={link.url}>
                        <div className={link.active === true ? 'active-link' : ''}>
                            <ReactMarkdown children={link.label}/>
                        </div>
                    </Link>)
                }
                else {
                    return (<span key={counter++} className={'disabled-link'}>
                        <ReactMarkdown children={link.label}/>
                    </span>)
                }
            })}
        </div>
    );
}

export default PaginationLinks;
