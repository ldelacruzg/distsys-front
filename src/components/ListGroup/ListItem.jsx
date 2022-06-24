import { useContext, useEffect } from 'react'
import { PostsContext } from '../../context/PostsContext';
import { posts } from '../../data';

const ListItem = ({ title, num, unitId }) => {

  /**
   * 1. Recibir una prop con el id de la unidad
   * 2. Filtrar los posts por el id de la unidad
   * 3. Actualizar los posts del PostsContext
   */
  const { setPostsProvider } = useContext(PostsContext);

  const handleOnClick = (e) => {
    setPostsProvider(posts.filter(({ unitsNumber }) => unitsNumber === unitId));
  }

  return (
    <li className="list-group-item">
      <a href="#" onClick={handleOnClick}>
        <span className="size-11 text-muted pull-right">
          ({num})
        </span>
        {title}
      </a>
    </li>
  );
}

export default ListItem