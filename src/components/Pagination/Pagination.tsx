import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './Pagination.css';

interface Props {
  page: number;
  totalPages: number;
  handleNext: () => void;
  handlePrev: () => void;
}

export const Pagination = ({ page, totalPages, handleNext, handlePrev }: Props) => {
  return (
    <div className="pagination">
      <span className="total-pages">{ page } / { totalPages }</span>
      <div className="pagination-buttons">
        {
          page > 1
            && <button
                  onClick={handlePrev}
                  title='previous page'
                >
                  <AiOutlineArrowLeft/>
                </button>
        }
        {
          page + 1 <= totalPages
            && <button
                  title='next page'
                  onClick={handleNext}
                >
                  <AiOutlineArrowRight/>
                </button>
        }
      </div>
    </div>
  );
}
