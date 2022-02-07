import {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritePage() {
    const favortitesCtx = useContext(FavoritesContext);
    return (
        <section>
            <h1>My Favorites</h1>
            <MeetupList meetups={favortitesCtx.favorites} />
        </section>
    );
}

export default FavoritePage;