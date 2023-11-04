import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Movie } from '../pages/Movie';
import { MovieEdit } from '../pages/MovieEdit';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/movie/:id' element={<Movie />} />
            <Route path='/movie/:id/edit' element={<MovieEdit />} />
        </Routes>
    )
}