import React from 'react'

function Result(props) {

    return (
        <div>
            <img src={props.image_url} />
            Name: {props.name}
            Link: {props.url}
            Rating: {props.rating}
            Score: {( props.review_count * props.rating ) / (review_count + 1)}
            {/* Location: parsing location object info into html syntax */}
        </div>
    )
}

export default Result