import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './Pagination.css';

interface Props {
  moviesPage: number;
  moviesTotalPages: number;
  textQuery: string;
  pageQuery: string;
}

export const Pagination = ({ moviesTotalPages, moviesPage, textQuery, pageQuery }: Props) => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/search?q=${textQuery}&page=${+pageQuery + 1}`)
  }

  const handlePrev = () => {
    navigate(`/search?q=${textQuery}&page=${+pageQuery + -1}`)
  }

  return (
    <div className='pagination'>
      {
        textQuery && <div className='paginate-buttons-container'>
          {
            moviesPage > 1
            && <button
                  className='paginate-button'
                  onClick={handlePrev}
                >
                  <AiOutlineArrowLeft title='previous' />
                </button>
          }
          {
            moviesTotalPages > moviesPage
              && <button
                    className='paginate-button'
                    onClick={handleNext}
                  >
                    <AiOutlineArrowRight title='next' />
                  </button>
          }
        </div>
      }
      {
        textQuery
          && moviesTotalPages > 0
          && <span className='total-pages'>{moviesPage} / {moviesTotalPages}</span>
      }
    </div>
  );

}
