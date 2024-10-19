import React, { useState } from "react";

const reviews1 = [
  {
    id: 1,
    name: "Purnachandhar",
    company: "pvt",
    review: "asdfghjkl;",
    imgUrl: "/",
    alt: "hi",
  },
  {
    id: 2,
    name: "Pu2rnachandhar",
    company: "pvt",
    review: "asdfghjkl;",
    imgUrl: "/",
    alt: "hi",
  },
  {
    id: 3,
    name: "3Purnachandhar",
    company: "pvt",
    review: "asdfghjkl;",
    imgUrl: "/",
    alt: "hi",
  },
  {
    id: 4,
    name: "P4urnachandhar",
    company: "pvt",
    review: "asdfghjkl;",
    imgUrl: "/",
    alt: "hi",
  },
  {
    id: 5,
    name: "Pu5rnachandhar",
    company: "pvt",
    review: "asdfghjkl;",
    imgUrl: "/",
    alt: "hi",
  },
  {
    id: 6,
    name: "Pur6nachandhar",
    company: "pvt",
    review: "asdfghjkl;",
    imgUrl: "/",
    alt: "hi",
  },
];
// idea is to count is 0 and count considered as index and show
// show respected count index
// right button to increse
//left to decrese

export default function Reviews() {
  const [count, setCount] = useState(0);
  const myLeft = () => {
    if (count === 0) {
      setCount(reviews1.length);
    } else {
      setCount(count - 1);
    }
  };

  // const onLeft = () => {
  //   if (index > 0) {
  //     setIndex(index - 1)
  //   }
  // }

  // const onRight = () => {
  //   if (index < reviewsList.length - 1) {
  //     setIndex(index + 1)
  //   }
  // }
  return (
    <div>
      <h1>Reviews</h1>
      <button onClick={myLeft}>left</button>
      {/* <h1>{reviews1[count].name}</h1> */}
      <h1>{reviews1[count]}</h1>
      <button>right</button>

      {/* // 1
  import {useState} from 'react'

const ReviewCarousel = props => {
  const {reviewsList} = props
  const [index, setIndex] = useState(0)

  const onLeft = () => {
    if (index === 0) {
      return setIndex(reviewsList.length - 1)
    }
    return setIndex(index - 1)
  }
  const onRight = () => {
    if (index === reviewsList.length - 1) {
      return setIndex(0)
    }
    return setIndex(index + 1)
  }
  return (
    <div>
      <h1>Reviews</h1>
      <div>
        <button id="leftArrow" type="button" onClick={onLeft}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div>
          <img
            src={reviewsList[index].imgUrl}
            alt={reviewsList[index].username}
          />
          <p>{reviewsList[index].username}</p>
          <p>{reviewsList[index].companyName}</p>
          <p>{reviewsList[index].description}</p>
        </div>
        <button id="rightArrow" type="button" onClick={onRight}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewCarousel

  */}
      {/* // chatgpt clear al test cases
import {useState} from 'react'

const ReviewCarousel = props => {
  const {reviewsList} = props
  const [index, setIndex] = useState(0)

  const onLeft = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const onRight = () => {
    if (index < reviewsList.length - 1) {
      setIndex(index + 1)
    }
  }

  return (
    <div>
      <h1>Reviews</h1>
      <div>
        <button data-testid="leftArrow" type="button" onClick={onLeft}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div>
          <img
            src={reviewsList[index].imgUrl}
            alt={reviewsList[index].username}
          />
          <p>{reviewsList[index].username}</p>
          <p>{reviewsList[index].companyName}</p>
          <p>{reviewsList[index].description}</p>
        </div>
        <button data-testid="rightArrow" type="button" onClick={onRight}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewCarousel
 */}
    </div>
  );
}
