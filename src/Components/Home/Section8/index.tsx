import React, { FC } from "react";
import classes from "./section8.module.scss";

const listItem = [
  {
    id: "item1",
    title: "Area of Expertise!",
    icon: "",
    option1: {
      title: "Style",
      content:
        "Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.",
    },
    option2: {
      title: "Trending Fashion",
      content:
        "Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.",
    },
    option3: {
      title: "People & Places",
      content:
        "Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.",
    },
    option4: {
      title: "Before - After",
      content:
        "Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.",
    },
  },
  {
    id: "item2",
    image: "",
    title: "I've Worked with from Big Agencies to New Bloggers.",
    content:
      "Molestiae purus facilisi nonummy soluta nisi odit, ac taciti voluptatibus, eveniet veritatis cubilia magna. Imperdiet.",
    textBtn: "Read More",
    icon: "",
  },
  {
    id: "item3",
    image: "",
    title: "I Can Help You Take Your next Step Regardless of Size.",
    content:
      "Molestiae purus facilisi nonummy soluta nisi odit, ac taciti voluptatibus, eveniet veritatis cubilia magna. Imperdiet. ",
    textBtn: "Read More",
    icon: "",
  },
];

const Section8: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.wrapSection8}>
        <div className={classes.coverSection8}>
          {listItem.map((it) => (
            <div className={classes.item} key={it.id}>
              {/* {it.id === "item1" ? <div>item1</div> : <div>item 2, 3</div>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section8;
