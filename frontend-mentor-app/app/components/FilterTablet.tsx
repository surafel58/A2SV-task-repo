import { useDispatch } from 'react-redux';
import { setFilter } from '../features/filterSlice';

const FilterTablet = ({role, level, languages}:{role : string, level: string, languages : string[]}) => {
    const dispatch = useDispatch();
    
    const handleFilterClick = (role : string[], level : string[], language : string[]) => {
        dispatch(setFilter({role, level, language }));
      };
    
    return (
        <>
        <div className="filter_tablet" onClick={(e) => handleFilterClick([role], [], [])}>{role}</div>
        <div className="filter_tablet" onClick={(e) => handleFilterClick([], [level], [])}>{level}</div>
        {languages.map(language => <div className="filter_tablet" onClick={(e) => handleFilterClick([], [], [language])}>{language}</div>)}
        </>
     );
}
 
export default FilterTablet;