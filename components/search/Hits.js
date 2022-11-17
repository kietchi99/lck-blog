//react
import { useMemo } from 'react';

//react-instantsearch-dom
import { connectHits } from 'react-instantsearch-dom';

//material
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

//components
import HitNoResult from './HitNoResult';
import HighLight from './HightLight';


const Hits = ({ hits, onSearchClose }) => {
    const renderedHitItems = useMemo(() => {
        if (hits.length === 0) return <HitNoResult />

        return hits.map((hit) =>(
                <ListItemButton
                    key={hit.slug}
                    href={`/blog/${hit.slug}`}
                    onClick={onSearchClose}
                >
                    <ListItemAvatar>
                        <Avatar variant="rounded" src={hit.imagecover} />
                    </ListItemAvatar>

                <ListItemText
                    primary={<HighLight hit={hit} attribute="title" />}
                />
                </ListItemButton>
            )
        )
    }, [hits, onSearchClose]);

    return <>{renderedHitItems}</>
}

const CustomHits = connectHits(Hits);

export default CustomHits;