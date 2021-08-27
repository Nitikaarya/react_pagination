import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts , Paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
       pageNumbers.push(i);
    }
    return (
        <div>
            <ul class="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={()=> Paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>    
        </div>
    )
}
